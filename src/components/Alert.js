import React from 'react'

function Alert(variable) {
    // const capitali= (word)=>{
    //     const lower = word.toLowerCase();
    //     return lower.charAt(0).toLowerCase()+lower.slice(1)
    // }
    const myf= (word)=>{
        if (word==='success') {
            word = word.slice(1)
            word= 'S'+ word
            return word
        }
        else{
            word =word.slice(1)
            word ='Failure'
            return word
        }
    }
    return (
        variable.alert &&
        <div>
            <div class={`alert alert-${variable.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{myf(variable.alert.type)} </strong>{variable.alert.msg}
            </div>
        </div>
    )
}

export default Alert
