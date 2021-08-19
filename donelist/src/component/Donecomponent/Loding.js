import React, { useReducer } from 'react'


const reducuer = (state, action) => {
    switch (action.type) {
        case "ONCHANGE":
            return {
                ...state,
                [action.name]: action.value
            }
        case "ONClICK":
            return {

            }
        default:
            return state;
    }
}

function Loding() {


    const [state, dispatch] = useReducer(reducuer, {
        name: '',
        nickName: ''
    });
    const { name, nickName } = state


    return (
        <div>
            <div>
                <input
                    name="name"
                    value={name}
                    onChange={() => dispatch({ type: "ONCHANGE" })}
                />
                <input
                    name="nickName"
                    value={nickName}
                    onChange={() => dispatch({ type: "ONCHANGE" })}
                />
            </div>
            <div>
                <b>이름 :</b> {name}
            </div>
            <div>
                <b>닉네임 : </b> {nickName}
            </div>
        </div>
    )
}

export default Loding
