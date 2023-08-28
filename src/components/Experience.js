import React from 'react';
import SplitBlock from './SplitBlock';
import SplitBlockReverse from './SplitBlockReverse';
import workImage from '../img/work.jpg';
import educationImage from '../img/education.jpg';

function WorkList() {
  return (
    <div className="workList">
      <h2>Work experience</h2>
      <div>
        <div className="workItem">
          <div className="workCompany">IPRally Technologies Oy</div>
          <div className="workTitle">AI Developer</div>
          <div className="workDate">06/2021 - 06/2023</div>
          <div className="workDescription">Working as a part of the AI team researching and building NLP models, classification tools, and large-scale processing pipelines for patent datasets.</div>
        </div>
        <div className="workItem">
          <div className="workCompany">Reaktor Innovations Oy</div>
          <div className="workTitle">Data scientist</div>
          <div className="workDate">05/2018 - 06/2021</div>
          <div className="workDescription">Working as a part of the data science team in various research-oriented customer projects in different domains (main keywords: NLP and time-series modeling).</div>
        </div>
        <div className="workItem">
          <div className="workCompany">SN4 International Oy</div>
          <div className="workTitle">Software developer</div>
          <div className="workDate">03/2013 - 05/2016</div>
          <div className="workDescription">Mostly responsible for full-stack development of SAAS software,  developing automatic SQL-based data processing tools with Java, and creating customized user reports through the JasperReports framework.</div>
        </div>
        <div className="workItem">
          <div className="workCompany">Tekniikan osuuskunta Icaros</div>
          <div className="workTitle">Full-stack developer</div>
          <div className="workDate">03/2010 - 12/2012</div>
          <div className="workDescription">Co-founder of a student startup doing several customer projects, being mainly responsible for working in web application development for customer projects and the company’s marketing strategy.</div>
        </div>
      </div>
    </div>
  );
}

function EducationList() {
  return (
    <div className="educationList">
      <h2>Education</h2>
      <div>
        <div className="educationItem">
          <div className="educationSchool">University of Helsinki</div>
          <div className="educationDegree">Doctor of Philosophy</div>
          <div className="educationDate">2016 - 2023</div>
          <div className="educationDescription">Majoring in computer science with a specialization in natural language processing under the supervision of Arto Klami in the research group “Multi-source Probabilistic Inference”. Doctoral thesis: Transformations and document similarities in word embedding spaces.</div>
        </div>        
        <div className="educationItem">
          <div className="educationSchool">University of Helsinki</div>
          <div className="educationDegree">Master of Science</div>
          <div className="educationDate">2014 - 2016</div>
          <div className="educationDescription">Majoring in computer science with a specialization in algorithms, data structures, and machine learning. Master’s thesis: Course outcome prediction with transfer learning methods</div>
        </div>
        <div className="educationItem">
          <div className="educationSchool">University of Helsinki</div>
          <div className="educationDegree">Bachelor of Science</div>
          <div className="educationDate">2012 - 2014</div>
          <div className="educationDescription">Majoring in computer science. Bachelor’s thesis: MapReduce and its applications in bioinformatics.</div>
        </div>
        <div className="educationItem">
          <div className="educationSchool">Saimaa University of Applied Sciences</div>
          <div className="educationDegree">Bachelor of Engineering</div>
          <div className="educationDate">2009 - 2012</div>
          <div className="educationDescription">Majoring in information technology with a specialization in ICT entrepreneurship. Bachelor’s thesis: Productizing a team learning system.</div>
        </div>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <div className="content">
      <SplitBlock
        component={<WorkList />}
        image={workImage} />
      <div className="divSpacer"></div>
      <SplitBlockReverse 
        component={<EducationList />}
        image={educationImage} />
    </div>
  );
}


export default Experience;