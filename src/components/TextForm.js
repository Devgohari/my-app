import React, {useState} from "react";


export default function TextForm(variable) {
    const [text, setText] = useState("");
    const handleClick=()=>{
        console.log('CLciker'+text);
        let newText = text.toUpperCase()
        setText(newText)
        variable.showAlert("",'danger')
    }
    const handleLowerClick=()=>{
        console.log('CLciker'+text);
        let newText = text.toLowerCase()
        setText(newText)
        variable.showAlert("", 'success')
    }
    const extSpaceRemover=()=>{
        console.log('CLciker'+text);
        let newText = text.replace("  "," success")
        setText(newText)
        variable.showAlert("",'success')
    }
    const HandleonChange=(event)=>{
        console.log('On change');
        setText(event.target.value)
    }

    
  return (
    <>
    <div container>
      <h2 >{variable.heading} </h2>
      <div className="form-floating">
        <textarea value={text}
        style={{backgroundColor:variable.mode==='dark'?'white':'grey'}}
        onChange={HandleonChange}
          className="form-control"
          placeholder="Leave a comment here"
          id="mybox"
          
        ></textarea>
      </div>
      <button className="btn btn-primary my-4 mx-3" onClick={handleClick}
      >Convert To upperCase</button>
      <button className="btn btn-primary my-4 mx-3" onClick={handleLowerClick}
      >Convert To LowerCase</button>
      <button className="btn btn-primary my-4 mx-3" onClick={extSpaceRemover}
      >Remove Extraspaces</button>

    </div>
    <div className="conatiner my-2">
      <h1>Your Text summary</h1>
      <p>{text.split(' ').length} and {text.length} characters</p>
      <p>You will take {text.split(' ').length.toFixed(1)*0.8} seconds time to read this words.</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </> 
  );
}
