import Navbar from '../components/navbar/index.js';
import video from '../components/img/arsal.mp4';
export default function arsal() {
  return (
    <div>
        <Navbar title="homepage" link="/" 
          title2="blog" link2="/blog"
          title3="arsal" link3="/arsal"/>
        <Navbar/> 
        <video width="100%" height="70%" controls>
        <source src={video} type="video/mp4"/>  
        </video>
    </div>
  )
}
