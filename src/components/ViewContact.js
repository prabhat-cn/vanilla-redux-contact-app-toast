import React from 'react'
import {Link, useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'

const ViewContact = () => {
    const { id } = useParams( )
    const allContacts = useSelector((contactState) => contactState)
    const currentContact = allContacts.find((contact) => contact.id === parseInt(id))
    console.log('currentContact', currentContact);
    return (
        <div className="container">
            {
                currentContact ? (
                    <>
                        <h1 className="display-4 my-5 text-center">View Contact id-{id}</h1>
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <Link to='/add' className="btn btn-outline-dark ml-auto">Add Contact</Link>
                            </div>
                            <div className="col-md-6 shadow mx-auto p-5">
                                <form>
                                    <div className="form-group">
                                        <input type="text" value={currentContact.name} className = "form-control" placeholder="Name" disabled />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className = "form-control" value={currentContact.email} placeholder="Email" disabled />
                                    </div>
                                    <div className="form-group">
                                        <input type="number" className = "form-control" value={currentContact.phone} placeholder="Phone" disabled />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </>

                ) : (
                    <h1 className="display-4 my-5 text-center">This Contact with id-{id} is not exists!</h1>
                )
            }
        </div>
    )
}

export default ViewContact
