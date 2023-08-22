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
            "三河で最大の油圧移動式クレーンを\n保有するのは私たちです"
          }
          subtitle="※東京商工リサーチ調べ（2023/8月）"
          image={Strength1}
        />
        <StrengthCard
          number={"02"}
          title={"運送も自社グループで\n一括対応可能"}
          description={
            "クレーン車の手配から、現場までの運搬、\nクレーン作業の請負まで一貫して担います。"
          }
          image={Strength2}
        />
        <StrengthCard
          number={"03"}
          title={"新たな価値を提供できる\n新型機種を続々導入"}
          description={
            "常に新しい技術や機械を積極的に取り入れ、\n多様な要望に応えます。"
          }
          image={Strength3}
        />
      </div>
    </div>
  )
}

export default StrengthSection
