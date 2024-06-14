import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Food-Order"
          des="Restaurant website for client who wants to order their favourite food through website and home deliveriy 
          is also available for the customer who needs the food under 1 hour."
          src={projectOne}
        />
        <ProjectsCard
          title="Fund raising Project"
          des="A user can start to fund raise for the vicitm in this website. Payment Gateway, Comments, Strong search functionality, notification and athentication are the main feature of this website."
          src={projectTwo}
        />
        <ProjectsCard
          title="Anonomous message"
          des="Anyone can send message to anyone but their identity is been hidden which makes a unique feature of this project. Advanced authentication i.e authjs is used to make user id pw more secured"
        />

      </div>
    </section>
  );
}

export default Projects