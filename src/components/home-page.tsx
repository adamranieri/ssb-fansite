import { useState } from "react"



export function HomePage(){

    const [name,setName] = useState("");

    function saveToLocalStorage(){
        localStorage.setItem("username",name);// will save the value to localstorage
    }

    return <>
        <h1>The Ultimate fan website for Super smash bros!!!</h1>
        <p>This is a website dedicated to Super Smash Bros</p>
        <input type="text" onChange={e => setName(e.target.value)} />
        <button onClick={saveToLocalStorage}>Remember Me</button>
    
    </>
}