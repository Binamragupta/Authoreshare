import React,{ useState } from 'react'



export default function TextForm(props) {
    const [Text,setText]=useState("")
    const handleUpClick=()=>{
            let newtext=Text.toUpperCase();
            setText(newtext)
            props.showalert("converted to upper case","success")
    }
    const handleLowClick=()=>{
        let newtext=Text.toLowerCase();
        setText(newtext)
        props.showalert("converted to lower case","success")
    }
    const handlecopy=()=>{
      var text=document.getElementById('myBox')
      text.select();
      navigator.clipboard.writeText(text.value)//it writes text value in the clipboard of the one using these from where he can paste it any where
      props.showalert("copied to clipboard","sucess")
    }
    const handleClearClick=()=>{
        let newtext='';
        setText(newtext)
        props.showalert("cleared","success")
    }
    const handleSenClick=()=>{
          // Step 1. Lowercase the String
  let newtext= Text.toLowerCase();
  // Text = "I'm a little tea pot".toLowerCase();
  // Text = "i'm a little tea pot";
  
  // Step 2. Split the String into an array of Strings
  newtext = newtext.split(' ');
  // Text = "i'm a little tea pot".split(' ');
  // Text = ["i'm", "a", "little", "tea", "pot"];
  
  // Step 3. Create the FOR loop
  for (var i = 0; i < newtext.length; i++) {
    newtext[i] = newtext[i].charAt(0).toUpperCase() + newtext[i].slice(1); 
  /* Here Text.length = 5
    1st iteration: Text[0] = Text[0].charAt(0).toUpperCase() + Text[0].slice(1);
                   Text[0] = "i'm".charAt(0).toUpperCase()  + "i'm".slice(1);
                   Text[0] = "I"                            + "'m";
                   Text[0] = "I'm";
    2nd iteration: Text[1] = Text[1].charAt(0).toUpperCase() + Text[1].slice(1);
                   Text[1] = "a".charAt(0).toUpperCase()    + "a".slice(1);
                   Text[1] = "A"                            + "";
                   Text[1] = "A";
    3rd iteration: Text[2] = Text[2].charAt(0).toUpperCase()   + Text[2].slice(1);
                   Text[2] = "little".charAt(0).toUpperCase() + "little".slice(1);
                   Text[2] = "L"                              + "ittle";
                   Text[2] = "Little";
    4th iteration: Text[3] = Text[3].charAt(0).toUpperCase() + Text[3].slice(1);
                   Text[3] = "tea".charAt(0).toUpperCase()  + "tea".slice(1);
                   Text[3] = "T"                            + "ea";
                   Text[3] = "Tea";
    5th iteration: Text[4] = Text[4].charAt(0).toUpperCase() + Text[4].slice(1);
                   Text[4] = "pot".charAt(0).toUpperCase() + "pot".slice(1);
                   Text[4] = "P"                           + "ot";
                   Text[4] = "Pot";                                                         
    End of the FOR Loop*/
     }
  
    // Step 4. Return the output
    setText(newtext.join(' ')) // ["I'm", "A", "Little", "Tea", "Pot"].join(' ') => "I'm A Little Tea Pot"}
    props.showalert("converted to title case","success")
}
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    const handleExtraSpaces=()=>{
        let newtext=Text.split(/[ ]+/)
        setText(newtext.join(" "))
        props.showalert("removed extra spaces","success")
    }
    
  return (
    <>
     <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            {/* <label htmlFor="myBox" className="form-label">Example textarea</label> */}
            {/* onchange is use to bring changes to the value and its important */}
             <textarea className="form-control" value={Text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark'?'#001a40':'white',color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>{/*row for size of textarea */}
        </div>
        {/* disabled is used to disable button under certain condition for ex here the button is disabled if length is equal to zero */}
        <button disabled={Text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick} >Convert to upper case</button>
        <button disabled={Text.length===0}className="btn btn-primary mx-2 my-2" onClick={handleLowClick} >Convert to lower case</button>
        <button disabled={Text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick} >To clear</button>
        <button disabled={Text.length===0} className="btn btn-primary mx-2 my-2" onClick={handlecopy} >To copy</button>
        <button disabled={Text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces} >remove extra spaces</button>
        <button disabled={Text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleSenClick} >Convert to Title case</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{Text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {Text.length} characters</p>
        <p>{0.008 * Text.split(" ").length} is the average time that will be taken to read this </p>
        <h3>Preview</h3>
        <p>{Text.length>0?Text:"ENTER SOMETHING IN THE TEXTBOX TO PREVIEW"}</p>
    </div>
    </>
   
  )
}
