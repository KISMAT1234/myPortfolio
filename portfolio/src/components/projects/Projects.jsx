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
          title="E-commerce Website"
          des="Restaurant website for client who wants to order their favourite food through website and home deliveriy 
          is also available for the customer who needs the food under 1 hour."
          src={projectOne}
        />
        <ProjectsCard
          title="Todo-List  App"
          des="User can pick the randomly used number through this website . The user will be able to add a 
          new name and delete it when needed.And user can also  mark as completed if they have done their task."
          src={projectTwo}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
        //   src={projectThree}
        />

      </div>
    </section>
  );
}

export default Projects