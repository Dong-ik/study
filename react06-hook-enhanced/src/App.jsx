import { Routes, Route } from 'react-router-dom'
import TopNavi from './components/TopNavi'
import UseOptimisticExam from './components/UseOptimisticExam'
//import UseActionStateExam from './components/UseActionStateExam'
//import UseFromStatusExam from './components/UseFromStatusExam'

function App() {
  return (
    <>
      <TopNavi />
      <Routes>
        <Route path="/" element={<UseOptimisticExam />} />
        <Route path="/use-optimistic" element={<UseOptimisticExam />} />
        {/* <Route path="/use-action-state" element={<UseActionStateExam />} /> */}
        {/* <Route path="/use-from-status" element={<UseFromStatusExam />} /> */}
      </Routes>
    </>
  );
}

export default App
