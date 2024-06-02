// components/ContactUs.js
import TransitionEffect from '@/Components/TransitionEffect';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaTwitter } from 'react-icons/fa';

const contactus = () => {
  const container = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
    <Head>
          <title>Mohit Parmar | About Page</title>
    </Head>
    <TransitionEffect/>
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-dark relative p-4 sm:p-6 md:p-8">
      <motion.div
        className="bg-white dark:bg-gray-800 p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 rounded-lg shadow-lg max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl w-full relative z-1"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6 md:mb-8 text-gray-900 dark:text-gray-100">Contact Me</h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 md:mb-10">
          Feel free to get in touch with me through any of the following ways:
        </p>
        <div className="space-y-4">
          <motion.div className="flex items-center justify-between bg-blue-50 dark:bg-blue-900 p-3 sm:p-4 rounded-md" variants={item}>
            <FaPhoneAlt className="text-blue-600 dark:text-blue-400" />
            <span className="ml-2 sm:ml-4 text-lg sm:text-sm text-gray-700 dark:text-gray-200">+91 7990089200</span>
          </motion.div>
          <motion.div className="flex items-center justify-between bg-green-50 dark:bg-green-900 p-3 sm:p-4 rounded-md" variants={item}>
        
            <FaEnvelope className="text-green-600 dark:text-green-400" />
            <span className="ml-2 sm:ml-4 text-lg sm:text-sm  text-gray-700 dark:text-gray-200 overflow-hidden text-ellipsis whitespace-nowrap">mohit.parmar2025@gmail.com</span>
           
            
          </motion.div>
          <motion.div className="flex items-center justify-between bg-blue-100 dark:bg-blue-800 p-3 sm:p-4 rounded-md" variants={item}>
            <FaLinkedin className="text-blue-700 dark:text-blue-300" />
            <a href="https://www.linkedin.com/in/parmarmohit/" className="ml-2 sm:ml-4 text-lg sm:text-sm text-blue-700 dark:text-blue-300 truncate">
              linkedin.com/in/parmarmohit
            </a>
          </motion.div>
          <motion.div className="flex items-center justify-between bg-blue-200 dark:bg-blue-700 p-3 sm:p-4 rounded-md" variants={item}>
            <FaTwitter className="text-blue-500 dark:text-blue-300" />
            <a href="https://twitter.com/MohitDebugs" className="ml-2 sm:ml-4 text-lg sm:text-sm text-blue-500 dark:text-blue-300">
              twitter.com/Mohit
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
    </>
  );
};

export default contactus;
