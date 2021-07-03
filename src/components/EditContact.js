import React, {useState, useEffect} from 'react'
import {Link, useParams, useHistory} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { toast } from 'react-toastify'

const EditContact = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const { id } = useParams( )
    const allContacts = useSelector((contactState) => contactState)
    const currentContact = allContacts.find((contact) => contact.id === parseInt(id))

    // action dispatch here
    const dispatch = useDispatch()
    const history = useHistory()



    const handleSubmit = (e) => {
        e.preventDefault()
        if( !name || !email || !phone ){
            return toast.warning('Please fill all fields!')

        }

        // if email stored in redux "contact.email" page => email
        const checkEmail = allContacts.find((contact) => contact.email === email)
        console.log('checkEmail', checkEmail);
        // because phone is an integer or string
        const checkPhone = allContacts.find((contact) => contact.phone === parseInt(phone) || contact.phone === phone)

        if(checkEmail){
            return toast.error('This Email already exists!')
        }
        if(checkPhone){
            return toast.error('This number already exists!')
        }

        
        // edit operation start
        const editData = {
            // take last data from redux data id
            id: parseInt(id),
            name,
            email,
            phone,
        }
        console.log('data', editData);
        dispatch({type: 'UPDATE_CONTACT', payload: editData})
        toast.success('Contact edited successfully!')
        history.push('/')
        // edit operation end
    }


    useEffect(() => {
        if(currentContact) {
            setName(currentContact.name);
            setEmail(currentContact.email);
            setPhone(currentContact.phone);
        }

    }, [currentContact])
    return (
        <div className="container">
            {
                currentContact ? (
                    <>
                        <h1 className="display-4 my-5 text-center">Edit Contact{id}</h1>
                        <div className="row">
                            <div className="col-md-6 shadow mx-auto p-5">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <input type="text" name="name" value={name} className = "form-control" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" name="email" className = "form-control" value={email} placeholder="Email" onChange= {(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <input type="number" name="phone" className = "form-control" value={phone} placeholder="Phone" onChange= {(e) => setPhone(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" className = "btn btn-dark" value="Update Contact" />

                                        <Link to='/' className = "btn btn-danger ml-3">Cancel</Link>
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

export default EditContact


