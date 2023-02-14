
import { useContext, useEffect, useState } from "react"
import {Link} from "react-router-dom"
import { styleContext } from "../App"

export function NavBar(){
    
    const {setGlobalStyle} = useContext(styleContext)
    const [name,setName] = useState("")

    useEffect(()=>{
        setName(localStorage.getItem("username")?? "No Name Set")
    },[]);// executes when the component loads the first time
    // DO NOT OVERLY RELY ON LOCAL STORAGE. DO NOT USE AS A SUBSTITUE FOR STATE MANAGEMENT IN REACT
    // using local storage to intitilize values in a redux store is a very common usecase

    return <>
        <Link to="/">Home</Link>
        <Link to="/fighters">Fighters</Link>
        <Link to="/arenas">Arenas</Link>
        <button onClick={()=>setGlobalStyle({color:"blue"})}>Make Blue</button>
        <p>Welcome {name}</p>
    </>
}