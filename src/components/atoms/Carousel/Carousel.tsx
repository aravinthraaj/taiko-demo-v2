"use client"
import React, { useState, useEffect } from "react"
import Image from "next/image"
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import styles from "./Carousel.module.scss"

interface FadeImageSliderProps {
  images: string[] | StaticImport[]
}

const Carousel: React.FC<FadeImageSliderProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => {
      clearInterval(interval)
    }
  }, [images])

  return (
    <div className={styles.carousel}>
      {images.map((image, index) => (
        <div
          key={index}
          style={{
            opacity: index === currentImageIndex ? 1 : 0,
            transition: "opacity 2s ease-in-out",
          }}
        >
          <div className={styles.imgWrapper}>
            <Image
              src={image}
              alt={`Image ${index}`}
              fill
              // objectFit='cover'
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Carousel
