
import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log('Uppercase was clicked')
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = () => {
      console.log('lowercase was clicked')
      let newText = text.toLowerCase();
      setText(newText)
  }
  const handleClearClick = () => {
    console.log('lowercase was clicked')
    let newText = "";
    setText(newText)
}
const handleExtraSpaces = () =>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
}
const handleCopy=()=>{
  var text = document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
}
const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
}
const handleinverseclick = () => {
  console.log("inverse click is triggered");
  let newtext = "";
  for (let i = text.length - 1; i >= 0; i--) {
    newtext += text[i];
  }
  setText(newtext);
}; 
    const handleOnChange = (e) => {
        console.log('OnChange')
        setText(e.target.value)
    }
    const [text, setText] = useState('Enter your text');
  return (
        <>
  <div className="mb-3 container my-3" style={{color:props.mode==='light'?'white':'#515355'}}>
    <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>{props.heading}</h1>
    <textarea
      className={`form-control `}
      style={{backgroundColor:props.mode==='dark'?'#515355':'white',color:props.mode==='dark'?'white':'#515355'}}
      id="myBox"
      value= {text}
      onChange={handleOnChange}
      rows={8}
    />
    <button className='btn btn-primary my-2 mx-2' onClick={handleUpClick}>Convert to uppercase</button>
    <button className='btn btn-primary my-2 mx-2' onClick={handleLoClick}>Convert to lowercase</button>
    <button className='btn btn-danger my-2 mx-2' onClick={handleClearClick}>Clear Text</button>
    <button type="submit" onClick={speak} className="btn btn-success mx-2 my-2">Speak</button>
    <button className='btn btn-warning my-2 mx-2' onClick={handleinverseclick}>inverse click</button>
    <button className='btn btn-warning my-2 mx-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>



  </div>

  <div className="container my-2" style={{color:props.mode==='dark'?'white':'#515355'}}>
    <h1>Your Text Summary</h1>
    <p>{text.split(" ").length} Words and {text.length} characters</p>
    <p> {text.split(" ").length * 0.008} Minutes read </p>
    <h3>Preview</h3>
    <p>{text}</p>
  </div>
</>
  );
}