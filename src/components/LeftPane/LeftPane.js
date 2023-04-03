import React from 'react'
import './leftpane.css'
import HomeIcon from '@mui/icons-material/Home';
import MessageIcon from '@mui/icons-material/Message';
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';



export default function LeftPane() {
  return (
    <div className='leftPaneBox'>

     <div className="leftPaneContainer">
        <div className="leftPaneBoxTop">
            <span className="logoName">Inztogram</span>
        </div>

        <div className="leftPaneBoxBottom">
            <div className="leftPaneMenu">
                <li className="leftPaneMenuItem">
                    <HomeIcon className='leftPaneMenuIcon'/>
                    <span className="leftPaneMenuText">Home</span>
                </li>

                <li className="leftPaneMenuItem">
                    <SearchIcon className='leftPaneMenuIcon'/>
                    <span className="leftPaneMenuText">Search</span>
                </li>

                <li className="leftPaneMenuItem">
                    <ExploreIcon className='leftPaneMenuIcon'/>
                    <span className="leftPaneMenuText">Explore</span>
                </li>

                <li className="leftPaneMenuItem">
                    <PlayCircleOutlineIcon className='leftPaneMenuIcon'/>
                    <span className="leftPaneMenuText">Reels</span>
                </li>

                <li className="leftPaneMenuItem">
                    <MessageIcon className='leftPaneMenuIcon'/>
                    <span className="leftPaneMenuText">Messages</span>
                </li>

                <li className="leftPaneMenuItem">
                    <NotificationsNoneIcon className='leftPaneMenuIcon'/>
                    <span className="leftPaneMenuText">Notifications</span>
                </li>

                <li className="leftPaneMenuItem">
                    <AddCircleOutlineIcon className='leftPaneMenuIcon'/>
                    <span className="leftPaneMenuText">Create</span>
                </li>

                <li className="leftPaneMenuItem">
                    <img src="/images/men3.jpg" alt="" className="profilePic" />
                    <span className="leftPaneMenuText1">Profile</span>
                </li>

                
                <li className="leftPaneMenuItem">
                    <MoreHorizIcon className='leftPaneMenuIcon'/>
                    <span className="leftPaneMenuText">More</span>
                </li>

            </div>
        </div>
        </div>

    </div>
  )
}
