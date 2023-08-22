"use client"
import React, { useState } from "react"
import styles from "./Header.module.scss"
import Logo from "../Logo/Logo"
import Link from "next/link"
import BurgerMenu from "@Icons/burger-menu.svg"
import Image from "next/image"
import MobileNav from "../MobileNav/MobileNav"
import CloseButton from "@Icons/close.svg"
import { usePathname } from "next/navigation"

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const pathname = usePathname()
  const closeModal = () => {
    setNavbarOpen(false)
  }
  const toggle = () => {
    setNavbarOpen((prev) => !prev)
  }
  return (
    <div className={styles.headerWrapper}>
      <header className={styles.header}>
        <Link href={"/"} className={pathname == "/" ? styles.active : ""}>
          <Logo variant="header" />
        </Link>
        <nav>
          <Link href={"/"} className={pathname == "/" ? styles.active : ""}>
            ホーム
          </Link>
          <Link
            href={"/service"}
            className={pathname == "/service" ? styles.active : ""}
          >
            サービス内容
          </Link>
          <Link
            href={"/company"}
            className={pathname == "/company" ? styles.active : ""}
          >
            会社概要
          </Link>
          <Link
            href={"/recruit"}
            className={pathname == "/recruit" ? styles.active : ""}
          >
            採用情報
          </Link>
        </nav>

        <div className={styles.burgerMenu} onClick={toggle}>
          {navbarOpen ? (
            <Image src={CloseButton} alt={"menu"} />
          ) : (
            <Image src={BurgerMenu} alt={"menu"} />
          )}
        </div>
      </header>
      <div>{navbarOpen ? <MobileNav toggle={closeModal} /> : null}</div>
    </div>
  )
}

export default Header
