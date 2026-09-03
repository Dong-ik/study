import {Routes, Route} from 'react-router-dom'
import TopNavi from './components/ToNavi.jsx'
import UseReducerExam from './components/UseReducerExam.jsx'
//import UseContextExam from './components/UseContextExam.jsx'

function App() {
  
  return (
    <>
      <TopNavi />
      <Routes>
        <Route path="/" element={<UseReducerExam />} />
        <Route path="/use-reducer" element={<UseReducerExam />} />
        {/* <Route path="/useContext" element={<UseContextExam />} /> */}
      </Routes>
    </>
  )
}

export default App
