import memeData from './memeData';
import { useState } from 'react';

export default function Meme() {
  const [meme, setmeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'https://i.imgflip.com/1tl71a.jpg',
  });

  const [allMemeImages, setallMemeImages] = useState(memeData);

  let url;
  function getMemeImagae() {
    const memesArr = allMemeImages.data.memes;
    const randomNUmber = Math.floor(Math.random() * memesArr.length);
    const url = memesArr[randomNUmber].url;
    setmeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  
  const [formData, setFormData] = useState({ topText: '', bottomText: '' });
  function handleChange(event) {
    console.log(formData)
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <div className="Meme">
      <input type="text" className="Meme__input" placeholder="Top Text" name="topText" onChange={handleChange} />
      <input type="text" className="Meme__input" placeholder="Bottom Text" name="bottomText" onChange={handleChange} />
      <button className="Meme__btn" onClick={getMemeImagae}>
        Get a new meme image 🖼️
      </button>
      <div className="Meme__container">
        <img src={meme.randomImage} className="Meme__container-img" />
        <div className="Meme__container-text">
          <p>{formData.topText}</p>
          <p>{formData.bottomText}</p>
        </div>
      </div>
    </div>
  );
}
