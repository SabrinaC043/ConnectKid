import React, { useState } from "react";
import CREATE_PARENT from "../../utils/apollo/mutations";
import { useMutation } from "@apollo/client";

const ParentSignUp = () => {

    const [ loginForm, setLoginForm ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    // const [createParent, {data, loading, error}] = useMutation(CREATE_PARENT)

    const onChange = (e) => {
        const key = e.target.id
        setLoginForm({...loginForm, [e.target.id]: e.target.value});
    }

    const onSubmit = (e) => {
        // apollo query

        e.preventDefault();
        // createParent({variables: {loginForm}})
        const { loading, error, data } = useMutation(CREATE_PARENT, {variables: {firstName: loginForm.firstName}});
        // console.log(data); 
        
    }


    return (

        <>

        <form className="border m-auto w-50" onSubmit={onSubmit}>
        <div className="form-group">
            {/* <div className="row">/ */}
            <label>First Name: </label>
            {/* </div> */}
            <input id="firstName" type="text" onChange={onChange}></input>
        <div className="form-group">
            <label>Last Name: </label>
            <input id="lastName" type="text" onChange={onChange}></input>
        </div>
        <div className="form-group">
            <label>Email: </label>
            <input id="email" type="text" onChange={onChange}></input>
        </div>
        <div className="form-group">
            <label>Password: </label>
            <input id="password" type="text" onChange={onChange}></input>
        </div>
        <div className="form-group">
            <label>Age: </label>
            <input type="number" maxLength={2} id="age"></input>
        </div>

        </div>

        <input type="submit" onSubmit={onSubmit} />

        </form>

        </>
    )
}

export default ParentSignUp;