import React, { Component } from 'react'

const data = [
  {
    name: 'SKE GOGO',
    percent: '80%',
  },
  {
    name: 'SKE GOGO',
    percent: '80%',
  },{
    name: 'SKE GOGO',
    percent: '80%',
  },{
    name: 'SKE GOGO',
    percent: '80%',
  },{
    name: 'SKE GOGO',
    percent: '80%',
  },{
    name: 'SKE GOGO',
    percent: '80%',
  },{
    name: 'SKE GOGO',
    percent: '80%',
  },
]

export class Index extends Component {
  render () {
    const leaderComponent = data.map((item, index) => {
      if (index < 1) {
        // add div gold class
        // <div className='col-md-12'>
        //   <img style={{ width: '45%', height: 'auto' }} src='http://journals.plos.org/plosbiology/article/figure/image?size=medium&id=info:doi/10.1371/image.pbio.v15.i04.g001' alt='group' />
        //   <h1 style={{ color: 'gold' }}>Teamname 90%</h1>
        // </div>
      } else if (index < 3) {
        // add div silver class
        // <div className='col-md-6'>
        //   <img style={{ width: '50%', height: 'auto' }} src='http://journals.plos.org/plosbiology/article/figure/image?size=medium&id=info:doi/10.1371/image.pbio.v15.i04.g001' alt='group' />
        //   <h2 style={{ color: 'silver' }}>Teamname 80%</h2>
        // </div>
      } else {
        // add div other class
        // <div className='col-md-4'>
        //   <img style={{ width: '50%', height: 'auto' }} src='http://journals.plos.org/plosbiology/article/figure/image?size=medium&id=info:doi/10.1371/image.pbio.v15.i04.g001' alt='group' />
        //   <h3>Teamname 70%</h3>
        // </div>
      }
    })
    return (
      <div className='row text-center'>
        <div className='col-12'>
          <h1>Leaderboard Exceed 15</h1>
        </div>
        <div className='col-md-6'>
          <h3>Software</h3>

          <div className='row'>
            <div className='container'>
              <img style={{ width: '45%', height: 'auto' }} src='http://journals.plos.org/plosbiology/article/figure/image?size=medium&id=info:doi/10.1371/image.pbio.v15.i04.g001' alt='group' />
              <h1 style={{ color: 'gold' }}>Teamname 90%</h1>
            </div>
          </div>

          <div className='row' style={{ marginTop: '20px' }}>
            <div className='col-md-6'>
              <img style={{ width: '50%', height: 'auto' }} src='http://journals.plos.org/plosbiology/article/figure/image?size=medium&id=info:doi/10.1371/image.pbio.v15.i04.g001' alt='group' />
              <h2 style={{ color: 'silver' }}>Teamname 80%</h2>
            </div>

            <div className='col-md-6'>
              <img style={{ width: '50%', height: 'auto' }} src='http://journals.plos.org/plosbiology/article/figure/image?size=medium&id=info:doi/10.1371/image.pbio.v15.i04.g001' alt='group' />
              <h2 style={{ color: 'silver' }}>Teamname 80%</h2>
            </div>
          </div>

          <div className='row' style={{ marginTop: '20px' }}>
            <div className='col-md-4'>
              <img style={{ width: '50%', height: 'auto' }} src='http://journals.plos.org/plosbiology/article/figure/image?size=medium&id=info:doi/10.1371/image.pbio.v15.i04.g001' alt='group' />
              <h3>Teamname 70%</h3>
            </div>

            <div className='col-md-4'>
              <img style={{ width: '50%', height: 'auto' }} src='http://journals.plos.org/plosbiology/article/figure/image?size=medium&id=info:doi/10.1371/image.pbio.v15.i04.g001' alt='group' />
              <h3>Teamname 70%</h3>
            </div>

            <div className='col-md-4'>
              <img style={{ width: '50%', height: 'auto' }} src='http://journals.plos.org/plosbiology/article/figure/image?size=medium&id=info:doi/10.1371/image.pbio.v15.i04.g001' alt='group' />
              <h3>Teamname 70%</h3>
            </div>
          </div>
        </div>

        <div className='col-md-6'>
          <h3>Hardware</h3>

          <div className='row'>
            <div className='container'>
              <img style={{ width: '45%', height: 'auto' }} src='http://journals.plos.org/plosbiology/article/figure/image?size=medium&id=info:doi/10.1371/image.pbio.v15.i04.g001' alt='group' />
              <h1 style={{ color: 'gold' }}>Teamname 90%</h1>
            </div>
          </div>

          <div className='row' style={{ marginTop: '20px' }}>
            <div className='col-md-6'>
              <img style={{ width: '50%', height: 'auto' }} src='http://journals.plos.org/plosbiology/article/figure/image?size=medium&id=info:doi/10.1371/image.pbio.v15.i04.g001' alt='group' />
              <h2 style={{ color: 'silver' }}>Teamname 80%</h2>
            </div>

            <div className='col-md-6'>
              <img style={{ width: '50%', height: 'auto' }} src='http://journals.plos.org/plosbiology/article/figure/image?size=medium&id=info:doi/10.1371/image.pbio.v15.i04.g001' alt='group' />
              <h2 style={{ color: 'silver' }}>Teamname 80%</h2>
            </div>
          </div>

          <div className='row' style={{ marginTop: '20px' }}>
            <div className='col-md-4'>
              <img style={{ width: '50%', height: 'auto' }} src='http://journals.plos.org/plosbiology/article/figure/image?size=medium&id=info:doi/10.1371/image.pbio.v15.i04.g001' alt='group' />
              <h3>Teamname 70%</h3>
            </div>

            <div className='col-md-4'>
              <img style={{ width: '50%', height: 'auto' }} src='http://journals.plos.org/plosbiology/article/figure/image?size=medium&id=info:doi/10.1371/image.pbio.v15.i04.g001' alt='group' />
              <h3>Teamname 70%</h3>
            </div>

            <div className='col-md-4'>
              <img style={{ width: '50%', height: 'auto' }} src='http://journals.plos.org/plosbiology/article/figure/image?size=medium&id=info:doi/10.1371/image.pbio.v15.i04.g001' alt='group' />
              <h3>Teamname 70%</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Index
