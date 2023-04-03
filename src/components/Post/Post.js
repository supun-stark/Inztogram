import React from 'react'
import './post.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NearMeIcon from '@mui/icons-material/NearMe';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

export default function Post() {
  return (
    
    
        <div className="postContainer">
            <div className="postTop">

                <div className="profilePicBox">
                    <img src="/images/boy.jpg" alt="" className="proPic" />
                </div>

               
                <div className="postDetails">
                    <span className="userName"><b>TomPhilips</b></span>
                    <span className="postLocation">Chelsea Beach</span>
                </div>

                

                
                
            </div>


            <div className="postCenter">
                    <img src="/images/surf.jpg" alt="" className="postedImg" />
            </div>


            <div className="postBottom">
                <div className="postReacts">
                    <FavoriteBorderIcon className='heart'/>
                    <ChatBubbleOutlineIcon className='comments'/>
                    <NearMeIcon className='share'/>
                    
                    <div className="save">
                      <BookmarkBorderIcon className='saved'/>
                    </div>
                </div>
                <div className="postLikes">
                     <img src="/images/5.jpg" alt="" className="likeImg" />
                     <span className="likeBy">Liked by <b>Paul_lee3</b> and <b>807 others</b></span>
                    
                </div>

                <div className="aboutPost">
                     <span className="postOwner"><b>TomPhilips</b> Still trusting the process🏄</span>
                     
                    
                </div>

                <div className="postComments">
                 <span className='commentsCount'>View all 7 comments</span>
                </div>

                <div className="addComments">
                     <input placeholder='Add a comment...' className="addComment" />
                </div>


                <div className="postTime">
                <span className="time">3 hours ago</span>
                </div>
            </div>




                <div className="postTop">

                    <div className="profilePicBox">
                        <img src="/images/men2.jpg" alt="" className="proPic" />
                    </div>


                    <div className="postDetails">
                        <span className="userName"><b>marisa.lexi</b></span>
                        <span className="postLocation">Miami, Florida</span>
                    </div>





                    </div>


                    <div className="postCenter">
                        <img src="/images/23.jpg" alt="" className="postedImg" />
                    </div>


                    <div className="postBottom">
                    <div className="postReacts">
                        <FavoriteBorderIcon className='heart'/>
                        <ChatBubbleOutlineIcon className='comments'/>
                        <NearMeIcon className='share'/>
                        
                        <div className="save">
                        <BookmarkBorderIcon className='saved'/>
                        </div>
                    </div>
                    <div className="postLikes">
                        <img src="/images/3.jpg" alt="" className="likeImg" />
                        <span className="likeBy">Liked by <b>Jason_Alex</b> and <b>57 others</b></span>
                        
                    </div>

                    <div className="aboutPost">
                        <span className="postOwner"><b>marisa.lexi</b> Little throwback to summer❤️🙈</span>
                        
                        
                    </div>

                    <div className="postComments">
                    <span className='commentsCount'>View all 5 comments</span>
                    </div>

                    <div className="addComments">
                        <input placeholder='Add a comment...' className="addComment" />
                    </div>


                    <div className="postTime">
                    <span className="time">4 hours ago</span>
                    </div>
                    </div>



            


                    <div className="postTop">

<div className="profilePicBox">
    <img src="/images/women2.jpg" alt="" className="proPic" />
</div>


<div className="postDetails">
    <span className="userName"><b>Rachel95</b></span>
    <span className="postLocation">Lima, Peru</span>
</div>





</div>


<div className="postCenter">
    <img src="/images/28.jpg" alt="" className="postedImg" />
</div>


<div className="postBottom">
<div className="postReacts">
    <FavoriteBorderIcon className='heart'/>
    <ChatBubbleOutlineIcon className='comments'/>
    <NearMeIcon className='share'/>
    
    <div className="save">
      <BookmarkBorderIcon className='saved'/>
    </div>
</div>
<div className="postLikes">
     <img src="/images/1.jpg" alt="" className="likeImg" />
     <span className="likeBy">Liked by <b>Kiara.Jay</b> and <b>210 others</b></span>
    
</div>

<div className="aboutPost">
     <span className="postOwner"><b>Rachel95</b> Looking forward for an amazing weekend!👸</span>
     
    
</div>

<div className="postComments">
 <span className='commentsCount'>View all 16 comments</span>
</div>

<div className="addComments">
     <input placeholder='Add a comment...' className="addComment" />
</div>


<div className="postTime">
<span className="time">4 hours ago</span>
</div>
</div>



        </div>

        






        
    
  )
}
