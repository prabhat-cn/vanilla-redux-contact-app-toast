import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import Avatar from 'react-avatar'
import { toast } from 'react-toastify'

const Home = () => {
    const allContacts = useSelector((contactState) => contactState)
    // action dispatch
    const dispatch = useDispatch()

    const deleteContact = (id) => {
        // action dispatch
        dispatch({type: "DELETE_CONTACT", payload: id})
        toast.success('Contact deleted sucessfully!')
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-right">
                    <Link to='/add' className="btn btn-outline-dark my-5 ml-auto">Add Contact</Link>
                </div>
                <div className="col-md-10 mx-auto">
                    <h1>Welcome To React Contact App</h1>
                    <>
                        <table className="table table-hover">
                            <thead className="text-white bg-dark text-left">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allContacts && allContacts.map((contact, index) => (
                                        <tr key={contact.id}>
                                            <td>{index + 1}</td>
                                            <td className="text-left">
                                            <Avatar name={contact.name} value={contact.name} size="50" round={true} />&nbsp;
                                            {contact.name}</td>
                                            <td>{contact.email}</td>
                                            <td>{contact.phone}</td>
                                            <td><Link to={`/view/${contact.id}`} className="btn btn-small btn-warning mr-2">View</Link>
                                            <Link to={`/edit/${contact.id}`} className="btn btn-small btn-primary mr-2">Edit</Link>
                                            <button type="button" onClick={() => deleteContact(contact.id)} className="btn btn-small btn-danger">Delete</button></td>
                                        </tr>
                                    ))  
                                }
                            </tbody>
                        </table>
                    </>
                    
                </div>
            </div>
        </div>
    )
}

export default Home
