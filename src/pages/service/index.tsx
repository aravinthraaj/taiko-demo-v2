import ServiceSection from "@/components/template/ServiceSection/ServiceSection"
import SubHeroSection from "@/components/template/SubHeroSection/SubHeroSection"
import React from "react"
import serviceImage from "@Images/service.webp"

const page = () => {
  return (
    <div>
      <SubHeroSection
        title="Service"
        subtitle="サービス内容"
        description={
          "現場ごとに変わる作業環境に応じた最適な移動式クレーンを手配し、優秀なオペレータによる吊り上げ作業で、安全・確実な空間移動を実現します。"
        }
        imageUrl={serviceImage}
      />
      <ServiceSection />
    </div>
  )
}

export default page
