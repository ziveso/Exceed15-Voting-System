import ImageGallery from 'react-image-gallery'
import React from 'react'

class ImageSlider extends React.Component {
  render () {
    const images = [
      {
        original: 'https://dummyimage.com/1000x400/eb6feb/fff',
        thumbnail: 'https://dummyimage.com/250x150/eb6feb/fff'
      },
      {
        original: 'https://dummyimage.com/1000x400/eb6feb/fff',
        thumbnail: 'https://dummyimage.com/250x150/eb6feb/fff'
      },
      {
        original: 'https://dummyimage.com/1000x400/eb6feb/fff',
        thumbnail: 'https://dummyimage.com/250x150/eb6feb/fff'
      },
      {
        original: 'https://dummyimage.com/1000x400/eb6feb/fff',
        thumbnail: 'https://dummyimage.com/250x150/eb6feb/fff'
      },
      {
        original: 'https://dummyimage.com/1000x400/eb6feb/fff',
        thumbnail: 'https://dummyimage.com/250x150/eb6feb/fff'
      }
    ]

    return (
      <ImageGallery items={images} autoPlay />
    )
  }
}

export default ImageSlider
