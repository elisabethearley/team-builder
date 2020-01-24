import React, { useState } from 'react';
 
const Form = props => {
    console.log('props', props);

    const [member, setMember] = useState({ 
        name: '',  
        role: '',
        email: ''
    });
 
    const changeHandler = event => {
        setMember({...member, 
            [event.target.name] : event.target.value
        });
    };
 
    const submitForm = event => {
        event.preventDefault();
        props.addNewMember(member);
        setMember({
            name: '', 
            role: '', 
            email: '' })
    };
 
    return (
        <form onSubmit={submitForm}>
            <p>
                <label htmlFor='name'>Name </label>
                <input 
                    id='name'
                    name='name' 
                    onChange={changeHandler} 
                    value={member.name} 
                />
            </p>
            <p>
                <label htmlFor='role'>Role </label>
                <input 
                    id='role'
                    name='role' 
                    onChange={changeHandler} 
                    value={member.role} 
                />
            </p>
            <p>
                <label htmlFor='email'>Email </label>
                <input 
                    id='email'
                    name='email' 
                    onChange={changeHandler} 
                    value={member.email} 
                />
            </p>
            <button type='submit'>Submit</button>
        </form>
    );
};
 
export default Form;
