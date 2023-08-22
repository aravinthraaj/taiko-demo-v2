import vehicleImage from "@Images/vehicle.png"
import ATF400G6Image from "@Images/vechiles_model/ATF400G6.png"
import LTM1160NXImage from "@Images/vechiles_model/LTM1160NX.png"
import ATF100G4Image from "@Images/vechiles_model/ATF100G4.png"

import GR1000NImage from "@Images/vechiles_model/GR1000N.png"
import GR700NImage from "@Images/vechiles_model/GR700N.png"
import GR600N3Image from "@Images/vechiles_model/GR600N3.png"
import GR160N4Image from "@Images/vechiles_model/GR160N4.png"
import SL650RImage from "@Images/vechiles_model/SL650R.png"
import SR250RImage from "@Images/vechiles_model/SR250R.png"

import placeholder from "@Images/vechiles_model/placeholder.png"

export const allTerrainCranes = [
  {
    imageUrl: ATF400G6Image,
    weight: "400t",
    model: "タダノ ATF400G6",
    pdfUrl: "https://www.tadano.co.jp/products/ac/atf400g/index.html",
    price: "100,000",
  },
  {
    imageUrl: placeholder,
    weight: "250t",
    model: "リープヘル LTM1250NX",
    pdfUrl:
      "https://www.liebherr.com/ja/jpn/%E8%A3%BD%E5%93%81/%E3%83%A2%E3%83%90%E3%82%A4%E3%83%AB%E3%82%AF%E3%83%AC%E3%83%BC%E3%83%B3%E3%81%A8%E3%82%AF%E3%83%AD%E3%83%BC%E3%83%A9%E3%83%BC%E3%82%AF%E3%83%AC%E3%83%BC%E3%83%B3/%E3%83%A2%E3%83%90%E3%82%A4%E3%83%AB%E3%82%AF%E3%83%AC%E3%83%BC%E3%83%B3/%E3%83%AA%E3%83%BC%E3%83%97%E3%83%98%E3%83%AB%E3%83%A2%E3%83%90%E3%82%A4%E3%83%AB%E3%82%AF%E3%83%AC%E3%83%BC%E3%83%B3/ltm1250nx.html",
    price: "100,000",
  },
  {
    imageUrl: placeholder,
    weight: "220t",
    model: "タダノ ATF220N5",
    pdfUrl: "https://www.tadano.co.jp/products/ac/atf-220n-5_1/index.html",
    price: "100,000",
  },
  {
    imageUrl: LTM1160NXImage,
    weight: "160t",
    model: "リープヘル LTM1160NX",
    pdfUrl:
      "https://www.liebherr.com/ja/jpn/%E8%A3%BD%E5%93%81/%E3%83%A2%E3%83%90%E3%82%A4%E3%83%AB%E3%82%AF%E3%83%AC%E3%83%BC%E3%83%B3%E3%81%A8%E3%82%AF%E3%83%AD%E3%83%BC%E3%83%A9%E3%83%BC%E3%82%AF%E3%83%AC%E3%83%BC%E3%83%B3/%E3%83%A2%E3%83%90%E3%82%A4%E3%83%AB%E3%82%AF%E3%83%AC%E3%83%BC%E3%83%B3/%E3%83%AA%E3%83%BC%E3%83%97%E3%83%98%E3%83%AB%E3%83%A2%E3%83%90%E3%82%A4%E3%83%AB%E3%82%AF%E3%83%AC%E3%83%BC%E3%83%B3/ltm1160nx.html",
    price: "100,000",
  },
  {
    imageUrl: ATF100G4Image,
    weight: "100t",
    model: "タダノ ATF100G4",
    pdfUrl: "https://www.tadano.co.jp/products/ac/atf100g/index.html",
    price: "100,000",
  },
]

export const roughTerrainCranes = [
  {
    imageUrl: GR1000NImage,
    weight: "100t",
    model: "タダノ GR1000N",
    pdfUrl: "https://www.tadano.co.jp/products/rc/gr-1000n/index.html",
    price: "100,000",
  },
  {
    imageUrl: GR700NImage,
    weight: "70t",
    model: "タダノ GR700N",
    pdfUrl: "https://www.tadano.co.jp/products/rc/gr-700n/index.html",
    price: "100,000",
  },
  {
    imageUrl: SL650RImage,
    weight: "65t",
    model: "加藤 SL650R",
    pdfUrl:
      "https://www.kato-works.co.jp/products/roughter/pdf/SL/SL-650R_spec.pdf",
    price: "100,000",
  },
  {
    imageUrl: GR600N3Image,
    weight: "60t",
    model: "タダノ GR600N3",
    pdfUrl: "https://www.tadano.co.jp/service/data/documents/?id=31",
    price: "100,000",
  },
  {
    imageUrl: SR250RImage,
    weight: "25t",
    model: "加藤 SR250Rf, SR250R",
    pdfUrl: "https://www.kato-works.co.jp/profile/news/html/SR-250rf.html",
    price: "100,000",
  },
  {
    imageUrl: GR160N4Image,
    weight: "16t",
    model: "タダノ GR160N4",
    pdfUrl: "https://www.tadano.co.jp/service/data/documents/?id=44",
    price: "100,000",
  },
  {
    imageUrl: placeholder,
    weight: "13t",
    model: "加藤 MR130Ri、MR130",
    pdfUrl: "https://www.kato-works.co.jp/profile/news/html/MR130Ri.html",
    price: "100,000",
  },
]

export const others = [
  {
    imageUrl: placeholder,
    weight: "リフター",
    model: "KL6000",
    pdfUrl: "https://www.kato-works.co.jp/products/lifter/kl6000.html",
    price: "100,000",
  },
  {
    imageUrl: placeholder,
    weight: "高高度搭乗装置",
    model: "スカイボックス SS-150",
    pdfUrl:
      "https://tokyojuki.com/wp/wp-content/uploads/2016/02/151208skybox_web_pdf.pdf",
    price: "100,000",
  },
]
