import { useState } from "react";
import data from "../../static.json";

const { bookables } = data;
export default function BookablesList() {

    const [group, setGroup] = useState("Rooms");
    const bookablesInGroup = bookables.filter(b => b.group === group);
    const [bookableIndex, setBookableIndex] = useState(0);

    const groups = [...new Set(bookables.map(b => b.group))];

    function changeBookable(selectedIndex) {
        setBookableIndex(selectedIndex);
        console.log(bookableIndex);
    }

    function nextBookable() {
        setBookableIndex(i => {
            console.log('i ' + i);
            console.log('bookablesInGroup.length ' + bookablesInGroup.length)
            let idxx = (i + 1) % bookablesInGroup.length;
            console.log('idx ' + idxx);
            return idxx;
        });
    }


    return (
        <div>
            <select value={group} onChange={(e) => setGroup(e.target.value)} >
                {
                    // groups.map(g => <option value={g} key={g}>{g}</option>)
                    bookables.map(g => <option value={g.group} key={g.id}>{g.group}</option>)
                }
            </select>

            <ul className="bookables items-list-nav">
                {bookablesInGroup.map((b, i) => (
                    <li key={b.id} className={i === bookableIndex ? "selected" : null}>
                        <button className="btn"
                            onClick={() => changeBookable(i)}
                        >
                            {b.title}
                        </button>
                    </li>
                ))}
            </ul>


            <button className="btn" autoFocus onClick={nextBookable}>
                Next
            </button>


        </div>

    );

}