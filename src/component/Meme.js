import { useState } from 'react';
import { useEffect } from 'react';

export default function Meme() {
  const [meme, setmeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'https://i.imgflip.com/1tl71a.jpg',
  });

  const [allMemes, setallMemes] = useState([]);

  useEffect(() => {
    async function getMemes() {
      const res = await fetch('https://api.imgflip.com/get_memes');
      const data = await res.json();
      setallMemes(data.data.memes);
    }
    getMemes();
    // -----------------
    // fetch('https://api.imgflip.com/get_memes')
    //   .then((res) => res.json())
    //   .then((data) => setallMemes(data));
  }, []);

  let url;
  function getMemeImagae() {
    const randomNUmber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNUmber].url;
    setmeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setmeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }

  return (
    <div className="Meme">
      <input type="text" className="Meme__input" placeholder="Top Text" name="topText" onChange={handleChange} value={meme.topText} />
      <input type="text" className="Meme__input" placeholder="Bottom Text" name="bottomText" onChange={handleChange} value={meme.bottomText} />
      <button className="Meme__btn" onClick={getMemeImagae}>
        Get a new meme image 🖼️
      </button>
      <div className="Meme__container">
        <img src={meme.randomImage} className="Meme__container-img" />
        <div className="Meme__container-text">
          <p>{meme.topText}</p>
          <p>{meme.bottomText}</p>
        </div>
      </div>
    </div>
  );
}

/* 
1. Dalam aplikasi vanilla JS, pada titik mana dalam pengiriman formulir
    proses apakah Anda mengumpulkan semua data dari formulir yang diisi?
Tepat sebelum formulir diserahkan.


2. Dalam aplikasi React, kapan Anda mengumpulkan semua data dari
    formulir yang sudah diisi?
Saat formulir sedang diisi. Semua data disimpan di negara bagian setempat.


3. Atribut mana dalam elemen form (nilai, nama, onChange, dll.)
    harus cocok dengan nama properti yang ditahan untuk input itu?
properti `nama`.


4. Apa perbedaan menyimpan data dari elemen kotak centang?
    vs. elemen bentuk lainnya?
Kotak centang menggunakan properti `checked` untuk menentukan apa yang harus
disimpan dalam keadaan. Elemen formulir lain menggunakan properti `nilai` sebagai gantinya.


5. Bagaimana Anda melihat pengiriman formulir? Bagaimana Anda bisa memicu?
    formulir kirim?
- Dapat melihat pengiriman dengan handler onSubmit pada elemen `form`.
- Dapat memicu pengiriman formulir dengan satu klik tombol.
*/
