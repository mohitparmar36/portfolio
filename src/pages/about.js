import AnimatedText from "@/Components/AnimatedText";
import Layout from "@/Components/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/developer-pic-2.jpg";
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/Components/Skills";
import Experience from "@/Components/Experience";
import Education from "@/Components/Education";
import TransitionEffect from "@/Components/TransitionEffect";

const AnimatedNumbers = ({value}) =>{
  const ref = useRef();

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue,{ duration:3000 });
  const isInView = useInView(ref,{once:true});

  useEffect(()=>{
    if(isInView){
      motionValue.set(value);
    }
  },[isInView,value,motionValue]);

  useEffect(() => {
    springValue.on("change",(latest)=>{
      if(ref.current && latest.toFixed(0)<=value){
        ref.current.textContent = latest.toFixed(0);
      }
    })
  }, [springValue,value])
  

  return <span ref={ref}></span>
}

const about = () => {
  return (
    <div>
      <>
        <Head>
          <title>Mohit Parmar | About Page</title>
        </Head>
        <TransitionEffect/>

        <main className="flex w-full flex-col items-center justify-center dark:text-light">
          <Layout className="pt-16">
            <AnimatedText text={"Passion Fuels Purpose!"} className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" />
            <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
              <div className="md:col-span-8 md:order-2 col-span-3 flex items-start flex-col justify-start xl:col-span-4">
                <h2 className="dark:text-light/75 mb-4 text-lg font-bold uppercase text-dark/75">
                  Biography
                </h2>
                <p className="font-medium">
                I'm Mohit Parmar, a recent graduate and enthusiastic full stack developer with a strong focus on backend development. Throughout my academic journey, I've honed my skills by creating numerous projects that showcase my proficiency in various programming languages and frameworks.
                </p>
                <p className="font-medium my-4">
                My passion lies in crafting robust and efficient backend systems, leveraging my deep understanding of server-side technologies and database management. 
                </p>

                <p className="font-medium">
                I thrive in collaborative environments and constantly seek to expand my knowledge by staying updated with the latest industry trends and technologies. My commitment to continuous learning drives me to stay up-to-date with the latest technologies and trends in the field.
                </p>
              </div>

              <div className="md:col-span-8 md:order-1 xl:col-span-4 col-span-3 h-max relative border-2 border-solid border-dark rounded-2xl bg-light p-8 dark:bg-dark dark:border-light">
                <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light"/>
                  <Image
                    src={profilePic}
                    className="w-full h-auto rounded-2xl"
                    priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                
              </div>

              <div className="md:order-3 col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl"><AnimatedNumbers value={20}/>+</span>
                <h2 className="text-xl font-medium text-dark/75 capitalize dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">Projects Deployed</h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl"><AnimatedNumbers value={15}/>+</span>
                <h2 className="text-xl font-medium text-dark/75 capitalize dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">Technical Skills</h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl"><AnimatedNumbers value={7}/>+</span>
                <h2 className="text-xl font-medium text-dark/75 capitalize dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">Courses Completed</h2>
              </div>
            </div>

            </div>

            <Skills/>
            <Experience/>
            <Education/>
            
            
          </Layout>
        </main>
      </>
    </div>
  );
};

export default about;
