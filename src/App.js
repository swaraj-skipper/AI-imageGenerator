// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import './Label.js';
import Label from './Label.js';
import {Configuration,OpenAIApi} from "openai";

class CustomFormData extends FormData {
  getHeaders() {
    return {}
  }
}

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_API_KEY,
  formDataCtor: CustomFormData
});

const openai = new OpenAIApi(configuration);

function App() {

  const [userPrompt,setUserPrompt] = useState("");
  const [number,setNumber] = useState(1);
  const [size,setSize] = useState("256x256");
  const [imageUrl,setImageUrl] = useState("");

  
  const generateImg = async () => {
    setImageUrl("https://e0.pxfuel.com/wallpapers/591/34/desktop-wallpaper-naruto-neon-naruto-glowing-thumbnail.jpg");

    // const imageParameters = {
    //   prompt: userPrompt,
    //   n: parseInt(number),
    //   size: size,
    // };

    // const response = await openai.createImage(imageParameters);
    // const urlData = response.data.data[0].url;
    // setImageUrl(urlData);

    // try {
    //   const response = await openai.createImageVariation(imageParameters);
    //   console.log(response.data.data[0].url);
    // } catch (error) {
    //   if (error.response) {
    //     console.log(error.response.status);
    //     console.log(error.response.data);
    //   } else {
    //     console.log(error.message);
    //   }
    // }
  }

  

  return (
    <div className="App">
      <h1>Hello it's been so long</h1>
      {imageUrl && <img height = '256px' width= '256px' src={imageUrl} alt='img'/>}

      <Label label = {"Generate-image"} setAttribute = {setUserPrompt}/>      
      <Label label = {"Amount"} setAttribute = {setNumber}/>      
      <Label label = {"Size"} setAttribute = {setSize}/>      
   
      <button onClick={generateImg}>Submit</button>
    </div>
  );
}

export default App;
