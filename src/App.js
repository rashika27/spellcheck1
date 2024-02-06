
import { useState } from "react";


const customDictionary = {
  teh: "the",
  fot: "for",
  wrok: "work",
  exampl: "example",
   

}

export default function App() {
  const [text, setText] = useState("");
  const [suggestedText, setSuggestedText] = useState("");
  const handleInputChange = (e) => {
    const inputText = e.target.value;
    setText(inputText);
    const words = inputText.split(" ");
    const correctedWords = words.map((word) => {
      const correctedWord = customDictionary[word.toLowerCase()];
      return correctedWord || word;
    });
    const correctedText = correctedWords.join(" ");
  
    const firstCorrection = correctedWords.find((word, idx) => word !== words[idx]);
    setSuggestedText(firstCorrection || "");
  };
  
  
  return (
    <div> 
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        value={text}
        onChange={handleInputChange} placeholder= "Enter text..."
        rows={5}
        cols={40}/>

        {
          suggestedText && (
            <p> Did you mean: <strong>{suggestedText}?</strong> </p>
          )
        }
    </div>
  );
}
