import React from 'react'
//iin bootstrap there are 4 type of alert template success warning danger and ... as we put type propert as js and keep it in class so that particular class will be called from bootstrap ex if succes is type than succes will be called which has green back ground
function Alert(props) {
    const capitalize=(word)=>{
        const lower = word.toLowerCase()//to convert the wholw string into lowecase
        return lower.charAt(0).toUpperCase() +lower.slice(1); //this return lower 1st char convert it to capital and then using conacatinate operator jp\oins substring from index 1 to length,thus returning a string with its frst letter capital
    }
  return (
    // we use props.alert && as we initially pass null value which will show error so by doing this as initial value is null due to and property entirety of this alert program will not be executed and will only be executed if program is anything else but null
    <div style={{height:'50px'}}>   
    { props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}</div>}
    </div>
  )
}

export default Alert
