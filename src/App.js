import React, {Fragment} from 'react';
import './App.css';
import HeaderComponent from "./components/header/header";
import Careers from "./components/careers/careers";
import About from "./components/about/about";
import Education from "./components/education-page/education";
import Last from "./components/lastest/lastest";
import Footer from "./components/footer/footer";
import SkillPage from "./components/skill-page/skill";
function App() {
  return (
      <div id={'home'} className={'Container'}>
        
     {/*   header-components*/}
     <HeaderComponent/>

     {/*  careers-components*/}
     <Careers/>

     {/*  skillPage-components */}
     <SkillPage/>

     {/*  about-components */}
     <About/>

     {/*  education-components */}
     <Education/>

     {/*  las-components*/}
     <Last/>

    {/*   footer-components*/}
    <Footer/>
      </div>
  );
}

export default App;
