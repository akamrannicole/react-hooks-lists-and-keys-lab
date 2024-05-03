import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import ProjectList from "./ProjectList";
import user from "../data/user";
import ProjectItem from "./ProjectItem";

function App() {
  return (
    <div>
      <NavBar />
      <Home username={user.name} city={user.city} color={user.color} />
      <About bio={user.bio} links={user.links} />
      <ProjectList projects={user.projects} />
      <div>
        {user.projects.map(project => (
          <ProjectItem
            key={project.id} // Assuming each project has a unique ID
            name={project.name}
            about={project.about}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
