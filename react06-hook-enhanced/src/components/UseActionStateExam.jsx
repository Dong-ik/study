import { useActionState } from 'react'

async function authLogin(prevState, formData) {
    console.log('prevState', prevState);
    const userid = formData.get('userid');
    const userpw = formData.get('userpw');

    await new Promise(resolve => {
        setTimeout(resolve, 1000);
    });

    if (userid === "nakja" && userpw === "1234") {
        return "login success";
    }
    else {
        return "login failed";
    }
}

const UseActionStateExam = () => {
    const [ message, formAction, isPending ] = useActionState(authLogin, null);
    return (<>
        <h2>useActionState 사용하기</h2>
        <form action={formAction}>
            아이디 : <input type="text" name="userid" /><br />
            비밀번호 : <input type="text" name="userpw" /><br />
            <button type="submit">로그인</button>
            {isPending ? "Loading..." : message}
        </form>
    </>);
};

export default UseActionStateExam;