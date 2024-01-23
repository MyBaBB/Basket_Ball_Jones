// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../App.css'
import Trophy from '../img/Trophy.jpg'
const Headers = () => {
  return (
    <div>
           
       
           <div className='HeaderWrapper
           bg-black
               w-fit h-fit z-10 px-[40px] mt-2 lg:translate-x-28
                relative justify-center items-center m-0 m-auto
                text-[#ffa043] font-extrabold
                text-[25px] xxs:text-[30px] xs:text-[35px] sm:text-[40px] md:text-[50px] 
                 border-2 border-green-600 rounded-[30px]
               '>
                  <div>
                    <h1 className='BasketballJonesHeader '>
                     Basket Ball Jones
                    </h1>
                  </div>
          </div>

          <div className='doodlebugSide z-10  
                fixed 
                 bg-black  w-[140px]           
               text-[#ffa043] text-[31px]  font-semibold
                border-2 border-green-600 rounded-tr-[30px] border-b-transparent
                pl-[5px] pr-[16.5px] py-[5px]
                bottom-[141px] left-[0px] '>
                <div>
                  <h2>
                    Winner
                  </h2>
                  <h2>
                  &nbsp;&nbsp;&nbsp;Takes
                  </h2>
                  <h2 >
                      <span className='Money tracking-[-22px]  landscape:tracking-[-3px] -ml-2 font-extrabold'>
                       💲💲💲
                      </span>
                  &nbsp;&nbsp;&nbsp;All
                  </h2>
                </div>  
          </div>

    <div className='doodlebugBL z-10  
                fixed w-[140px] h-[140px]            
                text-[#fff]
                border-2 border-green-600 border-t-transparent 
                bottom-[4.2px] left-[0px]   '>
         <div >
            <div className='z-10 absolute left-[57px] top-[75px] bg-indigo-950 text-[7px]' >
               <span >
                 Champ
               </span>
            </div>
            <div className='z-10 absolute left-[57px] top-[92px] text-[9px]  text-white font-semibold'>
                <span >
                 Jones
                </span>
            </div>
          <img src={Trophy} alt="Trophy" />
        </div>
    </div>


          <div  className=' doodlebugBR z-10 
                 fixed bottom-[3.9px]
                 right-0
                 bg-black            
                 text-[#ffa043]   font-semibold
                  border-2 border-green-600 rounded-tl-[30px] border-b-transparent
                 text-center
                 p-4
                 '>
           <div>
           <p className='BottomDollar  text-white text-center 
            text-[13px] xxs:text-[15px] xs:text-[15px] sm:text-[15px] md:text-[30px]'>
               Bring $20 Bucks
               
           </p>
           <p className='googleFont1 text-white underline
           text-[10px] xxs:text-[12px] xs:text-[15px] sm:text-[15px] md:text-[30px]
           '>Winner Takes All</p> 
             <h2 className='goggleFont1 text-white text-[10px] xxs:text-[12px] xs:text-[15px] sm:text-[15px] md:text-[30px]
             landscape: text-sm'>
                 Under &quot;The Bridge&quot;</h2>

               <p className='goggleFont1'> Every Saturday</p>
            
             <p className='googleFont1 text-white
             text-[10px] xxs:text-[12px] xs:text-[15px] sm:text-[15px] md:text-[30px]
             landscape:text-sm'>
               6 Shots Per Round
              
             </p>
            <a href="https://mybabb.com"> 
               <span className='WebAddress goolgeFont1
                text-[8px] xxs:text-[10px] xs:text-[12px] sm:text-[15px] md:text-[25px]
                 inline-block -pb-4 text-white underline
                 landscape:text-sm
                 '>Https://UnderTheBrige.com
               </span>
            </a>
           </div>
          </div>
        
        
         
       </div>   
      
    
  )
}

export default Headers
