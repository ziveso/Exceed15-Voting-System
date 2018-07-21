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
  render() {
    const images = [
      {
        original: ClassicPalm,
        thumbnail: ClassicPalm,
        description: 'Classic Palm'
      },
      {
        original: FingerPalm,
        thumbnail: FingerPalm,
        description: 'Finger Palm'
      },
      {
        original: IPalm,
        thumbnail: IPalm,
        description: 'I Palm'
      },
      {
        original: OdinPalm,
        thumbnail: OdinPalm,
        description: 'Odin Palm'
      },
      {
        original: oPalm,
        thumbnail: oPalm,
        description: 'O Palm'
      },
      {
        original: PalmFactory,
        thumbnail: PalmFactory,
        description: 'Palm Factory'
      },
      {
        original: palmpalmmpalmmm,
        thumbnail: palmpalmmpalmmm,
        description: 'Palm Palm Palm'
      },
      {
        original: Palmwith,
        thumbnail: Palmwith,
        description: 'Palmwith'
      },
      {
        original: TonPalm,
        thumbnail: TonPalm,
        description: 'Ton Palm'
      },
      {
        original: WongPalm,
        thumbnail: WongPalm,
        description: 'Wong Palm'
      },
      {
        original: TerngPalm,
        thumbnail: TerngPalm,
        description: 'Terng Palm'
      },
      {
        original: TPalm,
        thumbnail: TPalm,
        description: 'T Palm'
      },
      {
        original: BuaPalm,
        thumbnail: BuaPalm,
        description: 'บัวปาล์ม'
      },
      {
        original: Palmmeemee,
        thumbnail: Palmmeemee,
        description: 'ปาล์มมี๊มี'
      },
      {
        original: PalmYuth,
        thumbnail: PalmYuth,
        description: 'ปาล์มยุทธ'
      },
      {
        original: LamPalm,
        thumbnail: LamPalm,
        description: 'ลามปาล์ม'
      }
    ]

    return (
      <ImageGallery items={images} autoPlay />
    )
  }
}

export default ImageSlider
