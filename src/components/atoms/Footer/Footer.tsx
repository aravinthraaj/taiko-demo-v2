import React from "react"
import styles from "./Footer.module.scss"
import Logo from "../Logo/Logo"
import Divider from "../Divider/Divider"
import Link from "next/link"
import Image from "next/image"
import Facebook from "@Icons/facebook.svg"
import Twitter from "@Icons/twitter.svg"
import Instagram from "@Icons/instagram.svg"
import Tiktok from "@Icons/tiktok.svg"

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footer}>
        <div className={styles.footerLinks}>
          <nav>
            <Link href={"/"}>ホーム</Link>
            <Link href={"/service"}>サービス内容</Link>
            <Link href={"/company"}>会社概要</Link>
            <Link href={"/recruit"}>採用情報</Link>
          </nav>
        </div>
        <div className={styles.companyProfile}>
          <Logo variant="main" size="small" />
          <Divider variant="white" />
          <nav>
            <Link href={"/"}>
              <Image src={Facebook} alt="facebook" />
            </Link>
            <Link href={"/"}>
              <Image src={Twitter} alt="twitter" />
            </Link>
            <Link href={"/"}>
              <Image src={Instagram} alt="instagram" />
            </Link>
            <Link href={"/"}>
              <Image src={Tiktok} alt="tiktok" />
            </Link>
          </nav>
        </div>
        <div className={styles.copyrights}>© TAIKO JUKI, Inc.</div>
      </div>
    </div>
  )
}

export default Footer
