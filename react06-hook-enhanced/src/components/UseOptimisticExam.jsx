import { useOptimistic, useState, useRef } from 'react';

async function deliverMessage(message) {
    await new Promise((res) => setTimeout(res, 1000));
    return message;
}

function Thread ({ messages, sendMessage }) {
    const formRef = useRef();

    async function formAction(formData) {
        addOptimisticMessage(formData.get('message'));
        formRef.current.reset();
        await sendMessage(formData);
    }

    const [optimisticMessages, addOptimisticMessage] = useOptimistic(
        messages,
        (state, newMessage) => [
            ...state,
            {
                text : newMessage,
                sending: true
            }
        ]
    );

    return ( <>
        {optimisticMessages.map((message, index) => (
            <div key={index}>
                {message.text}
                {!!message.sending && <small> (sending...)</small>}
            </div>
        ))}
        <form action={formAction} ref={formRef}>
            <input type="text" name="message" />
            <button type="submit">Send</button>
        </form>
    </>);
}

const UseOptimisticExam = () => {
    const [messages, setMessages] = useState([
        { text: "기본 메세지 입니다.", sending: false, key: 1 }
    ]);

    async function sendMessage(formData) {
        const sentMessage = await deliverMessage(formData.get('message'));
        setMessages((messages) => [...messages, { text: sentMessage}]);
    }

    return (
        <div>
            <h2>useOptimistic 사용하기</h2>
            <Thread messages={messages} sendMessage={sendMessage} />
        </div>
    )
};

export default UseOptimisticExam;

