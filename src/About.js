import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class About extends Component {

  render(){
    return(
      <div>
        <div className='about-title-text'>
          <div className='about-title-name'>
            <h1>Who is Eric Lum?</h1>
          </div>
          <div className='about-title-description-roles'>
            <h3>Web developer, lifelong student.</h3>
          </div>
        </div><br></br>

        <div className='about-description'>
          <div>

          </div>
          <div className='about-description-text'>
            <p>
              I'm a web developer in the Greater New York City area. I'm passionate about software, technology, science, some forms of music, and the internet. I enjoy reading about consumer electronics, computer hardware. I am a huge fan of the Marvel Cinematic Universe.
              <br></br><br></br>
              I'm inspired by the multiplicative and democratizing effect that technology has in society, and I use my programming skills to develop ideas that will benefit society in useful ways.
            </p>
          </div>
        </div>

        <div className='currentActivities'>
          <div className='reading'>
            <h4>Reading List</h4>
            <ul>
                <Link to='https://www.amazon.com/Superintelligence-Dangers-Strategies-Nick-Bostrom/dp/1501227742'><li>A Short History of Nearly Everything - Bill Bryson</li></Link>
                <Link to='https://www.amazon.com/Short-History-Nearly-Everything/dp/076790818X/ref=sr_1_1?s=books&ie=UTF8&qid=1521425890&sr=1-1&keywords=bill+bryson+a+short+history+of+nearly+everything'>
              <li>Superintelligence: Paths, Dangers, Strategies - Nick Bostrom</li></Link>
            </ul>
          </div>

          <div className='listening'>
            <h4>Currently Jammin'</h4>
            {/*Spotify Integration?  */}
            <ul>
              <Link to='https://www.amazon.com/Awaken-My-Love-Explicit/dp/B01N3UI0NF/ref=sr_1_1?s=books&ie=UTF8&qid=1521426050&sr=8-1&keywords=awaken+my+love+gambino'>
              <li>"Awaken, My Love" -Childish Gambino</li></Link>
            </ul>
          </div>
        </div>

      </div>

    )
  }
}

export default About
