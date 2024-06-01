import React, { useRef } from 'react'
import { motion,useScroll } from "framer-motion"
import LiIcon from './LiIcon'

const Details = ({type , time , place , info}) =>{

    const ref = useRef(null);

    return(<>
    
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <LiIcon reference={ref}/>
        <motion.div 
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5,type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{type}</h3>
            <span className='font-medium capitalize dark:text-light/75 text-dark/75  xs:text-sm'>{time} | {place}</span>
            <p className='font-medium w-full md:text-sm dark:text-primaryDark text-primary'>{info}</p>
        </motion.div>

    </li>

    
    </>)

}

const Education = () => {
    const ref = useRef();
    const {scrollYProgress} = useScroll(

        {
            target:ref,
            offset:["start end","center start"]
        }
    );
  return (
    <>
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Education</h2>

      <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

    <motion.div 
    
    style={{scale:scrollYProgress}}

    className='dark:bg-primaryDark absolute left-9 top-0 w-[4px] h-full bg-dark origin-top md:w-[2px] md:left-[30px] xs:left-[20px]'/>

        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
            <Details  
            
            type={"Bachelor Of Technology In Information Technology"}
            time={"2020-2024"}
            place={"Indus University,Ahmedabad"}
            info={"Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Web Development with a impressive CGPA of 9.5."}
            
            />
            <Details  
            
            type={"12th Standard"}
            time={"2019-2020"}
            place={"Lions English School,Silvassa"}
            info={"I scored an impressive 87% in my 12th grade, demonstrating strong academic performance."}
            
            />
            <Details  
            
            type={"10th Standard"}
            time={"2017-2018"}
            place={"Baps Swaminarayan Vidyamandir,Silvassa"}
            info={"I achieved a notable 88% in my 10th grade, reflecting strong academic excellence"}
            
            />
        </ul>
      </div>
    </div>

    </>
  )
}

export default Education
