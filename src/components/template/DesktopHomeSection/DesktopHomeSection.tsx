import React from "react"
import HomeSection from "../HomeSection/HomeSection"
import styles from "./DesktopHomeSection.module.scss"
import serviceImage from "@Images/service.webp"
import companyImage from "@Images/company_profile.webp"
import recruitImage from "@Images/recruitment_information.webp"

const DesktopHomeSection = () => {
  return (
    <div className={styles.homeSectionWrapper}>
      <HomeSection
        title="サービス内容"
        description="現場ごとに変わる作業環境に応じた最適な移動式クレーンを手配し、優秀なオペレータによる吊り上げ作業で、安全・確実な空間移動を実現します。"
        link="/service"
        imageUrl={serviceImage}
      />
      <HomeSection
        direction="alternate"
        title={"会社について"}
        description={
          "昭和58年の創業以来、地道に着実にクレーン作業を通じて社会インフラの整備や企業活動の発展に貢献してまいりました。"
        }
        link={"/company"}
        imageUrl={companyImage}
      />
      <HomeSection
        title={"採用情報"}
        description={
          "「ありがとう！うまくいったよ」と笑顔で感謝される。毎日の仕事がみんなの生きる支えとなる。社会に貢献する充実感で満たされる。そんな仕事があなたを求めています。"
        }
        link={"/recruit"}
        imageUrl={recruitImage}
      />
    </div>
  )
}

export default DesktopHomeSection
