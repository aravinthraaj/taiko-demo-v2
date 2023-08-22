import React from "react"
import styles from "./ModelList.module.scss"
import Divider from "@/components/atoms/Divider/Divider"
import Card from "@/components/atoms/Card/Card"
import { StaticImageData } from "next/image"
interface MobileListProps {
  title: string
  data: {
    imageUrl: StaticImageData
    weight: string
    model: string
    pdfUrl: string
    price: string
  }[]
}

const ModelList = ({ title, data }: MobileListProps) => {
  return (
    <div className={styles.modelListWrapper}>
      <div className={styles.titleWrapper}>
        <div className={styles.title}>{title}</div>
        <Divider />
      </div>
      <div className={styles.modelList}>
        {data.map((vehicle, index) => (
          <Card data={vehicle} key={index} />
        ))}
      </div>
    </div>
  )
}

export default ModelList
