import { useState } from "react";
import data from "../../static.json";

const { bookables } = data;
export default function BookablesList() {

    const group = "Rooms";
    const bookablesInGroup = bookables.filter(b => b.group === group);
    const [bookableIndex, setBookableIndex] = useState(1); 

    function changeBookable(selectedIndex) {
        setBookableIndex(selectedIndex);
        console.log(selectedIndex);
    }

    return (
        <ul className="bookables items-list-nav">
            {bookablesInGroup.map((b, i) => (
                <li key={b.id} className={i === bookableIndex ? "selected" : null}>
                    <button className="btn"
                        onClick={() => changeBookable(i)}
                    > {b.title} </button>
                </li>
            ))}
        </ul>
    );
}