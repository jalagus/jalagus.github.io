import React from 'react';
import headerImg from '../img/header.jpg';
import profileSide from '../img/profile_side.jpg';
import linkedinIcon from '../img/linkedin_icon.png';
import githubIcon from '../img/github_icon.png';
import SplitBlock from './SplitBlock';
import ContactForm from './ContactForm';


function Profile() {
  return (
    <div>
      <h2>About me</h2>
      <div className="profileDescription">
        <div className="profileParagraph">I am a seasoned machine learning researcher and consultant holding a PhD in computer science, with a distinguished focus on natural language processing.</div>
        <div className="profileParagraph">With over 10 years of dedicated involvement in this field, I have honed my skills by contributing to diverse machine learning and NLP projects, spanning sentiment analysis, language generation, and more. My work is underpinned by a commitment to unravel the complexities of human language and empower technology for seamless communication.</div>
        <div className="profileParagraph">A cornerstone of my approach is a robust foundation in software development. I staunchly believe that the synergy between meticulous coding and advanced machine learning is the key to pioneering solutions. My proficiency in languages such as Python, TypeScript, and Rust empowers me to translate theoretical concepts into practical applications that transcend boundaries.</div>
        <div className="profileParagraph">I am enthusiastic about forging connections with peers, industry professionals, and organizations that share my passion for NLP and AI. Should you wish to engage in collaborative endeavors, strategic discussions, or simply explore possibilities, do not hesitate to contact me via the social links below.</div>
      </div>
      <div className="socialMedia">
        <a href="https://www.linkedin.com/in/jarkko-lagus-62678440/" rel="noreferrer" target="_blank"><img src={linkedinIcon} alt="LinkedIn" /></a>
        <a href="https://github.com/jalagus" rel="noreferrer" target="_blank"><img src={githubIcon} alt="Github" /></a>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="homeContent">
      <div className="homeHeader">
        <div className="homeHeaderImage">
          <img src={headerImg} alt="Jarkko Lagus" />
        </div>
        <div className="homeHeaderText">
          <div className="headerAllCaps">Welcome</div>
          <div className="headerProductName">lagus.ai</div>
          <div className="headerProductDesc">Machine learning and artificial intelligence consulting tailored to your business needs.</div>
          <a href="#contactForm">
            <button className="buttonStyle">Get started</button>
          </a>
        </div>
      </div>

      <SplitBlock
        component={<Profile />}
        image={profileSide} />
      <div id="contactForm">
        <ContactForm />
      </div>
    </div>
  );
}

export default Home;