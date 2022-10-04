import React, {useState} from 'react'


export default function TextForm(props) {

    

    const handleUpClick = () =>{
        // console.log("Uppercase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success")
    }

    const handleClearText = () => {
        let newText1 = ""
        setText(newText1)
        props.showAlert("Text Cleared","success")
    }

    const handleCopyText = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard!","success")
    }

    const handleRemoveExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra spaces","success")
    }
        
    const handleDownClick = () => {
        let newLowerText=text.toLowerCase();
        setText(newLowerText);
        props.showAlert("Converted to lowercase","success")
    }
    const handleOnchange = (event) =>{
        // console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className="container">
        <div className="mb-3"style={{color: props.mode === 'light' ? 'black' : 'White'}}>
            <label htmlFor="myBox" className="form-label mt-3">{props.heading}</label>
            <textarea className="form-control" onChange={handleOnchange} value={text} style={{color: props.mode === 'light' ? 'black' : 'grey'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleDownClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyText}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
        {/* <button className="btn btn-primary">Convert to Lowercase</button> */}
    </div>
    <div className='container' style={{color: props.mode === 'light' ? 'black' : 'White'}}>
        <h2 className='my-3'>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element) => {return element.length !== 0}).length} Words and {text.split(/\s+/).join('').length} Characters</p>
        <p>{0.008*(text.split(/\s+/).filter((element) => {return element.length !== 0}).length)} Minutes read</p>
        <h2>Preview</h2>
        <p className="mb-5">{text.length>0 ? text : "Nothing to preview" }</p>
    </div>
    </>
  )
}
