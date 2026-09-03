import { useReducer, useState } from 'react'

const bankReducer = (backState, backAction) => {
    console.log('리듀서호출', backState, backAction);
    switch (backAction.mode) {
        case 'disposit':
            return backState + backAction.amount
        case 'withdraw':
            return backState - backAction.amount
        default:
            return backState
    }
}

const UseReducerExam = () => {
    const [inputMoney, setInputMoney] = useState(0);
    const [balance, bankDispatch] = useReducer(bankReducer, 0);
    return (<>
        <h2>UseReducer 사용하기</h2>
        <p>잔액: {balance}</p>
        <input type="number" value={inputMoney} step={1000} onChange={(e) => {
            setInputMoney(parseInt(e.target.value));
            }
        } />
        <button type='button' onClick={() => {
            bankDispatch({mode: 'disposit', amount: inputMoney});
        }}>입금</button>
        <button type='button' onClick={() => {
            bankDispatch({mode: 'withdraw', amount: inputMoney});
        }}>출금</button>
    </>);
}

export default UseReducerExam;