import React from "react"
import styles from "./Card.module.scss"
import Image from "next/image"
import vehicle from "@Images/vehicle.png"
import Button from "../Button/Button"
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Link from "next/link"

interface CardProps {
  imageUrl: string | StaticImport
  weight: string
  model: string
  pdfUrl: string
  price: string
}

const Card = ({ data }: { data: CardProps }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgWrapper}>
        <Image
          src={data.imageUrl}
          alt="vehicle image"
          fill
          // objectFit="cover"
          style={{ objectFit: "cover" }}

        />
      </div>
      <div className={styles.detailsWrapper}>
        <div className={styles.details}>
          <div className={styles.weight}>{data.weight}</div>
          <div className={styles.model}>{data.model}</div>
          <div className={styles.price}>{data.price}円～/日 </div>
        </div>
        <div className={styles.download}>
          <Link href={data.pdfUrl} target="_blank">
            <Button>製品詳細</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Card
