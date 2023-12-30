import { React} from 'react'
import data from "./doctors.json"

function List(props) {
    return (
        <ul>
            {data.map((item) => (
                <li key={item.doctor}>{item.actor}</li>
            ))}
        </ul>
    )
}

export default List