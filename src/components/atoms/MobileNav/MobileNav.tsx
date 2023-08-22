import React from "react"
import styles from "./MobileNav.module.scss"
import Link from "next/link"
import Image from "next/image"
import CloseButton from "@Icons/close.svg"

const MobileNav = ({ toggle }: any) => {
  return (
    <div className={styles.mobileNav}>
      <nav>
        <Link href={"/"} onClick={toggle}>
          ホーム
        </Link>
        <Link href={"/service"} onClick={toggle}>
          サービス内容
        </Link>
        <Link href={"/company"} onClick={toggle}>
          会社概要
        </Link>
        <Link href={"/recruit"} onClick={toggle}>
          採用情報
        </Link>
      </nav>
      <div className={styles.close} onClick={toggle}>
        <Image src={CloseButton} alt="close" />
        閉じる
      </div>
    </div>
  )
}

export default MobileNav
