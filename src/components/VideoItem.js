import './VideoItem.css'
import React from 'react'



const VideoItem = props => {
    return (
        <div onClick={() => props.onVideoSelect(props.videocontent)} className='video-item item'>
        <img alt={props.videocontent.snippet.title} 
        className='ui image'  src={props.videocontent.snippet.thumbnails.medium.url} />
        <div className='content'>
        <div className='header'>{props.videocontent.snippet.title}</div>
        </div>
         
        </div>
    )
}
export default VideoItem