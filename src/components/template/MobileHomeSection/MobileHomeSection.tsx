import React from "react"
import styles from "./MobileHomeSection.module.scss"
import Image from "next/image"
import vehicleImage from "@Images/vehicle.png"

import Button from "@/components/atoms/Button/Button"
import Link from "next/link"
import { StaticImport } from "next/dist/shared/lib/get-img-props"

interface HomeSectionProps {
  direction?: "regular" | "alternate"
  title: string
  description: string
  link: string
  imageUrl: string | StaticImport

}

const MobileHomeSection = ({
  direction = "regular",
  title,
  imageUrl,
  description,
  link,
}: HomeSectionProps) => {
  return (
    <div className={`${styles.homeSection} ${styles[direction]}`}>
      <section className={`${styles.detailsWrapper} ${styles[direction]}`}>
        <div className={styles.textWrapper}>
          <div className={styles.text}>{title}</div>
        </div>
        <div className={styles.imageWrapper}>
          <Image src={imageUrl} alt="image" fill />
        </div>
        <div className={styles.details}>
          <p>{description}</p>
          <Link href={link}>
            <Button variant="secondary">詳しくはこちら</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default MobileHomeSection
