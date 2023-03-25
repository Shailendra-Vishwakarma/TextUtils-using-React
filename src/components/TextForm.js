import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick=()=>{
    // console.log("upper case button clicked")
    let newText=text.toUpperCase()
    setText(newText)
    props.showAlert("Converted to Uppercase !","success");
  }
  const handleLowerClick=()=>{
    console.log("upper case button clicked")
    let newText=text.toLowerCase()
    setText(newText)
    props.showAlert(" Converted to Lowercase !","success");
  }
  const handleOnChange=(event)=>{
    console.log("handle on change")
    setText(event.target.value);
  }
  const handleClearTextClick=()=>{
    setText("")
    props.showAlert(" Text Cleared !","success");
  }
  const handleCopy=()=>{
    let text=document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert(" Copied to clipboard !","success")
  }

  const handleRemoveExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert(" Extra spaces removed !","success")
  }
  const [text, setText] = useState("");

  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'dark'}}>
      <h1>{props.heading}</h1 >
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
          style= {{backgroundColor:props.mode==='dark'?'grey':'white',
          color:props.mode==='dark'?'white':'black'}}
        ></textarea>
      </div>
      
      <button type="button" className="btn btn-primary mx-1" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleLowerClick}>
        Convert to LowerCase
      </button>

      <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleClearTextClick}>
        Clear Text
      </button>

      <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
        Copy to Clipboard
      </button>
      <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleRemoveExtraSpaces}>
        Remove Extra Spaces
      </button>

      
    </div>
    <div className="container my-3 " style={{color:props.mode==='dark'?'white':'black'}} >
      <h2>Your Text Summary</h2>
      <p>{text.length} Characters</p>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words</p>
      <p>{0.008*text.split(" ").length} Minutes Read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter something on above text Box to preview."}</p>
    </div>
    </>
  );
}
