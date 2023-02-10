import { useContext } from "react"
import { styleContext } from "../App"



export function ArenasPage(){

    const {style} = useContext(styleContext);

    return <>
        <h1 style={style}>Arenas in Super Smash Brothers</h1>
        <ul>
            <li>Hyrule Castle : Zelda</li>
            <li>Brinstar : Metroid</li>
            <li>Final Destination : Smash Original</li>
            <li>Pokemon Stadium : Pokemon</li>
        </ul>
    
    </>
}