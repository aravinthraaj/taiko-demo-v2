import React from "react"
import styles from "./StrengthSection.module.scss"
import StrengthCard from "@/components/atoms/StrengthCard/StrengthCard"
import Strength1 from "@Images/strength_1.webp"
import Strength2 from "@Images/strength_2.webp"
import Strength3 from "@Images/strength_3.webp"

const StrengthSection = () => {
  return (
    <div className={styles.strength}>
      <div className={styles.titleWrapper}>
        <div className={styles.title}>Strength</div>
        <div className={styles.subTitle}>大弘重機の強み</div>
      </div>
      <div className={styles.strengthCardWrapper}>
        <StrengthCard
          number={"01"}
          title={"保有総トン数\n三河No.1"}
          description={
            "保有総トン数1,800t超！\n400ｔ吊り～13ｔ吊りまで、\n20台以上のクレーンを取り揃えています。"
          }
          subtitle="※東京商工リサーチ調べ（2023/8月）"
          image={Strength1}
        />
        <StrengthCard
          number={"02"}
          title={"運送も自社で\n一括対応可能"}
          description={
            "総数約40台の車両で\n 重量物・長尺物の運搬を自社グループで\n一括対応致します。"
          }
          image={Strength2}
        />
        <StrengthCard
          number={"03"}
          title={"新型機種を\n続々導入"}
          description={
            "「分解搬送不要」や「最大級の吊り能力」な\nど、新型機種を積極的に導入し、\n新たな価値を提供致します。"
          }
          image={Strength3}
        />
      </div>
    </div>
  )
}

export default StrengthSection
