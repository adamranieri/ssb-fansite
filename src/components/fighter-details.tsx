
import {useParams} from 'react-router-dom'

export function FighterDetails(){

    const params = useParams();// returns the paramters in the url
    const name = params.name;

    return <>
        <h1>Details Page</h1>
        <h1>Information for {name}</h1>
    </>
}