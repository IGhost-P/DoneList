import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState("");

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, [])

    const onSubmit = useCallback(
        e => {
            // 입력값 없을때 처리한다.
            if (value === "") { alert("입력해주세요"); e.preventDefault(); }
            else {
                onInsert(value);
                setValue("");
                e.preventDefault();
            }
        },
        [onInsert, value]
    )
    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input placeholder="할 일을 입력하세요"
                value={value}
                onChange={onChange} />
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    );
};

export default TodoInsert;