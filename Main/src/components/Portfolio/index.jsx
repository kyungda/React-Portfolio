import { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'NomNomNavigator',
      description: 'MERN Stack',
      link: "https://github.com/kyungda",
      repo: "https://github.com/kyungda/NomNomNavigator"
    },
    {
      name: 'ParcsnRecs',
      description: 'Javascript',
      link: "https://github.com/kyungda",
      repo: "https://github.com/kyungda/ParcsNRecs"
    },
    {
      name: 'CinemaDB',
      description: 'HTML/CSS',
      link: "https://github.com/kyungda",
      repo: "https://github.com/kyungda/cinemaDB"
    },
   
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
