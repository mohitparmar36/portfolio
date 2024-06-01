import React from 'react'
import { motion } from 'framer-motion'



const Skill = ({name,x,y}) =>{

    return (<>
    
    <motion.div className='dark:text-dark dark:bg-light flex absolute items-center justify-center rounded-full bg-dark text-light font-semibold py-3 px-6 shadow-dark cursor-pointer lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-1.3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold'
            whileHover={{scale:1.05}}
            initial={{x:0,y:0}}
            whileInView={{x:x,y:y,transition:{duration:1.5}}}
            viewport={{once:true}}
            >
                {name}
            </motion.div>
    
    </>)
}

const Skills = () => {
  return (
   <>
   
   <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>Skills</h2>
   <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:dark:bg-circularDarkLg lg:bg-circularLightLg
   md:dark:bg-circularDarkMd md:bg-circularLightMd
   sm:dark:bg-circularDarkSm sm:bg-circularLightSm
   lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]'>

            <motion.div className='dark:text-dark dark:bg-light flex  items-center justify-center rounded-full bg-dark text-light font-semibold p-8 shadow-dark cursor-pointer lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-1.3 lg:p-6 md:p-4 xs:text-xs xs:p-2'
            whileHover={{scale:1.05}}
            >
                Web
            </motion.div>

            <Skill name={"NodeJs"} x="-19vw" y="2vw"/>
            <Skill name={"ExpressJs"} x="-5vw" y="-10vw"/>
            <Skill name={"MongoDb"} x="20vw" y="6vw"/>
            <Skill name={"FramerMotion"} x="15vw" y="-5vw"/>
            <Skill name={"Spring Boot"} x="0vw" y="10.5vw"/>
            <Skill name={"Java"} x="20vw" y="-15vw"/>
            <Skill name={"MySQL"} x="32vw" y="-5vw"/>
            <Skill name={"Github"} x="-20vw" y="-15vw"/>
            <Skill name={"NextJs"} x="-35vw" y="-5vw"/>
            <Skill name={"JAVASCRIPT"} x="-32vw" y="7vw"/>
            <Skill name={"HTML"} x="-25vw" y="15vw"/>
            <Skill name={"Tailwind CSS"} x="25vw" y="15vw"/>
            <Skill name={"React"} x="0vw" y="-21vw"/>
            
    
   </div>

   </>
  )
}

export default Skills
