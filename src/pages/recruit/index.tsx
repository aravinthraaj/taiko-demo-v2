import RecruitSection from "@/components/template/RecruitSection/RecruitSection"
import SubHeroSection from "@/components/template/SubHeroSection/SubHeroSection"
import React from "react"
import styles from "./recruit.module.scss"
import Button from "@/components/atoms/Button/Button"
import recruitImage from "@Images/recruitment_information.webp"
import recruitImage1 from "@Images/recruitment_information_1.webp"
import recruitImage2 from "@Images/recruitment_information_2.webp"
import Link from "next/link"

const page = () => {
  return (
    <div className={styles.recruitPage}>
      <SubHeroSection
        title={"Recruit"}
        subtitle={"採用情報"}
        description={"大事にする \n（お客・社員・機械・車両・道具）"}
        imageUrl={recruitImage}
      />
      <div className={styles.recruitSectionWrapper}>
        <RecruitSection
          description={
            "入社数年の同世代、仕事は真剣に取り組み、同じ悩みや喜\nびを共に感じつつ成長していきます。\nそして、ひとたび休息となればひとつのヤードで顔の見え\nる仲間とともに、笑顔が絶えず賑やかです。"
          }
          image={recruitImage}
        />
        <RecruitSection
          direction="alternate"
          description={
            "親子以上に年の離れた先輩も、同じオペレータとしてフ\nラットに接してくれます。\n「あの現場はどうだった」「こういう場合は、こうすると\n上手くいくだぞ」など、お互いの技術や経験を吸収しあい\nながら切磋琢磨していきます。"
          }
          image={recruitImage1}
        />
        <RecruitSection
          description={
            "お客様からの依頼を受け付ける配車センターも、クレーン\nのヤードも一体となってます。\nそのため、現場サイドの状況や要望、車両トラブルなども\nその場で確認して、即座に解決に向け動き出すことが出来\nます。"
          }
          image={recruitImage2}
        />
      </div>
      <div className={styles.careersPage}>
        <Link href="https://en-gage.net/taiko-juki/" target="_blank">
          <Button variant="recruit">リクルートページへ</Button>
        </Link>
      </div>
    </div>
  )
}

export default page
