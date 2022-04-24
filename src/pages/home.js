import Navbar from "../components/navbar/index.js";
import Intro from "../components/introduction/index.js"
import Skills from "../components/skills/index.js";
export default function App() {
    ///*<Logo/>*/
      return (
        <div className='mainclass'>
          <Navbar title="homepage" link="/" 
          title2="blog" link2="/blog"
          title3="arsal" link3="/arsal"/>
          <Intro/>
          <Skills/>
        </div>
        
      );
    }
    
