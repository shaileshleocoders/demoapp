import React, { useState } from 'react'

const User = () => {
    const [name, setname] = useState("");
    const [surname, setsurname] = useState("");
    const [count, setcount] = useState(0);
    const [value, setvalue] = useState(null);

    const changeName = () => {
        setname("tejas")
        setsurname("lilhare")
    }
    return (
        <div>
            {/* <h1>{`${name} ${surname}`}</h1>
            <button onClick={changeName}>change Name</button> */}
            <input type="number" onChange={(e) => setvalue(+e.target.value)} value={value} />
            <div className="btn btn-sm btn-primary" onClick={() => {
                setcount(0)
                setvalue(0)
            }}>reset</div>

            <center>
                <div className="btn btn-sm btn-primary" onClick={() => setcount(count + value)}>+</div>
                {count}
                <div className="btn btn-sm btn-danger" onClick={() => setcount(count - value)}>-</div>
            </center>
        </div>
    )
}

export default User
