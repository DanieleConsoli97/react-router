import { useParams } from "react-router-dom"

const singlePost= ()=> {
    let {id} = useParams ()
    return(
        
        <h1>post numero {id} </h1>
    )
}
export default singlePost