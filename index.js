require("dotenv").config();
require("./config/config");
const banks = require("./config/bank.json");
const BANK_BIN = banks.map((bank) => bank.bin);

const bodyParser = require("body-parser");
const express = require("express");
const QRCode = require("qrcode");
const crc16 = require("./src/crc");
const stringUtils = require("./src/string-utils");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set("port", global.gConfig.node_port || 7510);

const http = require("http").Server(app);

const TEMPLATE = {
  head: "00020101021238",
  identity_length: "",
  guid: "0010A000000727",
  head_customer: "01",
  customer_length: "",
  head_bin: "0006",
  bank_bin: "",
  head_bank_number: "01",
  bank_number_length: "",
  bank_number: "",
  tail_customer: "0208QRIBFTTA",
  currency: "5303704",
  head_amount: "54",
  amount_length: "",
  amount: "",
  country: "5802VN",
  head_extra: "62",
  extra_length: "",
  head_note: "08",
  note_length: "",
  note: "",
  head_crc: "6304",
  crc: "",
};

function validate({ bank_bin, bank_number, amount, note }) {
  if (!bank_bin || !BANK_BIN.includes(bank_bin))
    return { status: 404, code: -1, message: "invalid bank_bin" };

  if (!bank_number || bank_number.length > 19)
    return {
      status: 404,
      code: -2,
      message: "invalid bank_number (max 19 char)",
    };

  if (!amount || String(amount).length > 13)
    return { status: 404, code: -3, message: "invalid amount (max 13 char)" };

  if (!note || note.length > 50)
    return { status: 404, code: -1, message: "invalid note (max 50 char)" };
}

function generate({ bank_bin, bank_number, amount, note }) {
  const template = { ...TEMPLATE };
  template.note = stringUtils.anyAscii(note);
  template.note_length = String(note.length).padStart(2, "0");

  const extra = template.head_note + template.note_length + template.note;
  template.extra_length = String(extra.length).padStart(2, "0");

  template.amount = amount;
  template.amount_length = String(amount.length).padStart(2, "0");

  template.bank_number = bank_number;
  template.bank_number_length = String(bank_number.length).padStart(2, "0");
  template.bank_bin = bank_bin;

  const customer =
    template.head_bin +
    template.bank_bin +
    template.head_bank_number +
    template.bank_number_length +
    template.bank_number;
  template.customer_length = customer.length;

  const identity =
    template.guid +
    template.head_customer +
    template.customer_length +
    customer +
    template.tail_customer;
  template.identity_length = identity.length;

  let result =
    template.head +
    template.identity_length +
    identity +
    template.currency +
    template.head_amount +
    template.amount_length +
    template.amount +
    template.country +
    template.head_extra +
    template.extra_length +
    extra +
    template.head_crc;

  const crcResult = crc16(result).toString(16).toUpperCase();
  result += String(crcResult).padStart(4, "0");
  return result;
}

app.post("/generate", function (req, res) {
  res.setHeader("Content-Type", "application/json");

  const error = validate(req.body, res);

  if (error) return res.send(error);

  const result = generate(req.body);

  res.send({
    status: 200,
    code: 1,
    message: "success",
    data: { result, ...req.body },
  });
});

app.get("/qrcode", (req, res) => {
  const error = validate(req.query);

  if (error) return res.send(error);

  const result = generate(req.query);

  QRCode.toDataURL(
    result,
    { errorCorrectionLevel: "M" },

    function (err, url) {
      if (err) {
        console.error(err);
        return res.send({ status: 500, code: 0, message: err.message });
      }

      if (req.query.type == "image") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(`<div style='text-align:center'>
                    <img src=${url} alt="QRCode" />
                  </div>`);
        res.end();
      } else
        return res.send({
          status: 200,
          code: 1,
          message: "success",
          data: { url, ...req.query },
        });
    }
  );
});

app.use(express.static("public"));

http.listen(app.get("port"), function () {
  console.log("Express server listening on port " + app.get("port"));
});
