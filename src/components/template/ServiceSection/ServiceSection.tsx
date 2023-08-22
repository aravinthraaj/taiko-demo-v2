"use client"
import React from "react"
import styles from "./ServiceSection.module.scss"
import ModelList from "@/components/molecules/ModelList/ModelList"
import {
  allTerrainCranes,
  roughTerrainCranes,
  others,
} from "@/constants/vehiclesList"

const ServiceSection = () => {
  return (
    <div className={styles.serviceSection}>
      <div className={styles.serviceSectionContainer}>
        <div className={styles.title}>保有機種一覧</div>
        <ModelList data={allTerrainCranes} title="オールテレーンクレーン" />
        <ModelList data={roughTerrainCranes} title="ラフタークレーン" />
        <ModelList data={others} title="その他" />
        <div className={`${styles.notes} ${styles.desktop}`}>
          ※クレーン部材の運搬や組付・解体は、関連会社（株）大弘重機運輸を含め、グループ一体で行います
        </div>
      </div>
    </div>
  )
}

export default ServiceSection
