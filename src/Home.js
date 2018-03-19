import  React, {Component} from 'react'
import {Link} from 'react-router-dom'
class Home extends Component {

  render(){
    return(
      <div>

        <div className='center title'>
          <h1>Web Developer. Life-long student.</h1>
        </div>

        <div className='home-social'>
          <div className='home-social-pins centerAll'>
            <div className='centerAll'>
              <Link to='https://wwww.github.com/EricLum'>
                <img height='100' width='100' src='https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png' />
                github
              </Link>
            </div>
          </div>
          <div className='centerAll'>
            medium
          </div>
          <div className='centerAll'>
            twitter
          </div>
        </div>

            {/* <div className='recent-news'>
              <h3>Recent commits</h3>
              <ul>
                <li></li>
              </ul>
            </div> */}
      </div>
    )
  }
}

export default Home
