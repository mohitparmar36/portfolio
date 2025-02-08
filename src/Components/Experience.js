import React, { useRef } from 'react'
import { motion,useScroll } from "framer-motion"
import LiIcon from './LiIcon'

const Details = ({position , company , companyLink , time , address , work}) =>{

    const ref = useRef(null);

    return(<>
    
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <LiIcon reference={ref}/>
        <motion.div 
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5,type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp; <a href={companyLink} target='_blank' className='text-primary dark:text-primaryDark capitalize'>@{company}</a></h3>
            <span className='font-medium capitalize dark:text-light/75 text-dark/75 xs:text-sm'>{time} | {address}</span>
            <p className='font-medium w-full md:text-sm'>{work}</p>
        </motion.div>

    </li>

    
    </>)

}

const Experience = () => {
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
      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Experience</h2>

      <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

    <motion.div 
    
    style={{scale:scrollYProgress}}

    className='absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-primaryDark y origin-top
    md:w-[2px] md:left-[30px] xs:left-[20px]'/>

        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
        <Details  
            
            position={"Backend Developer"}
            company={"1Rivet US, Inc."} 
            companyLink={"https://www.1rivet.com/"}
            time={"JAN 2025 - Present"}
            address={"Valsad, Gujarat"}
            work={"Developed a RESTful API for a web application using .NET framework, enabling seamless data retrieval and storage. Implemented JWT-based authentication and authorization for secure user access. Enhanced application performance by 40% through query optimization and database indexing."}
            
          />
        <Details  
            
            position={"Frontend Developer Intern"}
            company={"MargosaTree Technologies LLP"} 
            companyLink={"https://www.margosatree.com/"}
            time={"MAY 2024 - DEC 2024"}
            address={"Mumbai, Maharashtra"}
            work={"Developed an Order Management System (Admin Panel) using React.js, Redux, TypeScript, and Tailwind CSS, featuring role-based access control, dynamic sidebar navigation, order and transaction management, and advanced reporting. Implemented responsive UI, Redux state management, and seamless navigation with React Router to enhance user experience and efficiency."}
            
          />
            <Details  
            
            position={"Backend Developer Intern"}
            company={"LetsGrowMore"} 
            companyLink={"https://letsgrowmore.in/"}
            time={"Summer 2023"}
            address={"Ahmedabad, Gujarat"}
            work={"Developed a responsive design that improved mobile usability by over 30%. Developed an API-based web application that fetches data from APIs. Built dynamic to-do lists and interactive calculators using JavaScript."}
            
            />
            <Details  
            
            position={"Full Stack Developer Intern"}
            company={"DevTown"} 
            companyLink={"https://www.devtown.in/"}
            time={"Summer 2022"}
            address={"Ahmedabad, Gujarat"}
            work={"During my DevTown internship, I mastered fullstack development, working with HTML, CSS, JavaScript, Node.js, Express, and MongoDB, while gaining experience in Git for version control and collaborative coding."}
            
            />
        </ul>
      </div>
    </div>

    </>
  )
}

export default Experience
