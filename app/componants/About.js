import React, { useActionState, useState } from 'react';

export default function About() {

  const[mystyle,setmystyle]=useState( {
    color:'black',
    backgroundColor:'white'   
  } )

  const[btntext,setbtntext]=useState("Enable dark mode")

  const toggleStyle=()=>{
  if (mystyle.color=='white'){
    setmystyle({
      color:'black',
      backgroundColor:'white',
      bordar:'2px solid while'  
    }) 
    setbtntext("Enable dark mode")
   }
    
  else{
    setmystyle({
      color:'white',
      backgroundColor:'black'  
    }) 
    setbtntext("Enable light mode")
    }
  }




  const [openAccordion, setOpenAccordion] = useState(null);


  const toggleAccordion = (accordion) => {
    setOpenAccordion(openAccordion === accordion ? null : accordion);
  };



  return (
    <div className='container' style={mystyle} id="accordion-nested-parent" data-accordion="collapse">
      <h2 className='m-2'>About Us</h2>
      <h2 id="accordion-collapse-heading-1">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
          onClick={() => toggleAccordion('accordion-1')}
          aria-expanded={openAccordion === 'accordion-1'}
          aria-controls="accordion-collapse-body-1"
        >
          <span>What is TextUtelis?</span>
          <svg data-accordion-icon className={`w-3 h-3 ${openAccordion === 'accordion-1' ? 'rotate-180' : ''} shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
          </svg>
        </button>
      </h2>
      <div id="accordion-collapse-body-1" className={`${openAccordion === 'accordion-1' ? '' : 'hidden'}`} aria-labelledby="accordion-collapse-heading-1">
        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
          <p className="mb-2 text-gray-500 dark:text-gray-400">TextUtelis is my project name that combines the words "text" and "utilities," suggesting a set of tools or functionalities related to text manipulation or processing. </p>
          

          
        </div>
      </div>
      <h2 id="accordion-collapse-heading-2">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
          onClick={() => toggleAccordion('accordion-2')}
          aria-expanded={openAccordion === 'accordion-2'}
          aria-controls="accordion-collapse-body-2"
        >
          <span>The function we provide.</span>
          <svg data-accordion-icon className={`w-3 h-3 ${openAccordion === 'accordion-2' ? 'rotate-180' : ''} shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
          </svg>
        </button>
      </h2>
      <div id="accordion-collapse-body-2" className={`${openAccordion === 'accordion-2' ? '' : 'hidden'}`} aria-labelledby="accordion-collapse-heading-2">
        <div className="p-5 border border-gray-200 dark:border-gray-700">
          <p className="mb-2 text-gray-500 dark:text-gray-400">Convert text to uppercase, lowercase, or other case formats.</p>
          <p className="text-gray-500 dark:text-gray-400">Clear the Text.</p>
        </div>
      </div>
      <button type="button" onClick={toggleStyle} class="text-white m-5 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{btntext}</button>
    </div>
  );

}
 