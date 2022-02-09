import React from "react";
// import data from "../memesData"


export default function UserInput() {

    // state object for complete meme
    const [memeImage, setMemeImage] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    });

    // state object for the data from api call
    const [allMemes, setAllMemes] = React.useState([]);

    // every time create meme buttom is pressed an image is chosen from the pool of images
    // and the state object of meme is updated with the new image from the pool 
    function getRandomImage() {
        const randNo = Math.floor(Math.random() * allMemes.length);
        let image = allMemes[randNo].url;
        setMemeImage(prevMeme => ({
            ...prevMeme,
            randomImage: image
        }))
    }

    // this is getting called every time we are changing the input in the input fields
    function handleChange(event) {
        // dereferencing the event.target object
        const { name, value } = event.target;
        setMemeImage(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    React.useEffect(() => {
        console.log("api call");
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    return (
        <div id="user-inputs">
            <div id="user-input-wrapper">
                <input
                    type="text"
                    placeholder="line on top"
                    onChange={handleChange}
                    name="topText"
                    value={memeImage.topText}
                />
                <input
                    type="text"
                    placeholder="line on bottom"
                    onChange={handleChange}
                    name="bottomText"
                    value={memeImage.bottomText}
                />
            </div>
            <button className="button" onClick={getRandomImage}>create meme</button>
            <div id="user-inputs--image-container">
                <img src={memeImage.randomImage} alt="" />
                <h1 className="user-inputs--image-topText">{memeImage.topText}</h1>
                <h1 className="user-inputs--image-bottomText">{memeImage.bottomText}</h1>
            </div>
        </div>
    )
}