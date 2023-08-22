import Image from "next/image"
import React from "react"
import vehicle from "@Images/vehicle.png"
import styles from "./SubHeroSection.module.scss"
import Divider from "@/components/atoms/Divider/Divider"
import { StaticImport } from "next/dist/shared/lib/get-img-props"

interface SubHeroSectionProps {
  title: string
  subtitle: string
  description: string
  imageUrl: string | StaticImport
}

const SubHeroSection = ({
  title,
  subtitle,
  description,
  imageUrl,
}: SubHeroSectionProps) => {
  return (
    <div className={styles.subHeroSection}>
      <Image
        src={imageUrl}
        alt="background"
        className={styles.heroimage}
        fill
        // objectFit="cover"
        style={{ objectFit: "cover" }}
      />
      <div className={styles.overlay}>
        <div className={styles.overlayContainer}>
          <div className={styles.titleWrapper}>
            <div className={styles.title}>{title}</div>
            <div className={styles.subTitle}>{subtitle}</div>
          </div>
          <Divider variant="pink" />
          <p className={`${styles.description} ${styles.desktop}`}>
            {description}
          </p>
          <pre className={`${styles.description} ${styles.mobile}`}>
            {description}
          </pre>
        </div>
      </div>
    </div>
  )
}

export default SubHeroSection
