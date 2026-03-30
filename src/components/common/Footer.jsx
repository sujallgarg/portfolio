import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          
          {/* Brand & Status */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-white font-bold tracking-[0.3em] uppercase text-sm">
                SUJAL GARG
              </span>
            </div>
           
          </div>

          {/* Social Links (The "Coordinates") */}
          <div className="flex flex-wrap gap-8 ">
            {[
              { name: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
                </svg> , link: "https://www.linkedin.com/in/sujal-garg-b2a820373/"},
              { name: <img width="30" height="30" src="https://img.icons8.com/fluency-systems-regular/48/github.png " alt="github" className="bg-white rounded-4xl
" />  , link: "https://github.com/sujallgarg" },
              { name: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                <path fill="#212121" fill-rule="evenodd" d="M38,42H10c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4h28	c2.209,0,4,1.791,4,4v28C42,40.209,40.209,42,38,42z" clip-rule="evenodd"></path><path fill="#fff" d="M34.257,34h-6.437L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z"></path><polygon fill="#fff" points="15.866,34 23.069,25.656 22.127,24.407 13.823,34"></polygon><polygon fill="#fff" points="24.45,21.721 25.355,23.01 33.136,14 31.136,14"></polygon>
                </svg>,  link: "https://X.com/sujal_twt" },
            ].map((social) => (
              <motion.a 
                key={social.name}
                href={social.link}
                target="_blank"
                className="text-white/30 text-[11px] uppercase tracking-[0.2em] font-bold hover:text-white transition-colors duration-300 ease-in-out relative group"
                whileHover={{scale:1.1}}
                
              >
                {social.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom Bar: System Data */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-mono text-white/20 uppercase tracking-widest">
          <div className="flex gap-6">
            {/* <span>© {currentYear} ALL_RIGHTS_RESERVED</span>
            <span className="hidden sm:block">EST_TIME: 22:42:16</span> */}
          </div>
{/*           
          <div className="flex gap-6">
            {/* <span className="hover:text-white/50 transition-colors">PRIVACY_POLICY</span>
            <span className="hover:text-white/50 transition-colors">TERMS_OF_SERVICE</span> */}
            {/* <motion.span 
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-accent/40"
            > */}
              {/* V_4.2.1_STABLE */}
            {/* </motion.span> */}
          {/* </div> */} 
        </div>
      </div>
    </footer>
  );
};

export default Footer;