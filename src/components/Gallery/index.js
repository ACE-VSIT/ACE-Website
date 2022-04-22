import React from "react"
import { FlexCenter, Heading } from "../../styles/sharedStyles"
import ImageGrid from "./components/ImageGrid/ImageGrid"
import AnimateIn from "../animations/AnimateIn"
import { getImage } from "gatsby-plugin-image"

export default function GalleryPage({ title, subTitle, imgArr }) {
  return (
    <>
      <Heading>{title}</Heading>
      <FlexCenter
        style={{
          flexWrap: "wrap",
          gap: "2rem",
          width: "80vw",
        }}
      >
        {imgArr.map((e, index) => {
          const image = getImage(e?.image)
          return (
            <AnimateIn>
              <ImageGrid key={index} image={image} />
            </AnimateIn>
          )
        })}
      </FlexCenter>
    </>
  )
}
