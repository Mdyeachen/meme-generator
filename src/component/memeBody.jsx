import { useState, useEffect } from "react";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    image: "https://placehold.co/600x400"
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  const changeMeme = () => {
    if (allMemes.length === 0) return;
    const randomIndex = Math.floor(Math.random() * allMemes.length);
    const newMemeUrl = allMemes[randomIndex].url;
    setMeme((prev) => ({ ...prev, image: newMemeUrl }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeme((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="form w-full max-w-sm py-10 px-4 mx-auto my-5  border rounded-sm">
      <div className="max-w-xl mx-auto flex flex-col gap-4 text-lg font-medium">
        <input
          className="w-full py-2.5 px-4 bg-[#D4C9BE] text-black/80 rounded-xl"
          type="text"
          name="topText"
          placeholder="Top Text"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          className="w-full py-2.5 px-4 bg-[#D4C9BE] text-black/80 rounded-xl"
          type="text"
          name="bottomText"
          placeholder="Bottom Text"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button
          onClick={changeMeme}
          className="w-full py-2.5 px-4 bg-[#D4C9BE] text-black/80 rounded-xl hover:bg-[#c0b5aa] transition"
        >
          Get another Meme Image
        </button>
      </div>

      <div className="max-w-2xl mx-auto mt-10 relative text-center">
        <img
          src={meme.image}
          alt="Meme preview"
          className="w-full rounded-lg shadow-lg"
        />
        <span className="absolute inset-x-0 top-0 py-4 text-4xl uppercase font-black text-white text-center custom-stroke">
          {meme.topText}
        </span>
        <span className="absolute inset-x-0 bottom-0 py-4 text-4xl uppercase font-black text-white text-center custom-stroke">
          {meme.bottomText}
        </span>
      </div>
    </div>
  );
}
