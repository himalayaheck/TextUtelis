// import React, { useState } from 'react'



// export default function Textbox(props) {
//   const [text, settext] = useState('Enter your text here');

//   const handleUpClick = () => {
//     console.log("uppercase was clicked");
//     let newtext = text.toUpperCase();
//     settext(newtext)
//   }
//   const handleloClick = () => {
//     console.log("lowercase was clicked");
//     let newtext = text.toLowerCase();
//     settext(newtext)
//   }
//   const handleOnChange = (event) => {
//     console.log(" on change");
//     settext(event.target.value)
//   }
//   return (
//     <>
//       <div className='container'>


//           <h1 class="m-2">{props.text}</h1>

//           <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-blue"></label>
//           <textarea id="message" value={text} onChange={handleOnChange} rows="8" class="block p-2.5 w-full text-sm container text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here"></textarea>

//           <button className="bg-blue-300 m-5" onClick={handleUpClick}>Convert To uppercase</button>
//           <button className="bg-blue-300 " onClick={handleloClick}>Convert To lowercase</button>

//       </div>
//       <div className='container m-2'>
//             <h1>Your text summary </h1>
//             {text.split(" ").length} words and {text.length} characters
//             <h6>preview</h6>
//             <h3>{text}</h3>

//       </div> 
//     </>


//   )
// }
import React, { useState } from 'react';

export default function Textbox(props) {
  const [text, setText] = useState('Enter your text here');

  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","Success");
  };

  const handleLoClick = () => {
    console.log("Lowercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","Success");
  };

  const clearClick= ()=>{
    let newText=" ";
    setText(newText);
    props.showAlert("Text Cleared","Success");
  };

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  const countWords = (text) => {
    // Trim the text to remove extra spaces and split by spaces or new lines, then filter out empty strings
    return text.trim().split(/\s+/).filter((word) => word.length > 0).length;
  };

  const countCharacters = (text) => {
    // Count characters excluding spaces
    return text.replace(/\s/g, '').length;
  };

  return (
    <>
      <div className="container">
        <h1 className="m-2">{props.text || 'Default Text'}</h1>

        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-blue"></label>
        <textarea
          id="message"
          value={text}
          onChange={handleOnChange}
          rows="8"
          className="block p-2.5 w-full text-sm container text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here">
        </textarea>
        <button class="text-white m-5  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={handleUpClick}>Convert To Uppercase</button>
        <button class="text-white m-5  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={handleLoClick}>Convert To Lowercase</button>
        <button class="text-white m-5  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={clearClick}>Clear Text</button>

      </div>
      <div className="container m-2">
        <strong><h1>Your text summary</h1></strong>
       <p>Number of words:     {countWords(text)} </p> 
        Number of characters:     {countCharacters(text)} 
       <strong><h6>Preview of your Text(Text without Extra spaces)</h6></strong> 
        <h3>{text}</h3>
      </div>
    </>
  );
}

