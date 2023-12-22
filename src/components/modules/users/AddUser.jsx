import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
const AddUser = (props) => {
    const [inputs, setinputs] = useState({ country: "", username: "", age: null, email: "" });
    const handleInputs = (e) => {
        let obj = { ...inputs };
        obj[e.target.name] = e.target.value;
        setinputs(obj)
    }


    return (
        <Modal size="lg" show={props.show} aria-labelledby="contained-modal-title-vcenter" onHide={() => props.setshow(false)} centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add User
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={(e)=>props.adduser(e,inputs)}>
                    <div>
                        <label htmlFor=""> User name </label>
                        <input type="text" className='form-control' onChange={handleInputs} name="username" />
                    </div>
                    <div>
                        <label htmlFor=""> Email </label>
                        <input type="email" className='form-control' onChange={handleInputs} name="email" />
                    </div>
                    <div>
                        <label htmlFor=""> Age </label>
                        <input type="number" className='form-control' onChange={handleInputs} name="age" />
                    </div>
                    <div>
                        <label htmlFor=""> Country </label>
                        <input type="text" className='form-control' onChange={handleInputs} name="country" />
                    </div>
                    <div className="mt-3 d-flex justify-content-end">
                        <button className='btn btn-success btn-sm'>Save</button>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    )
}

export default AddUser
