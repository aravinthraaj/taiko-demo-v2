import SubHeroSection from "@/components/template/SubHeroSection/SubHeroSection"
import React from "react"
import styles from "./company.module.scss"
import Image from "next/image"
import PlaceholderImage from "@Images/placeholder.png"
import companyImage from "@Images/company_profile.webp"

const page = () => {
  return (
    <div className={styles.companyPage}>
      <SubHeroSection
        title={"Company"}
        subtitle={"会社について"}
        description={
          "昭和58年の創業以来、地道に着実にクレーン作業を通じて社会インフラの整備や企業活動の発展に貢献してまいりました。"
        }
        imageUrl={companyImage}
      />
      <div className={styles.companyProfile}>
        <div className={styles.companyDetails}>
          <div className={styles.title}>会社概要</div>
          <ul>
            <li>
              <span>社名</span> <p>株式会社　大弘重機</p>
            </li>
            <li>
              <span>住所</span>
              <p>
                【本社】
                <br />
                〒444-0701 <br className={styles.mobileBr} />{" "}
                愛知県西尾市東幡豆町田中46-1
                <br />
                【吉良配車センター】
                <br />
                〒444-0501
                <br className={styles.mobileBr} />
                愛知県西尾市吉良町駮馬東城66-1
              </p>
            </li>

            <li>
              <span>TEL・FAX</span>{" "}
              <p>
                【本社】
                <br />
                TEL　0563-62-3240　
                <br className={styles.mobileBr} />
                FAX　0563-62-5508
                <br />
                【吉良配車センター】
                <br /> TEL　0563-35-3800　
                <br className={styles.mobileBr} />
                FAX　0563-35-3208
              </p>
            </li>
            <li>
              <span>事業内容</span>{" "}
              <p>
                移動式クレーンによるクレーン作業請負、
                <br />
                その他関連付随する業務
              </p>
            </li>
            <li>
              <span>保有機械</span>
              <p>
                ラフタークレーン
                <br />
                13ｔ～65ｔ、70ｔ、
                <br className={styles.mobileBr} />
                100ｔ＜GR1000N＞
                <br />
                オールテレーンクレーン
                <br />
                100ｔ160ｔ＜非分解＞
                <br className={styles.mobileBr} />
                ～400ｔ＜ATF400G6＞
                <br />
                クレーン組付・解体専用リフター
                <br className={styles.mobileBr} />
                ＜KL6000＞
                <br />
                スカイボックス＜SS-150＞（稼働式ゴンドラ）
                <br />
                敷鉄板リース　など
              </p>
            </li>
            <li>
              <span>代表者</span>
              <p>大嶽　公寿</p>
            </li>
            <li>
              <span>従業員数</span>
              <p>15名（グループ会社含め　29名）</p>
            </li>
            <li>
              <span>事業許可</span>
              <p>
                とび・土工工事業
                <br />
                愛知県知事許可（般－28）第54073号
              </p>
            </li>
            <li>
              <span>所属団体</span>
              <p>
                全国クレーン建設業協会　愛知支部
                <br />
                西三河クレーン組合
                <br />
                西尾法人会
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.message}>
        <div className={styles.title}>代表挨拶</div>
        <div className={styles.imageWrapper}>
          <Image
            src={companyImage}
            alt="owner"
            fill
            // objectFit="cover"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className={styles.titlesWrapper}>
          <div className={styles.subTitle}>おおだけ　きみひさ</div>
          <div className={styles.name}>大嶽　公寿</div>
        </div>
        <div className={styles.description}>
          　弊社ホームページをご覧頂き、ありがとうございます。 <br />
          <br />
          先代創業者が昭和58年に事業開始して以来、常に『他社には無い技術・道具・車両で、より安全で効率的な作業を提供しよう』と心掛けてまいりました。おかげさまで、創業以来大きな事故もなく、幾多の経済的な苦境も乗り越え、小さいながらも三河エリアでは相応の存在感を発揮できるまでに成長することが出来ました、ありがとうございます。
          <br />
          <br />
          これも、我が事のようにご指導頂ける御客様や、様々な創意工夫で安全確実な作業を進める社員・オペレータが居たからこそ成しえたものであり、改めて御礼申し上げます
          。今では保有総トン数としては三河エリアでNo.1となりましたが、それ以上に誇れるものは安全作業に徹する優秀なオペレータが数多く揃い、多数の御客様からご用命頂けていることであります
          。<br />
          <br />
          これからも、地域に無くてはならない存在として、社会インフラの整備や企業活動の発展に貢献できるよう努めてまいりますので、引き続きご用命頂きますよう、宜しくお願い致します。
        </div>
      </div>
    </div>
  )
}

export default page
