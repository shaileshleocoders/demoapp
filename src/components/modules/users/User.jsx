import React, { useState } from 'react'
import { users } from '../../../user';
import AddUser from './AddUser';

const User = () => {
    const [name, setname] = useState("");
    const [surname, setsurname] = useState("");
    const [count, setcount] = useState(0);
    const [value, setvalue] = useState(null);
    const [userData, setuserData] = useState(users);
    const [show, setshow] = useState(false);

    const changeName = () => {
        setname("tejas")
        setsurname("lilhare")
    }

    const handleDelete = (id, index) => {
        let arr = [...userData];
        const newarr = arr.filter((user) => user.id !== id)
        console.log(newarr)
        setuserData(newarr);

        // arr.splice(index, 1);
        // setuserData(arr);

        // const obj = arr.find((user) => user.id == id);
        // const i = arr.indexOf(obj)
        // console.log(i)
        // arr.splice(i, 1);
        // setuserData(arr);
    }


    const adduser = (e, inputs) => {
        e.preventDefault();
        console.log(inputs)
        const newuserdata = [...userData, { ...inputs, id:userData[userData.length-1].id+1  }];
        setuserData(newuserdata)
        setshow(false)
    }

    return (
        <div className='container'>
            {/* <h1>{`${name} ${surname}`}</h1>
            <button onClick={changeName}>change Name</button> */}
            {/* <input type="number" onChange={(e) => setvalue(+e.target.value)} value={value} />
            <div className="btn btn-sm btn-primary" onClick={() => {
                setcount(0)
                setvalue(0)
            }}>reset</div>

            <center>
                <div className="btn btn-sm btn-primary" onClick={() => setcount(count + value)}>+</div>
                {count}
                <div className="btn btn-sm btn-danger" onClick={() => setcount(count - value)}>-</div>
            </center> */}
            <button className='btn btn-sm btn-primary' onClick={() => setshow(true)}>Add User</button>
            {userData.length > 0 ?
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Age</th>
                            <th scope="col">Country</th>
                        </tr>
                    </thead>
                    <tbody>

                        {userData.map((user, index) => {
                            return (
                                <tr key={user.id}>
                                    <th scope="row">{user.id}</th>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                    <td>{user.country}</td>
                                    <td><button className='btn btn-sm btn-danger' onClick={() => handleDelete(user.id, index)}>Delete</button></td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </table> :
                <h1 className='text-center'>There is no data found</h1>
            }
            <AddUser show={show} setshow={setshow} adduser={adduser} />
        </div>
    )
}

export default User
