import React from 'react'

function Done({ onDone }) {


    return (
        <div>
            <button onClick={() => onDone()}>DONE</button>
        </div>
    )
}

export default Done
