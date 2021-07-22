import React, { useState } from 'react'

function Loding() {
    const [list, listState] = useState([

        { id: 1, text: '시발' }
    ]);

    const [inputText, setinputText] = useState('');
    const [nextId, setNextId] = useState(2);
    const onChange = e => setinputText(e.target.value);
    console.log(inputText);
    console.log(nextId);
    const { id, text } = list;
    const onClick = () => {
        const nextList = [{
            ...list,
            id: nextId,
            text: inputText
        }]
        listState(nextList)
        setinputText('')
        console.log(list);
        console.log(nextList);

    }
    const doneList = list.map(done => <li key={done.id}>{done.text}</li>)


    return (
        <div>

            입력칸입니다<input
                value={inputText}
                placeholder="일정을 입력하세요"
                onChange={onChange}
            />
            <button onClick={onClick}>추가</button>
            <ul>{doneList}</ul>
        </div>
    )
}

export default Loding
