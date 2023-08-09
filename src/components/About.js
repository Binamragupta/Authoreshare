import React from 'react'

export default function About(props) {
    // const [myStyle,setMyStyle]=useState({
    //     color : 'black',
    //     backgroundColor : 'white',
    //     text:'dark mode'
    // })
    let myStyle={
        color:props.mode==='dark'?'white':'black',
        backgroundColor:props.mode==='dark'?'rgb(14 72 157)':'white'
    }
  return (
    <div className='container' >
        <h2 className="my-3" style={{color:props.mode==='dark'?'white':'black'}}>About us</h2>
        <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Authoreshare</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                <strong>A website for your texts</strong>.It help user to manipulate their text based on their requirement
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free to users</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                <strong>this website usage is for free.</strong> 
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>browser compatible</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                it is compatible with almost evey browser
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}
