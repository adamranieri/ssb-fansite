
import { useContext } from "react"
import {Link} from "react-router-dom"
import { styleContext } from "../App"

export function NavBar(){
    
    const {setGlobalStyle} = useContext(styleContext)

    return <>
        <Link to="/">Home</Link>
        <Link to="/fighters">Fighters</Link>
        <Link to="/arenas">Arenas</Link>
        <button onClick={()=>setGlobalStyle({color:"blue"})}>Make Blue</button>
    </>
}