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
    }
}

function Loding() {


    const [state, dispatch] = useReducer(reducuer, {
        name: '',
        nickName: ''
    });
    const { name, nickName } = state
    const onClick = e => {
        dispatch(e.target);
    }

    return (
        <div>
            <div>
                <input
                    name="name"
                    value={name}
                    onChange={onClick}
                />
                <input
                    name="nickName"
                    value={nickName}
                    onChange={onClick}
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
