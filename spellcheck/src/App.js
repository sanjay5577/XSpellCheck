import { useState } from 'react';
import './App.css';

// Define a custom dictionary of words and their corrections
const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

function App() {
const[inputText , setInputText] = useState('');
const[suggestedText, setSuggestedText] = useState('');

const handleInputChange=(e)=>{
  const text =e.target.value;
  setInputText(text);

  const words = text.split(" ");


  const correctedwords = words.map((word)=>{
    const correctword = customDictionary[word.toLowerCase()];
    return correctword || word;
  })

  const firstcorrectedword = correctedwords.find((word, index)=>{
      return  word!==words[index];
  })

  setSuggestedText(firstcorrectedword) 

}

  return (
    <div className="App">
      <h1>Spell Check and Auto-Correction</h1>
        <textarea
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter text..."
          rows={5}
          cols={40}
        />
        {suggestedText && (
          <p>
            Did you mean: <strong>{suggestedText}</strong>?
          </p>
        )}
    </div>
  );
}

export default App;
