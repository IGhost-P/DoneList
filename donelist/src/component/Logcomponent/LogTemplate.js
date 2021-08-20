import React from 'react'
import './LogTemplate.scss'
import LogHeader from './LogHeader'
import LogCalender from './LogCalender'
function LogTemplate() {
    return (
        <div className="log" >
            <LogHeader />
            <LogCalender />
        </div>

    )
}

export default LogTemplate
