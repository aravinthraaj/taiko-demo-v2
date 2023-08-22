// "use client"
import styles from "./Home.module.scss"
import HeroSection from "@/components/template/HeroSection/HeroSection"
import StrengthSection from "@/components/template/StrengthSection/StrengthSection"
import DesktopHomeSection from "@/components/template/DesktopHomeSection/DesktopHomeSection"
import MobileHomeSection from "@/components/template/MobileHomeSection/MobileHomeSection"

import serviceImage from "@Images/service.webp"
import companyImage from "@Images/company_profile.webp"
import recruitImage from "@Images/recruitment_information.webp"


export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <StrengthSection />
      <div className={styles.mobile}>
        <>
          <MobileHomeSection
            imageUrl={serviceImage}
            title={"サービス内容"}
            description={
              "現場ごとに変わる作業環境に応じた最適な移動式クレーンを手配し、優秀なオペレータによる吊り上げ作業で、安全・確実な空間移動を実現します。"
            }
            link={"/service"}
          />
          <MobileHomeSection
            imageUrl={companyImage}
            direction="alternate"
            title={"会社について"}
            description={
              "昭和58年の創業以来、地道に着実にクレーン作業を通じて社会インフラの整備や企業活動の発展に貢献してまいりました。"
            }
            link={"/company"}
          />
          <MobileHomeSection
            imageUrl={recruitImage}
            title={"採用情報"}
            description={
              "「ありがとう！うまくいったよ」と笑顔で感謝される。毎日の仕事がみんなの生きる支えとなる。社会に貢献する充実感で満たされる。そんな仕事があなたを求めています。"
            }
            link={"/recruit"}
          />
        </>
      </div>
      <div className={styles.desktop}>
        <DesktopHomeSection />
      </div>
      {/* {isMobile ? (
        <>
          <MobileHomeSection
            imageUrl={serviceImage}
            title={"サービス内容"}
            description={
              "現場ごとに変わる作業環境に応じた最適な移動式クレーンを手配し、優秀なオペレータによる吊り上げ作業で、安全・確実な空間移動を実現します。"
            }
            link={"/service"}
          />
          <MobileHomeSection
            imageUrl={companyImage}
            direction="alternate"
            title={"会社について"}
            description={
              "昭和58年の創業以来、地道に着実にクレーン作業を通じて社会インフラの整備や企業活動の発展に貢献してまいりました。"
            }
            link={"/company"}
          />
          <MobileHomeSection
            imageUrl={recruitImage}
            title={"採用情報"}
            description={
              "「ありがとう！うまくいったよ」と笑顔で感謝される。毎日の仕事がみんなの生きる支えとなる。社会に貢献する充実感で満たされる。そんな仕事があなたを求めています。"
            }
            link={"/recruit"}
          />
        </>
      ) : (
        <DesktopHomeSection />
      )} */}
    </main>
  )
}
