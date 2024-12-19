import './VideoPlayer.css'
import video from '../../assets/college-video.mp4'
import { useRef } from 'react'

const VideoPlayer = ({videoPlay,setVideoPlay}) => {
    const player = useRef(null);
    const closePlayer = (e)=> {
        if (e.target === player.current) {
            setVideoPlay(false);
        }
    }
  return (
    <div className={`video-player ${videoPlay?'':'hide'}`} ref={player} 
    onClick={closePlayer}>
        <video src={video} autoPlay muted controls></video>
    </div>
  )
}
export default VideoPlayer