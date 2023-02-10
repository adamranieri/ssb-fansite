import { useContext } from "react";
import { Link } from "react-router-dom";
import { styleContext } from "../App";


export function FightersPage(){

    const {style} = useContext(styleContext);//dependency injection


    return <>
        <h1 style={style}>Overview of Smash fighters!!!</h1>
        <ul>
            <li>Mario <Link to="/details/Mario">More Info</Link> <img src="https://upload.wikimedia.org/wikipedia/en/a/a9/MarioNSMBUDeluxe.png"/></li>
            <li>Zelda <Link to="/details/Zelda">More Info</Link> <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6457/6457450_sd.jpg;maxHeight=640;maxWidth=550" alt="" /></li>
            <li>Marth <Link to="/details/Marth">More Info</Link></li>
            <li>Pikachu <Link to="/details/Pikachu">More Info</Link></li>
            <li>Kirby! <Link to="/details/Kirby">More Info</Link></li>
        </ul>
    </>
}