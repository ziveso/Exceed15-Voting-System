import React, { Component } from 'react'
import './TeamLeaderImage.css'
import ClassicPalm from '../../image/team/original/ClassicPalm.jpg'
import FingerPalm from '../../image/team/original/FingerPalm.jpg'
import IPalm from '../../image/team/original/IPalm.jpg'
import OdinPalm from '../../image/team/original/OdinPalm.jpg'
import oPalm from '../../image/team/original/OPalm.jpg'
import PalmFactory from '../../image/team/original/PalmFactory.jpg'
import palmpalmmpalmmm from '../../image/team/original/PalmPalmPalm.jpg'
import Palmwith from '../../image/team/original/PalmWith.jpg'
import TonPalm from '../../image/team/original/TonPalm.jpg'
import WongPalm from '../../image/team/original/WongPalm.jpg'
import TerngPalm from '../../image/team/original/TerngPalm.jpg'
import TPalm from '../../image/team/original/TPalm.jpg'
import BuaPalm from '../../image/team/original/BuaPalm.jpg'
import Palmmeemee from '../../image/team/original/PalmMeeMee.jpg'
import PalmYuth from '../../image/team/original/PalmYut.jpg'
import LamPalm from '../../image/team/original/LarmPalm.jpg'
export class TeamLeaderImage extends Component {
  render() {
    let photo = '';
    switch(this.props.teamname) {
      case 'บัวปาล์ม': photo = BuaPalm;break;
      case 'ปาล์มยุทธ': photo = PalmYuth;break;
      case 'Classic Palm': photo = ClassicPalm;break;
      case 'Palm Palmm Plammm': photo = palmpalmmpalmmm;break;
      case 'Finger Palm': photo = FingerPalm;break;
      case 'ลามปาล์ม': photo = LamPalm;break;
      case 'i-Plam': photo = IPalm;break;
      case 'Plamwith': photo = Palmwith;break;
      case 'ปาล์มมี๊มี': photo = Palmmeemee;break;
      case 'T Plam': photo = TPalm;break;
      case 'WONG PALM': photo = WongPalm;break;
      case 'Ton Palm': photo = TonPalm;break;
      case 'เติ้ง.Plam': photo = TerngPalm;break;
      case 'PALM FACTORY': photo = PalmFactory;break;
      case 'Odinpalm': photo = OdinPalm;break;
      case 'O PALM': photo = oPalm;break;
      default:
    }
    return (
      <div id='team-leader-image' className='text-center'
        style={{ backgroundImage: `url(${photo})` }}>
        {/* style={{ background: 'white'}} > */}

        <span style={{ fontFamily: `'Fredoka One', cursive`, textShadow: '0 0 15px black'}}>
          {this.props.type.toUpperCase()}
        </span>
      </div>
    )
  }
}

export default TeamLeaderImage
