import React,{useEffect,useState} from 'react';
import logo from './logo.svg';
import './App.css';
import logopng from './logo512.png'
import {Link} from 'react-scroll'
import {motion} from 'framer-motion'


// react-scroll을 활용하여 스크롤 시 화면이 나타낼때 x축으로 그림이 나타나는 효과 
function App() {
  // 윈도우 길이를 저장
  const height =window.innerHeight

  // x축을로 이동거리 저장 초기는 0
  const [x, setX] = useState(0)

  // 투명도 저장 초기는 0.1
  const [opacity, setOpacity] = useState(0.1)

  // 원하는 영역에 도착하였을 때 x,opcacity를 변경하면 
  // motion에 의해 자동적으로 animation이 적용됨
  const handleSetActive = () => {
    console.log("Active")
    setX(-100)
    setOpacity(1)
  }
  // 비활성시에 원상복귀하고 싶을 경우 사용 
  const handleSetInactive = () => {
    console.log("Inactive")
    setX(0)
    setOpacity(0.1)
  }
  

  return (
    <div className="App">
      <header className="App-header">
        <Link
          activeClass="active"
          to="target"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={-height/1.5}
          duration={500}
          delay={1000}
          isDynamic={true}
          onSetActive={handleSetActive}
          onSetInactive={handleSetInactive}
          hidden
        >
          test
        </Link>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div style={{height: "1000px", backgroundColor:"red"}}/>
      <div id="target" style={{height: "1000px", backgroundColor:"blue"}}>
        <motion.img  
          animate={{x:x, opacity:opacity}}
          transition={{duration:2}}
          src={logopng}/>  
      </div>
  
      
    </div>
  );
}

export default App;
