import { SiTailwindcss, SiFigma, SiNextdotjs, SiHtml5, SiRedux, SiJavascript, SiNodedotjs,SiExpress,SiMongodb,SiGraphql,SiGithub,SiPostman,SiMysql   } from "react-icons/si";
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
                      <SiHtml5 className="absolute"/>
                      <h1 className="text-5xl  relative opacity-0 hover:opacity-100 text-orange-600 font-serif">HTML</h1>
                     </span>
                     <span className="skillIcon">
                        <SiFigma className="absolute"/>
                        <h1 className="text-5xl  relative opacity-0 hover:opacity-100 text-orange-600 font-serif">FIGMA</h1>
                     </span>
                     <span className="skillIcon">
                        <SiTailwindcss className="absolute"/>
                        <h1 className="text-3xl  relative opacity-0 hover:opacity-100 text-orange-600 font-serif">TAILWIND CSS</h1>
                     </span>
                     <span className="skillIcon">
                      <SiJavascript className="absolute"/>
                      <h1 className="text-2xl  relative opacity-0 hover:opacity-100 text-orange-600 font-serif">JAVASCRIPT</h1>
                     </span>
                     <span className="skillIcon">
                      <FaReact className="absolute"/>
                      <h1 className="text-5xl  relative opacity-0 hover:opacity-100 text-orange-600 font-serif">REACT</h1>
                     </span>
                     <span className="skillIcon">
                      <SiRedux className="absolute"/>
                      <h1 className="text-4xl  relative opacity-0 hover:opacity-100 text-orange-600 font-serif">REDUX</h1>
                     </span>
                     <span className="skillIcon">
                      <SiNextdotjs className="absolute"/>
                      <h1 className="text-5xl  relative opacity-0 hover:opacity-100 text-orange-600 font-serif">NEXT JS</h1>
                     </span>
                     <span className="skillIcon">
                      <SiNodedotjs className="absolute"/>
                      <h1 className="text-5xl  relative opacity-0 hover:opacity-100 text-orange-600 font-serif">NODE JS</h1>
                     </span>
                   
                     <span className="skillIcon">
                      <SiExpress className="absolute"/>
                      <h1 className="text-4xl  relative opacity-0 hover:opacity-100 text-orange-600 font-serif">EXPRESS JS</h1>
                     </span>
                     <span className="skillIcon">
                      <SiMysql className="absolute"/>
                      <h1 className="text-5xl  relative opacity-0 hover:opacity-100 text-orange-600 font-serif">SQL</h1>
                     </span>
                     <span className="skillIcon">
                      <SiMongodb className="absolute"/>
                      <h1 className="text-4xl  relative opacity-0 hover:opacity-100 text-orange-600 font-serif">MONGO DB</h1>
                     </span>
                     <span className="skillIcon">
                      <SiGraphql className="absolute"/>
                      <h1 className="text-3xl  relative opacity-0 hover:opacity-100 text-orange-600 font-serif">GRAPHQL</h1>
                     </span>
                     <span className="skillIcon">
                      <SiGithub className="absolute"/>
                      <h1 className="text-3xl  relative opacity-0 hover:opacity-100 text-orange-600 font-serif">GITHUB</h1>
                     </span>
                     <span className="skillIcon">
                      <SiPostman className="absolute"/>
                      <h1 className="text-3xl  relative opacity-0 hover:opacity-100 text-orange-600 font-serif">POSTMAN</h1>
                     </span>
                </div>
            </div>
            </section>

        </>
    )
}

export default Skill;