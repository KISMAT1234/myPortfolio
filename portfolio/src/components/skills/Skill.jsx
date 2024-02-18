import { SiTailwindcss, SiFigma, SiNextdotjs, SiHtml5, SiRedux, SiJavascript, SiNodedotjs,SiExpress,SiMongodb,SiGraphql,SiGithub  } from "react-icons/si";
import { FaReact } from "react-icons/fa";

const Skill = () =>{
    return(
        <>
        <section id="skills" className="w-full py-20 border-b-[1px] border-b-black">

            <div>
                <h1 className="text-6xl font-bold uppercase font-titleFont mb-10">
                  Technology I use
                </h1>
                <div className="flex gap-4 flex-wrap ">
                     <span className="skillIcon">
                     <SiHtml5 />
                     </span>
                     <span className="skillIcon">
                       <SiFigma />
                     </span>
                     <span className="skillIcon">
                       <SiTailwindcss />
                     </span>
                     <span className="skillIcon">
                     <SiJavascript />
                     </span>
                     <span className="skillIcon">
                     <FaReact />
                     </span>
                     <span className="skillIcon">
                     <SiRedux />
                     </span>
                     <span className="skillIcon">
                     <SiNextdotjs />
                     </span>
                     <span className="skillIcon">
                     <SiNodedotjs />
                     </span>
                     <span className="skillIcon">
                     <SiExpress />
                     </span>
                     <span className="skillIcon">
                     <SiMongodb />
                     </span>
                     <span className="skillIcon">
                     <SiGraphql />
                     </span>
                     <span className="skillIcon">
                     <SiGithub />
                     </span>
                </div>
            </div>
            </section>

        </>
    )
}

export default Skill;