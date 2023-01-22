import './App.css';
import { Configuration, OpenAIApi } from 'openai';
import OptionSelection from './components/OptionSelection';
import Translation from './components/Translation';
import { arrayItems } from './AIOptions';
import { useState } from 'react';


function App() {
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  });
  const openai = new OpenAIApi(configuration);

  const [option, setOption] = useState({});
  const [input, setInput] = useState(""); //we are passing all of the options from index.jsx through input
  const [result, setResult] = useState("");
  // console.log(import.meta.env.VITE_Open_AI_Key);

  const selectOption = (option) => {
    setOption(option);
  };

  const doStuff = async () => {
    let object = { ...option, prompt: input }

    const response = await openai.createCompletion(object);

    setResult(response.data.choices[0].text);
  }


  console.log(option);
  return (
    <div className='App'>
      {Object.values(option).length === 0 ? (
        <OptionSelection arrayItems={arrayItems} selectOption={selectOption} />
      ) : (
        <Translation doStuff={doStuff} setInput={setInput} result={result} />
      )}
    </div>
  );
}

export default App;


























// import { useState } from 'react';
// import { Configuration, OpenAIApi } from 'openai';
// import './App.css'

// function App() {
//   const [prompt, setPrompt] = useState('');
//   const [result, setResult] = useState('');

//   const configuration = new Configuration({
//     apiKey: import.meta.env.VITE_Open_AI_Key,
//   });

//   const openai = new OpenAIApi(configuration);

//   const generateImage = async () => {
//     const response = await openai.createImage({
//       prompt: prompt,
//       n: 1,
//       size: "1024x1024"
//     });

//     setResult(response.data.data[0].url)
//   }

//   return (
//     <div className='app-main'>
//       <h3>Generate an image using open ai</h3>
//       <input
//         className='app-input'
//         placeholder='Type something to generate an image'
//         onChange={(e) => setPrompt(e.target.value)} />
//       <button onClick={generateImage}>Generate an Image</button>

//       {result.length > 0 ? <img
//         className='result-image' src={result} alt='result' /> : <></>}
//     </div >
//   )
// }

// export default App
