# api docs

**GET** http://localhost:7510/qrcode?bank_bin={BANK_BIN}&bank_number={BANK_NUMBER}&amount={AMOUNT}&note={NOTE}&type={TYPE}

query-string:

- **bank_bin** (string): lookup in table
- **bank_number** (string): bank number account (max 19 characters)
- **amount** (string): transaction amount (max 13 characters)
- **note** (string): transaction note (max 25 characters)
- **type** (string) [OPTION]: default undefined => return image src base64, type=image return html image

example:

- image html:

http://localhost:7510/qrcode?bank_bin=970407&bank_number=1972222222&amount=50000&note=a%20cup%20of%20coffee&type=image

response:

```
<div style='text-align:center'>
  <img src=data:image/png;base64,iVBORw0KG...RU5ErkJggg== alt="QRCode" />
</div>
```

- image src base64:

http://localhost:7510/qrcode?bank_bin=970407&bank_number=1972222222&amount=50000&note=a%20cup%20of%20coffee

response:

```
{
  "status": 200,
  "code": 1,
  "message": "success",
  "data": {
    "url": "data:image/png;base64,iVBORw0...U5ErkJggg==",
    "bank_bin": "970407",
    "bank_number": "1972222222",
    "amount": "123456",
    "note": "thanh toan abc"
  }
}
```

# Bank BIN

| id  | name                                                       | code      | bin    | shortName         | logo                                                       | transferSupported | lookupSupported | short_name        | support | isTransfer | swift_code |
| --- | ---------------------------------------------------------- | --------- | ------ | ----------------- | ---------------------------------------------------------- | ----------------- | --------------- | ----------------- | ------- | ---------- | ---------- |
| 17  | Ngân hàng TMCP Công thương Việt Nam                        | ICB       | 970415 | VietinBank        | https://api.vietqr.io/img/ICB.png                          | 1                 | 1               | VietinBank        | 3       | 1          | ICBVVNVX   |
| 43  | Ngân hàng TMCP Ngoại Thương Việt Nam                       | VCB       | 970436 | Vietcombank       | https://api.vietqr.io/img/VCB.png                          | 1                 | 1               | Vietcombank       | 3       | 1          | BFTVVNVX   |
| 4   | Ngân hàng TMCP Đầu tư và Phát triển Việt Nam               | BIDV      | 970418 | BIDV              | https://api.vietqr.io/img/BIDV.png                         | 1                 | 1               | BIDV              | 3       | 1          | BIDVVNVX   |
| 42  | Ngân hàng Nông nghiệp và Phát triển Nông thôn Việt Nam     | VBA       | 970405 | Agribank          | https://api.vietqr.io/img/VBA.png                          | 1                 | 1               | Agribank          | 3       | 1          | VBAAVNVX   |
| 26  | Ngân hàng TMCP Phương Đông                                 | OCB       | 970448 | OCB               | https://api.vietqr.io/img/OCB.png                          | 1                 | 1               | OCB               | 3       | 1          | ORCOVNVX   |
| 21  | Ngân hàng TMCP Quân đội                                    | MB        | 970422 | MBBank            | https://api.vietqr.io/img/MB.png                           | 1                 | 1               | MBBank            | 3       | 1          | MSCBVNVX   |
| 38  | Ngân hàng TMCP Kỹ thương Việt Nam                          | TCB       | 970407 | Techcombank       | https://api.vietqr.io/img/TCB.png                          | 1                 | 1               | Techcombank       | 3       | 1          | VTCBVNVX   |
| 2   | Ngân hàng TMCP Á Châu                                      | ACB       | 970416 | ACB               | https://api.vietqr.io/img/ACB.png                          | 1                 | 1               | ACB               | 3       | 1          | ASCBVNVX   |
| 47  | Ngân hàng TMCP Việt Nam Thịnh Vượng                        | VPB       | 970432 | VPBank            | https://api.vietqr.io/img/VPB.png                          | 1                 | 1               | VPBank            | 3       | 1          | VPBKVNVX   |
| 39  | Ngân hàng TMCP Tiên Phong                                  | TPB       | 970423 | TPBank            | https://api.vietqr.io/img/TPB.png                          | 1                 | 1               | TPBank            | 3       | 1          | TPBVVNVX   |
| 36  | Ngân hàng TMCP Sài Gòn Thương Tín                          | STB       | 970403 | Sacombank         | https://api.vietqr.io/img/STB.png                          | 1                 | 1               | Sacombank         | 3       | 1          | SGTTVNVX   |
| 12  | Ngân hàng TMCP Phát triển Thành phố Hồ Chí Minh            | HDB       | 970437 | HDBank            | https://api.vietqr.io/img/HDB.png                          | 1                 | 1               | HDBank            | 3       | 1          | HDBCVNVX   |
| 44  | Ngân hàng TMCP Bản Việt                                    | VCCB      | 970454 | VietCapitalBank   | https://api.vietqr.io/img/VCCB.png                         | 1                 | 1               | VietCapitalBank   | 3       | 1          | VCBCVNVX   |
| 31  | Ngân hàng TMCP Sài Gòn                                     | SCB       | 970429 | SCB               | https://api.vietqr.io/img/SCB.png                          | 1                 | 1               | SCB               | 3       | 1          | SACLVNVX   |
| 45  | Ngân hàng TMCP Quốc tế Việt Nam                            | VIB       | 970441 | VIB               | https://api.vietqr.io/img/VIB.png                          | 1                 | 1               | VIB               | 3       | 1          | VNIBVNVX   |
| 35  | Ngân hàng TMCP Sài Gòn - Hà Nội                            | SHB       | 970443 | SHB               | https://api.vietqr.io/img/SHB.png                          | 1                 | 1               | SHB               | 3       | 1          | SHBAVNVX   |
| 10  | Ngân hàng TMCP Xuất Nhập khẩu Việt Nam                     | EIB       | 970431 | Eximbank          | https://api.vietqr.io/img/EIB.png                          | 1                 | 1               | Eximbank          | 3       | 1          | EBVIVNVX   |
| 22  | Ngân hàng TMCP Hàng Hải                                    | MSB       | 970426 | MSB               | https://api.vietqr.io/img/MSB.png                          | 1                 | 1               | MSB               | 3       | 1          | MCOBVNVX   |
| 53  | TMCP Việt Nam Thịnh Vượng - Ngân hàng số CAKE by VPBank    | CAKE      | 546034 | CAKE              | https://api.vietqr.io/img/CAKE.png                         | 1                 | 1               | CAKE              | 3       | 1          |            |
| 54  | TMCP Việt Nam Thịnh Vượng - Ngân hàng số Ubank by VPBank   | Ubank     | 546035 | Ubank             | https://api.vietqr.io/img/UBANK.png                        | 1                 | 1               | Ubank             | 3       | 1          |            |
| 58  | Ngân hàng số Timo by Ban Viet Bank (Timo by Ban Viet Bank) | TIMO      | 963388 | Timo              | https://vietqr.net/portal-service/resources/icons/TIMO.png | 1                 |                 | Timo              |         | 1          |            |
| 57  | Viettel Money                                              | VTLMONEY  | 971005 | ViettelMoney      | https://api.vietqr.io/img/VIETTELMONEY.png                 |                   | 1               | ViettelMoney      |         |            |            |
| 56  | VNPT Money                                                 | VNPTMONEY | 971011 | VNPTMoney         | https://api.vietqr.io/img/VNPTMONEY.png                    |                   | 1               | VNPTMoney         |         |            |            |
| 34  | Ngân hàng TMCP Sài Gòn Công Thương                         | SGICB     | 970400 | SaigonBank        | https://api.vietqr.io/img/SGICB.png                        | 1                 | 1               | SaigonBank        | 3       | 1          | SBITVNVX   |
| 3   | Ngân hàng TMCP Bắc Á                                       | BAB       | 970409 | BacABank          | https://api.vietqr.io/img/BAB.png                          | 1                 | 1               | BacABank          | 3       | 1          | NASCVNVX   |
| 30  | Ngân hàng TMCP Đại Chúng Việt Nam                          | PVCB      | 970412 | PVcomBank         | https://api.vietqr.io/img/PVCB.png                         | 1                 | 1               | PVcomBank         | 3       | 1          | WBVNVNVX   |
| 27  | Ngân hàng Thương mại TNHH MTV Đại Dương                    | Oceanbank | 970414 | Oceanbank         | https://api.vietqr.io/img/OCEANBANK.png                    | 1                 | 1               | Oceanbank         | 3       | 1          | OCBKUS3M   |
| 24  | Ngân hàng TMCP Quốc Dân                                    | NCB       | 970419 | NCB               | https://api.vietqr.io/img/NCB.png                          | 1                 | 1               | NCB               | 3       | 1          | NVBAVNVX   |
| 37  | Ngân hàng TNHH MTV Shinhan Việt Nam                        | SHBVN     | 970424 | ShinhanBank       | https://api.vietqr.io/img/SHBVN.png                        | 1                 | 1               | ShinhanBank       | 3       | 1          | SHBKVNVX   |
| 1   | Ngân hàng TMCP An Bình                                     | ABB       | 970425 | ABBANK            | https://api.vietqr.io/img/ABB.png                          | 1                 | 1               | ABBANK            | 3       | 1          | ABBKVNVX   |
| 41  | Ngân hàng TMCP Việt Á                                      | VAB       | 970427 | VietABank         | https://api.vietqr.io/img/VAB.png                          | 1                 | 1               | VietABank         | 3       | 1          | VNACVNVX   |
| 23  | Ngân hàng TMCP Nam Á                                       | NAB       | 970428 | NamABank          | https://api.vietqr.io/img/NAB.png                          | 1                 | 1               | NamABank          | 3       | 1          | NAMAVNVX   |
| 29  | Ngân hàng TMCP Xăng dầu Petrolimex                         | PGB       | 970430 | PGBank            | https://api.vietqr.io/img/PGB.png                          | 1                 | 1               | PGBank            | 3       | 1          | PGBLVNVX   |
| 46  | Ngân hàng TMCP Việt Nam Thương Tín                         | VIETBANK  | 970433 | VietBank          | https://api.vietqr.io/img/VIETBANK.png                     | 1                 | 1               | VietBank          | 3       | 1          | VNTTVNVX   |
| 5   | Ngân hàng TMCP Bảo Việt                                    | BVB       | 970438 | BaoVietBank       | https://api.vietqr.io/img/BVB.png                          | 1                 | 1               | BaoVietBank       | 3       | 1          | BVBVVNVX   |
| 33  | Ngân hàng TMCP Đông Nam Á                                  | SEAB      | 970440 | SeABank           | https://api.vietqr.io/img/SEAB.png                         | 1                 | 1               | SeABank           | 3       | 1          | SEAVVNVX   |
| 52  | Ngân hàng Hợp tác xã Việt Nam                              | COOPBANK  | 970446 | COOPBANK          | https://api.vietqr.io/img/COOPBANK.png                     | 1                 | 1               | COOPBANK          | 3       | 1          |            |
| 20  | Ngân hàng TMCP Bưu Điện Liên Việt                          | LPB       | 970449 | LienVietPostBank  | https://api.vietqr.io/img/LPB.png                          | 1                 | 1               | LienVietPostBank  | 3       | 1          | LVBKVNVX   |
| 19  | Ngân hàng TMCP Kiên Long                                   | KLB       | 970452 | KienLongBank      | https://api.vietqr.io/img/KLB.png                          | 1                 | 1               | KienLongBank      | 3       | 1          | KLBKVNVX   |
| 55  | Ngân hàng Đại chúng TNHH Kasikornbank                      | KBank     | 668888 | KBank             | https://api.vietqr.io/img/KBANK.png                        | 1                 | 1               | KBank             | 3       | 1          | KASIVNVX   |
| 48  | Ngân hàng Liên doanh Việt - Nga                            | VRB       | 970421 | VRB               | https://api.vietqr.io/img/VRB.png                          |                   | 1               | VRB               |         |            |            |
| 8   | DBS Bank Ltd - Chi nhánh Thành phố Hồ Chí Minh             | DBS       | 796500 | DBSBank           | https://api.vietqr.io/img/DBS.png                          |                   |                 | DBSBank           |         |            | DBSSVNVX   |
| 49  | Ngân hàng TNHH MTV Woori Việt Nam                          | WVN       | 970457 | Woori             | https://api.vietqr.io/img/WVN.png                          | 1                 | 1               | Woori             |         | 1          |            |
| 50  | Ngân hàng Kookmin - Chi nhánh Hà Nội                       | KBHN      | 970462 | KookminHN         | https://api.vietqr.io/img/KBHN.png                         |                   |                 | KookminHN         |         |            |            |
| 51  | Ngân hàng Kookmin - Chi nhánh Thành phố Hồ Chí Minh        | KBHCM     | 970463 | KookminHCM        | https://api.vietqr.io/img/KBHCM.png                        |                   |                 | KookminHCM        |         |            |            |
| 6   | Ngân hàng Thương mại TNHH MTV Xây dựng Việt Nam            | CBB       | 970444 | CBBank            | https://api.vietqr.io/img/CBB.png                          |                   | 1               | CBBank            |         |            | GTBAVNVX   |
| 25  | Ngân hàng Nonghyup - Chi nhánh Hà Nội                      | NHB HN    | 801011 | Nonghyup          | https://api.vietqr.io/img/NHB.png                          |                   |                 | Nonghyup          |         |            |            |
| 7   | Ngân hàng TNHH MTV CIMB Việt Nam                           | CIMB      | 422589 | CIMB              | https://api.vietqr.io/img/CIMB.png                         | 1                 | 1               | CIMB              |         | 1          | CIBBVNVN   |
| 9   | Ngân hàng TMCP Đông Á                                      | DOB       | 970406 | DongABank         | https://api.vietqr.io/img/DOB.png                          |                   | 1               | DongABank         |         |            | EACBVNVX   |
| 11  | Ngân hàng Thương mại TNHH MTV Dầu Khí Toàn Cầu             | GPB       | 970408 | GPBank            | https://api.vietqr.io/img/GPB.png                          |                   | 1               | GPBank            |         |            | GBNKVNVX   |
| 13  | Ngân hàng TNHH MTV Hong Leong Việt Nam                     | HLBVN     | 970442 | HongLeong         | https://api.vietqr.io/img/HLBVN.png                        |                   | 1               | HongLeong         |         |            | HLBBVNVX   |
| 40  | Ngân hàng United Overseas - Chi nhánh TP. Hồ Chí Minh      | UOB       | 970458 | UnitedOverseas    | https://api.vietqr.io/img/UOB.png                          |                   | 1               | UnitedOverseas    |         |            |            |
| 14  | Ngân hàng TNHH MTV HSBC (Việt Nam)                         | HSBC      | 458761 | HSBC              | https://api.vietqr.io/img/HSBC.png                         |                   | 1               | HSBC              |         |            | HSBCVNVX   |
| 15  | Ngân hàng Công nghiệp Hàn Quốc - Chi nhánh Hà Nội          | IBK - HN  | 970455 | IBKHN             | https://api.vietqr.io/img/IBK.png                          |                   |                 | IBKHN             |         |            |            |
| 28  | Ngân hàng TNHH MTV Public Việt Nam                         | PBVN      | 970439 | PublicBank        | https://api.vietqr.io/img/PBVN.png                         |                   | 1               | PublicBank        |         |            | VIDPVNVX   |
| 16  | Ngân hàng Công nghiệp Hàn Quốc - Chi nhánh TP. Hồ Chí Minh | IBK - HCM | 970456 | IBKHCM            | https://api.vietqr.io/img/IBK.png                          |                   |                 | IBKHCM            |         |            |            |
| 18  | Ngân hàng TNHH Indovina                                    | IVB       | 970434 | IndovinaBank      | https://api.vietqr.io/img/IVB.png                          |                   | 1               | IndovinaBank      |         |            |            |
| 32  | Ngân hàng TNHH MTV Standard Chartered Bank Việt Nam        | SCVN      | 970410 | StandardChartered | https://api.vietqr.io/img/SCVN.png                         |                   | 1               | StandardChartered |         |            | SCBLVNVX   |
