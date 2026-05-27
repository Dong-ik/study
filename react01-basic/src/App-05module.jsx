import FrontComp from './components/FrontComp.jsx'
import BackComp from './components/BackComp.jsx'

function App() {
    return (<>
        <h2>React-Event</h2>
        <ol>
            <FrontComp onMyEvent1={() => {
                alert('프론트엔드 클릭됨(부모전달)');
            }} />
            <BackComp onMyEvent2={(msg) => {
                alert(msg);
            }} />
        </ol>
    </>)
}

export default App;