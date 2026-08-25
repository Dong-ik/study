import { Routes, Route } from 'react-router-dom'

import TopNavi from './components/TopNavi.jsx'
import UseRefExam1 from './components/UseRefExam1.jsx'
import UseRefExam2 from './components/UseRefExam2.jsx'
import UseMemoExam from './components/UseMemoExam.jsx'
import UseCallbackExam from './components/UseCallbackExam.jsx'
import UseIdExam from './components/UseIdExam.jsx'

function App() {
  return (
    <>
      <TopNavi />
      <Routes>
        <Route path="/" element={<UseRefExam1 />} />
        <Route path="/use-ref1" element={<UseRefExam1 />} />
        <Route path="/use-ref2" element={<UseRefExam2 />} />
        <Route path="/use-memo" element={<UseMemoExam />} />
        <Route path="/use-callback" element={<UseCallbackExam />} />
        <Route path="/use-id" element={<UseIdExam />} />
      </Routes>
    </>
  )
}

export default App