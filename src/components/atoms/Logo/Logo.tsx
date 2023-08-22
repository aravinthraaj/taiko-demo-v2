import React from "react"
import LogoMain from "@Icons/logo-main.svg"
import LogoHeader from "@Icons/logo-header.svg"
import Image from "next/image"
import styles from "./Logo.module.scss"

interface LogoProps {
  variant?: "header" | "main"
  size?: "regular" | "small"
}
const Logo = ({ variant = "main", size = "regular" }: LogoProps) => {
  const getvarinat = () => {
    switch (variant) {
      case "main":
        return <Image src={LogoMain} alt="Logo Main" fill priority/>
      case "header":
        return (
          <>
            <Image src={LogoHeader} alt="Logo Main" fill priority/>
          </>
        )
    }
  }
  return (
    <div className={`${styles.logo} ${styles[variant]} ${styles[size]}`}>
      {getvarinat()}
    </div>
  )
}

export default Logo
