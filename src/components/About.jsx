import React from 'react';
import { motion } from 'framer-motion';
import wordIcon from '../assets/images/wordIcon.png';
import Clippy from '../assets/images/clippy.png';
import ctrlBtns from '../assets/images/ctrlbtns.png'

const About = () => {
  return (
    <div className="pointer-events-auto">

      <motion.div
        initial={{ opacity: 0, y: 100, scale: 0.9, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: 600, scale: 0.8, filter: "blur(20px)" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="w-full max-w-4xl h-[90vh] mx-auto mt-15 bg-[#d4d0c8] shadow-2xl flex flex-col"
      >

        {/* title bar */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-800 text-white px-4 py-2 flex items-center justify-between font-bold select-none">
          <div className="flex items-center gap-3">
            <img src={wordIcon} alt="" className="w-5 h-5" />
            <span>about_me.doc - Microsoft Word</span>
          </div>
          <div className="flex gap-3">
            <img src={ctrlBtns} alt="2003 word control buttons" className='w-15 h-5'/>
          </div>
        </div>

        {/* toolbar */}
        <div className="bg-gradient-to-r from-blue-300 to-blue-200 px-3 py-1 flex gap-2 text-sm border-b border-gray-400">
          {["File", "Edit", "View", "Insert", "Format", "Tools"].map((item) => (
            <button key={item} className="px-2 py-0.5 text-xs hover:bg-white/40">{item}</button>
          ))}
        </div>

        {/* Custom XP scrollbar — <style jsx> MUST be inside the same div that has overflow */}
        <div className="flex-1 overflow-y-auto px-10 py-8 bg-[#d4d0c8]">
          <style jsx>{`
            div::-webkit-scrollbar { width: 17px; }
            div::-webkit-scrollbar-track { background: #d4d0c8; border-left: 1px solid #a0a0a0; }
            div::-webkit-scrollbar-thumb { 
              background: #c0c0c0; 
              border: 1px solid #a0a0a0;
              border-top-color: #e0e0e0;
              border-left-color: #e0e0e0;
              box-shadow: inset 1px 1px 0 #dfdfdf, inset -1px -1px 0 #808080;
            }
            div::-webkit-scrollbar-thumb:hover { background: #a0a0a0; }
            div::-webkit-scrollbar-button { 
              display: block; 
              height: 17px; 
              background: #d4d0c8; 
              border: 1px solid #a0a0a0; 
            }
          `}</style>

          {/* document */}
          <div className="bg-white shadow-inner mx-auto max-w-3xl min-h-[150vh] p-16 pt-20 font-serif text-lg leading-relaxed text-justify">
            <h1 className="text-4xl font-bold text-center mb-12 text-blue-900">About Me<span className='text-gray-800 animate-pulse'>|</span></h1>

            <p className="mb-6 indent-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="mb-6 indent-12">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
            <p className="mb-6 indent-12">
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
            </p>
            <p className="mb-6 indent-12">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
            </p>
          </div>
        </div>

        {/* Status bar */}
        <div className="bg-gray-300 border-t border-gray-500 px-4 py-1 text-xs flex justify-between text-gray-700">
          <span>Times New Roman 12 pt</span>
          <span>Page 1 Sec 1 Words: 287 100%</span>
        </div>

        {/* clippy*/}
        <img
          src={Clippy}
          alt="Clippy with speech bubble"
          className="absolute bottom-8 right-8 w-40 pointer-events-none select-none"
        />

      </motion.div>


    </div>
  );
};

export default About;