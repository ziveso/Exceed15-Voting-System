import React, { Component } from 'react'
import './index.css'
import { ButtonWrapper } from './ButtonWrapper'
import softwareImg from '../../image/type/background.jpeg'
import hardwareImg from '../../image/type/background.jpeg'
import designImg from '../../image/type/background.jpeg'
import pitchingImg from '../../image/type/background.jpeg'
import popularImg from '../../image/type/background.jpeg'
import modelImg from '../../image/type/background.jpeg'
import ideaImg from '../../image/type/background.jpeg'
export class index extends Component {
  render () {
    const style = { background: 'rgba(255, 255, 255,0.4)', color: 'white', boxShadow: '0px 0px 15px #888888' }
    let background = '';
    switch(this.props.title.toLowerCase()) {
      case 'software': background = softwareImg; break;
      case 'hardware': background = hardwareImg; break;
      case 'design': background = designImg; break;
      case 'pitching': background = pitchingImg; break;
      case 'popular': background = popularImg; break;
      case 'model':background = modelImg; break;
      case 'idea': background = ideaImg; break;
      default:
    }
    return (
      <div id='vote'>
        <div className='container' style={style}>
          <div className='row'>
            <div style={{ backgroundImage: `url(${background})` }} className='col-12 col-md-5 title text-center'><span>{this.props.title}</span></div>
            <div className='col-12 col-md-7'><ButtonWrapper voted={this.props.voted} type={this.props.title} /></div>
          </div>
        </div>
      </div>
    )
  }
}

export default index
