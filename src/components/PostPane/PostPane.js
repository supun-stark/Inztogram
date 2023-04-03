import React from 'react'
import './postpane.css'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Post from '../Post/Post';

export default function PostPane() {
  return (
    <div className='postPaneBox'>

      <div className="postPaneContainer">
          <div className="postPaneTop">

            <div className="storyLayer">
              <img src="/images/3.jpg" alt="" className="storyPic" />
              <span className="storyName">Jason_Alex</span>
            </div> 

            <div className="storyLayer">
            <img src="/images/women1.jpg" alt="" className="storyPic" />
              <span className="storyName">AnnMogan</span>
            </div> 

            <div className="storyLayer">
            <img src="/images/men4.png" alt="" className="storyPic" />
              <span className="storyName">Joy_Harry</span>
            </div> 

            <div className="storyLayer">
            <img src="/images/5.jpg" alt="" className="storyPic" />
              <span className="storyName">Paul_lee3</span>
            </div> 

            <div className="storyLayer">
            <img src="/images/women2.jpg" alt="" className="storyPic" />
              <span className="storyName">Mery_Kay</span>
            </div> 

            <div className="storyLayer">
              <img src="/images/1.jpg" alt="" className="storyPic" />
              <span className="storyName">Kiara.Jay</span>
            </div> 

            <div className="storyLayer">
            <img src="/images/men5.png" alt="" className="storyPic" />
              <span className="storyName">Jaden88</span>
            </div> 

            <div className="storyLayer">
              <div className="iconStyle">
            <ChevronRightIcon className='arrowIcon'/>
            </div>
            </div> 
              

          </div>

          <hr/>
          <Post/>

      </div>

    </div>
  )
}
