// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import './Label.js';
import Label from './Label.js';
import {Configuration,OpenAIApi} from "openai";
import { saveAs } from 'file-saver'

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
  const [imageUrl, setImageUrl] = useState("	https://i.pinimg.com/originals/79/7c/e3/797ce3bda56685291b4882e1b8254aa5.gif");

  
  const generateImg = async () => {
    // setImageUrl("https://e0.pxfuel.com/wallpapers/591/34/desktop-wallpaper-naruto-neon-naruto-glowing-thumbnail.jpg");
    
    const imageParameters = {
        prompt: userPrompt,
        n: 1,
      size: "256x256",
    };

    const response = await openai.createImage(imageParameters);
    const urlData = response.data.data[0].url;
    setImageUrl(urlData);

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

    const downloadImage = () => {
      saveAs(imageUrl, 'image.jpg') // Put your image url here.
    }

  return (
    <div className="App">
      <h1>AI-ImageGenerator</h1>

      <Label label = {"Generate-image"} setAttribute = {setUserPrompt}/>      
   
      <button className='btn' onClick={generateImg}>Submit</button>
      <div className="img">
        {imageUrl && <img className='image' height = '256px' width= '256px' src={imageUrl} alt='img'/>}
      </div>
      <button className='btn' onClick={downloadImage}>Download</button>
    </div>
  );
}

export default App;
