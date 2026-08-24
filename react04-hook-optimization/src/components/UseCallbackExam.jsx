import { useState, useEffect } from "react";
//import { useCallback } from "react";


const DivBox =({ fnBoxStyle, numberVar }) => {
    const [ myStyle, setMystyle ] = useState({});

    useEffect(() => {
        console.log('박스 스타일 변경');
        setMystyle(fnBoxStyle());
    }, [fnBoxStyle]);

    return (
        <div style={myStyle}>
            {numberVar}
        </div>
    );
}

const UseCallbackExam = () => {
    const [boxSize, setBoxSize] = useState(100);
    const [boxColor, setBoxColor] = useState(0);
    const [number, setNumber] = useState(0);
    const colorArray = ['red', 'green', 'blue'];

    const fnBoxStyle = () => {
        return {
            backgroundColor: `${colorArray[boxColor]}`,
            width: `${boxSize}px`,
            height: `${boxSize}px`,
            textAlign: 'center',
            lineHeight: `${boxSize}px`
        }
    }

    //const fnBoxStyle = useCallback(() => {
    //    return {
    //        backgroundColor: `${colorArray[boxColor]}`,
    //        width: `${boxSize}px`,
    //        height: `${boxSize}px`,
    //        textAlign: 'center',
    //        lineHeight: `${boxSize}px`
    //    }
    //}, [boxSize, boxColor]);

    return (<>
        <h2>UseCallback 사용하기</h2>
        <button onClick={() => setBoxSize(boxSize + 10)}>크기 증가</button>
        <button onClick={() => setBoxColor((boxColor + 1) % 3)}>색상 변경</button>
        <button onClick={() => setNumber(number + 1)}>숫자 변경</button>
        <DivBox fnBoxStyle={fnBoxStyle} numberVar={number} />
    </>);
}

export default UseCallbackExam;