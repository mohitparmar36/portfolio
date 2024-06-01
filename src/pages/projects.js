import AnimatedText from '@/Components/AnimatedText'
import { GithubIcon } from '@/Components/Icons'
import Layout from '@/Components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import projectImage from "../../public/images/projects/doctorImage.png"
import secondProjectImage from "../../public/images/projects/amazon.png"
import thirdProjectImage from "../../public/images/projects/iNotebook.png"
import fourthProjectImage from "../../public/images/projects/fashionTrends.png"
import fifthProjectImage from "../../public/images/projects/portfolioImage.png"
import sixthProjectImage from "../../public/images/projects/weather_Api_Image.png"
import TransitionEffect from '@/Components/TransitionEffect'

const Project = ({type,title,summary,img,link,github}) =>{

    return(<>
    
        <ariticle className="dark:bg-dark dark:border-light w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative xs:p-4">
        <div className="rounded-br-3xl absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light
        md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"/>    

        <Link className='w-full cursor-pointer overflow-hidden rounded-lg' href={link} target='_blank'>
                <Image src={img} alt={title} className='w-full h-auto'/>
            </Link>

            <div className='w-full flex flex-col items-start justify-between'>
                <span className='text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base'>{type}</span>
                <Link className='hover:underline underline-offset-2' href={link} target='_blank'>
                <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
            </Link>
            <div className='w-full mt-2 flex items-center justify-between'>
            <Link href={link} target='_blank' className='text-lg font-semibold underline dark:text-light md:text-base'> Visit</Link>    
            
            </div>
            </div>
            
        </ariticle>
    
    
    </>)
}


const FeaturedProject = ({type,title,summary,img,link,github}) =>{
    return(<>
    
        <article className='dark:bg-dark dark:border-light rounded-br-2xl relative p-12 flex items-start justify-center w-full rounded-3xl border border-solid border-dark bg-light shadow-2xl lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
        <div className="rounded-br-3xl absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
        xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"/>    
            <Link className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full' href={link} target='_blank'>
                <Image src={img} alt={title} className='w-full h-auto'/>
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary dark:text-primaryDark font-medium text-xl xs:text-base'>{type}</span>
                <Link className='hover:underline underline-offset-2' href={link} target='_blank'>
                <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
            </Link>
            <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
            <div className='mt-2 flex items-center'>
            
            <Link href={link} target='_blank' className='rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base'> Visit Project </Link>
            </div>
            </div>
        </article>

    
    </>)
}



const projects = () => {
  return (
    <>
    
    <Head>
          <title>Mohit Parmar | Projects Page</title>
    </Head>
    <TransitionEffect/>

    <main className='w-full mb-6 flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>

                <AnimatedText text={"Imagination Trumps Knowledge!"} className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:text-4xl'/>

                <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 1g: gap-x-8 md:gap-y-24 sm:gap-x-0'>

                    <div className='col-span-12'>
                        <FeaturedProject 
                        title={"Doctor Appointment Web Application"}
                        img={projectImage}
                        github={"/"}
                        summary={"A feature-rich Doctor Appointment Application using React, NodeJs, ExpressJs, MongoDb, Tailwind CSS, Context API, React Router and POSTMAN.It allows users to effortlessly book and manage their doctor appointments. You can easily view and select available appointment slots in real-time."}
                        link={"/"}
                        type={"Featured Project"}

                        
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                    <Project 
                        title={"Amazon Clone"}
                        img={secondProjectImage}
                        github={"https://github.com/mohitparmar36/Amazon-clone"}
                        summary={"A front-end E-commerce Website using React and Firebase. It offers a seamless shopping experience with features like secure user authentication, real-time inventory updates.You can easily track your orders and manage your cart in real-time."}
                        link={"https://clone-64ed1.web.app/"}
                        type={"Project"}

                        
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project 
                        title={"iNoteBook - Note Taking Webite"}
                        img={thirdProjectImage}
                        github={"https://github.com/mohitparmar36/iNotebook"}
                        summary={"A full-stack iNotebook App using MongoDB, Express, React, and Node.js. It allows users to seamlessly create, edit, and manage their notes. You can easily organize your notes with categories and tags, and access them anytime, anywhere."}
                        link={"https://github.com/mohitparmar36/iNotebook"}
                        type={"Project"}

                        
                        />
                    </div>
                    <div className='col-span-12'>
                    
                        <FeaturedProject 
                        title={"Portfolio Website"}
                        img={fifthProjectImage}
                        github={"https://github.com/mohitparmar36/my-portfolio-website"}
                        summary={"A dynamic Portfolio Website using Next.js, Framer Motion, and Tailwind CSS. It showcases your projects, skills, and experiences with smooth animations and a modern design. You can easily navigate through different sections, view detailed project descriptions, and appreciate the seamless user experience."}
                        link={"https://github.com/mohitparmar36/my-portfolio-website"}
                        type={"Featured Project"}

                        
                    
                        />
                        
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                    <Project 
                        title={"Fashion Trend Website"}
                        img={fourthProjectImage}
                        github={"https://github.com/mohitparmar36/fashiontrend"}
                        summary={"A stylish Fashion Trend Website built using HTML and CSS. It showcases the latest trends in fashion, featuring stunning visuals and curated collections. Explore the latest styles, get inspired by fashion blogs, and stay updated on the hottest trends in the industry."}
                        link={"http://fashiontrend.vercel.app/"}
                        type={"Project"}

                        
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                    <Project 
                        title={"Weather API Application"}
                        img={sixthProjectImage}
                        github={"https://github.com/mohitparmar36/Weather-Api"}
                        summary={"An advanced Weather API Project using React and OpenWeather API. It provides detailed and accurate weather information for any location. You can easily search for current weather conditions, forecasts, and historical data, all displayed in a user-friendly interface."}
                        link={"https://github.com/mohitparmar36/Weather-Api"}
                        type={"Featured Project"}

                        
                        />
                    </div>

                </div>

        </Layout>
    </main>
    
    </>
  )
}

export default projects
