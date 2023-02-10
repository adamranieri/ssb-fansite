import { useContext } from "react";
import { Link } from "react-router-dom";
import { styleContext } from "../App";


export function FightersPage(){

    const {style} = useContext(styleContext);//dependency injection


    return <>
        <h1 style={style}>Overview of Smash fighters!!!</h1>
        <ul>
            <li>Mario <Link to="/details/Mario">More Info</Link></li>
            <li>Zelda <Link to="/details/Zelda">More Info</Link></li>
            <li>Marth <Link to="/details/Marth">More Info</Link></li>
            <li>Pikachu <Link to="/details/Pikachu">More Info</Link></li>
            <li>Kirby! <Link to="/details/Kirby">More Info</Link></li>
        </ul>
    </>
}