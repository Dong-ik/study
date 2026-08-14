import { Routes, Route } from 'react-router-dom'

import TopNavi from './components/TopNavi.jsx'
import UseRefExam1 from './components/UseRefExam1.jsx'
import UseRefExam2 from './components/UseRefExam2.jsx'
//import UseMemo from './components/UseMemo.jsx'
//import UseCallback from './components/UseCallback.jsx'
//import UseId from './components/UseId.jsx'

function App() {
  return (
    <>
      <TopNavi />
      <Routes>
        <Route path="/" element={<UseRefExam1 />} />
        <Route path="/use-ref1" element={<UseRefExam1 />} />
        <Route path="/use-ref2" element={<UseRefExam2 />} />
        {/* <Route path="/use-memo" element={<UseMemo />} /> */}
        {/* <Route path="/use-callback" element={<UseCallback />} /> */}
        {/* <Route path="/use-id" element={<UseId />} /> */}
      </Routes>
    </>
  )
}

export default App