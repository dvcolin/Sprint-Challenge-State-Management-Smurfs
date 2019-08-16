import React, { useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import {addSmurf} from '../actions'

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1.5rem 0;
`

const StyledInput = styled.input`
    margin: 1.5rem 0;
`
const SubmitButton = styled.button`
    padding: 1rem 2rem;
`

const SmurfForm = props => {

    const [info, setInfo] = useState({
        name: '',
        age: '',
        height: ''
    })

    const handleChanges = e => {
        setInfo({...info, [e.target.name]: e.target.value})
    }


    return (
        <StyledForm>
            <h1>Add a smurf</h1>
            <StyledInput onChange={handleChanges} type='text' name='name' placeholder='Enter name' />
            <StyledInput onChange={handleChanges} type='text' name='age' placeholder='Enter age' />
            <StyledInput onChange={handleChanges} type='text' name='height' placeholder='Enter height' />

            <SubmitButton onClick={e => {
                e.preventDefault();
                props.addSmurf(info)}} type='submit'>Submit</SubmitButton>

            
        </StyledForm>
    )
}


export default connect(null, { addSmurf })(SmurfForm)
