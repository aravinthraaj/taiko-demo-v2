import React from "react"
import heroImage1 from "@Images/hero.webp"
import heroImage2 from "@Images/hero2.webp"
import heroImage3 from "@Images/hero3.webp"

import styles from "./HeroSection.module.scss"
import Logo from "@/components/atoms/Logo/Logo"
import Carousel from "@/components/atoms/Carousel/Carousel"

const HeroSection = () => {
  const images = [heroImage1, heroImage2, heroImage3]

  return (
    <div className={styles.hero}>
      <Carousel images={images} />

      {/* <Image
        src={vehicle}
        alt="background"
        className={styles.heroimage}
        fill
        objectFit="cover"
      /> */}
      <div className={styles.overlay}>
        <Logo />
        <div className={styles.description}>
          <div className={styles.pink}>
            <p>
              トップクラスの
              <br className={styles.mobileBr} />
              大型重機エキスパート
            </p>
          </div>
          <p>
            <br className={styles.mobileBr} />
            三河エリア随一の総トン数を誇り、 <br />
            多様なクレーンニーズにお応えします
          </p>
        </div>
        <div className={styles.scroll}>
          <div className={styles.text}>scroll</div>
          <div className={styles.line}></div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
