import React from 'react'
import { connect } from 'react-redux'
import { getSmurfData } from '../actions'

const SmurfList = props => {
    return (
        <div>
            {props.smurfs.map(smurf => 
                <p></p>
            )}
            <button onClick={props.getSmurfData}>Get Smurfs</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        ...state,
        smurfs: state.smurfs
    }
}


export default connect(mapStateToProps, { getSmurfData })(SmurfList)
