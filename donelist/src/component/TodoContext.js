import React, { useReducer, createContext, useContext, useRef } from "react";

const initialTodos = [
    {
        id: 1,
        text: '프로젝트 생성하기',
        done: true,
    },
    {
        id: 2,
        text: '컴포넌트 스타일링하기',
        done: true,
    },
    {
        id: 3,
        text: 'context 만들기',
        done: false,
    },
    {
        id: 4,
        text: '가능구현하기',
        done: false,
    }
]

/*
3가지의 기능을 구현할건데
    creat
    toggle
    remove로 이루어질것이다
*/

function todoReducer(state, action) {
    switch (action.type) {
        case 'CREATE':
            return state.concat(action.todo) // 상태를 추가해줌 concat으로
        case 'TOGGLE':
            return state.map(
                todo => todo.id === action.id ? { ...todo, done: !todo.done } : todo //액션을 했는데 액션시 발생한 id가 todo에 있는 id랑 같다면? bool값을 반전, 아니면 그대로
            )
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id)
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

// 각 자원을 만든다.
const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext(); // 랜더링이 아니라 바로 값이 바뀔라고 하니깐 Ref를 이용한다

export function TodoProvider({ children }) {
    const [state, dispatch] = useReducer(todoReducer, initialTodos) // 리듀서는 todoReducer를 넣어주고 초기 상태는 initalTodos이다.
    const nextId = useRef(5)
    return <TodoStateContext.Provider value={state}>
        <TodoDispatchContext.Provider value={dispatch}>
            <TodoNextIdContext.Provider value={nextId}>
                {children}
            </TodoNextIdContext.Provider>
        </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
}

// 이렇게 외부로 모듈로 만들면, 언제든지 import로 이용할수있게 된다.
export function useTodoState() {
    const context = useContext(TodoStateContext); // 에러처리
    if (!context) {
        throw new Error(`TodoPro`)
    }
    return context;
}


export function useTodoDispatch() {
    const context = useContext(TodoDispatchContext);
    if (!context) {
        throw new Error(`TodoPro`)
    }
    return context;
}

export function useTodoNextId() {
    const context = useContext(TodoNextIdContext);
    if (!context) {
        throw new Error(`TodoPro`)
    }
    return context;
}