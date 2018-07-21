import ImageGallery from 'react-image-gallery'
import React from 'react'

import ClassicPalm from '../image/team/scale/ClassicPalm.jpg'
import FingerPalm from '../image/team/scale/fingerpalm.jpg'
import IPalm from '../image/team/scale/I-Palm.jpg'
import OdinPalm from '../image/team/scale/ODINPALM.jpg'
import oPalm from '../image/team/scale/opalm.jpg'
import PalmFactory from '../image/team/scale/PalmFactory.jpg'
import palmpalmmpalmmm from '../image/team/scale/palmpalmmpalmmm.jpg'
import Palmwith from '../image/team/scale/Palmwith.jpg'
import TonPalm from '../image/team/scale/TonPalm.jpg'
import WongPalm from '../image/team/scale/WONGPALM.jpg'
import TerngPalm from '../image/team/scale/เติ้งPalm.jpg'
import TPalm from '../image/team/scale/ทีปาล์ม.jpg'
import BuaPalm from '../image/team/scale/บัวปาล์ม.jpg'
import Palmmeemee from '../image/team/scale/ปาล์มมี๊มี.jpg'
import PalmYuth from '../image/team/scale/ปาล์มยุทธ.jpg'
import LamPalm from '../image/team/scale/ลามปาล์ม.jpg'

class ImageSlider extends React.Component {
  render () {
    const images = [
      {
        original: ClassicPalm,
        thumbnail: ClassicPalm,
      },
      {
        original: FingerPalm,
        thumbnail: FingerPalm
      },
      {
        original: IPalm,
        thumbnail: IPalm
      },
      {
        original: OdinPalm,
        thumbnail: OdinPalm
      },
      {
        original: oPalm,
        thumbnail: oPalm
      },
      {
        original: PalmFactory,
        thumbnail: PalmFactory
      },
      {
        original: palmpalmmpalmmm,
        thumbnail: palmpalmmpalmmm
      },
      {
        original: Palmwith,
        thumbnail: Palmwith
      },
      {
        original: TonPalm,
        thumbnail: TonPalm
      },
      {
        original: WongPalm,
        thumbnail: WongPalm
      },
      {
        original: TerngPalm,
        thumbnail: TerngPalm
      },
      {
        original: TPalm,
        thumbnail: TPalm
      },
      {
        original: BuaPalm,
        thumbnail: BuaPalm
      },
      {
        original: Palmmeemee,
        thumbnail: Palmmeemee
      },
      {
        original: PalmYuth,
        thumbnail: PalmYuth
      },
      {
        original: LamPalm,
        thumbnail: LamPalm
      }
    ]

    return (
      <ImageGallery items={images} showFullscreenButton={false} autoPlay />
    )
  }
}

export default ImageSlider
