import React from 'react'
import { connect } from 'react-redux'
import { getSmurfData } from '../actions'
import styled from 'styled-components'

const SmurfListContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Smurf = styled.div`
    width: 200px;
    height: 200px;
    background: lightblue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 1.2rem;
`

const SmurfsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const SmurfList = props => {
    return (
        <SmurfListContainer>
            <button onClick={props.getSmurfData}>Get Smurfs</button>
            <SmurfsContainer>
            {props.smurfs.map(smurf => 
                <Smurf>
                    <h1>{smurf.name}</h1>
                    <p>{smurf.age}</p>
                    <p>{smurf.height}</p>
                </Smurf>
            )}
            </SmurfsContainer>
        </SmurfListContainer>
    )
}

const mapStateToProps = state => {
    return {
        ...state,
        smurfs: state.smurfs
    }
}


export default connect(mapStateToProps, { getSmurfData })(SmurfList)
