import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Link, useHistory} from 'react-router-dom'
import { toast } from 'react-toastify'

const AddContact = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    
    const allContacts = useSelector((contactsState) => contactsState)
    // action dispatch here
    const dispatch = useDispatch()
    const history = useHistory()

    const handleSubmit =(e) => {
        e.preventDefault()

        if(!name || !email || !phone){
            return toast.warning('Please fill all fields!')
        }

        // if email stored in redux "contact.email" page => email
        const checkEmail = allContacts.find((contact) => contact.email === email && email)
        // because phone is an integer
        const checkPhone = allContacts.find((contact) => contact.phone === parseInt(phone) && phone)


        if(checkEmail){
            return toast.error('This Email already exists!')
        }
        if(checkPhone){
            return toast.error('This number already exists!')
        }

        // add operation start
        const addData = {
            // take last data from redux data id
            id: allContacts[allContacts.length - 1].id + 1,
            name,
            email,
            phone,
        }
        console.log('data', addData);
        dispatch({type: 'ADD_CONTACT', payload: addData})
        toast.success('Contact added successfully!')
        history.push('/')
        // add operation end
    }

    return (
        <div className="container">
            <h1 className="display-4 my-5 text-center">Add Contact</h1>
            <div className="row">
                <div className="col-md-6 shadow mx-auto p-5">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" name="name" value={name} className = "form-control" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="email" name="email" value={email} className = "form-control" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="number" name="phone" value={phone} className = "form-control" placeholder="Phone" onChange={(e) => setPhone(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="submit" className = "btn btn-block btn-dark" placeholder="Add Contact" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddContact
