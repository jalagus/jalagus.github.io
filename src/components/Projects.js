import React from 'react';
import SplitBlock from './SplitBlock';
import projectImage from '../img/project-page.jpg';


function ProjectList() {
  return (
    <div className="projectList">
      <h2>Hobby projects</h2>
      <div>
        <h3><a href="https://github.com/jalagus/rust-sudoku-solver" rel="noreferrer" target="_blank">Sudoku solver in Rust</a></h3>
        <div className="projectDescriptionItem">
          Naive depth-first sudoku solution search algorithm implemented in pure Rust.
        </div>

        <h3><a href="https://github.com/jalagus/rust-hyperloglog" rel="noreferrer" target="_blank">HyperLogLog in Rust</a></h3>
        <div className="projectDescriptionItem">
          <a href="https://en.wikipedia.org/wiki/HyperLogLog">HyperLogLog</a> algorithm implemented in pure Rust.
        </div>
        
        <h3><a href="https://github.com/jalagus/minesweeper-ts" rel="noreferrer" target="_blank">Minesweeper</a></h3>
        <div className="projectDescriptionItem">
          A classic minesweeper game implemented in TypeScript. 
          Live demo available at <a href="http://minesweeper.lagus.ai" rel="noreferrer" target="_blank">http://minesweeper.lagus.ai</a>
        </div>
      </div>      
    </div>
  );
}

function Projects() {
  return (
    <div className="content">
      <SplitBlock
        component={<ProjectList />}
        image={projectImage} />
    </div>
  );
}


export default Projects;