import React, { useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import {addSmurf} from '../actions'
import { Form, Field, withFormik } from 'formik'

const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1.5rem 0;
`

const StyledInput = styled(Field)`
    margin: 1.5rem 0;
`
const SubmitButton = styled.button`
    padding: 1rem 2rem;
`

const SmurfForm = props => {
    return (
        <StyledForm>
            <h1>Add a smurf</h1>
            <StyledInput type='text' name='name' placeholder='Enter name' />
            <StyledInput type='text' name='age' placeholder='Enter age' />
            <StyledInput type='text' name='height' placeholder='Enter height' />

            <SubmitButton type='submit'>Submit</SubmitButton>

            
        </StyledForm>
    )
}


const FormikForm = withFormik({
    mapPropsToValues(values) {
        return {
            name: values.name || '',
            age: values.age || '',
            height: values.height || ''
        };
    },

    handleSubmit(values, { props, resetForm }) {
        props.addSmurf(values);
        resetForm();
    }
})(SmurfForm)


export default connect(null, { addSmurf })(FormikForm)
