import React from 'react'
import VideoItem from './VideoItem'


const VideoList = props => {
const renderedlist = props.videos.map((video) => {
    return <VideoItem key={video.id.videoId} onVideoSelect={props.onVideoSelect} videocontent = {video}/>
})


    return (
        <div className='ui relaxed divided list'>
            {renderedlist}
        </div>
    )
}
export default VideoList