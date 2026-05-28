import {Routes, Route} from 'react-router-dom';
import RouterHooks from './components/RouterHooks';
import Home from './components/home';
import TopNavi from './components/TopNavi';
import NotFound from './components/NotFound';
import CommonLayout from './components/CommonLayout';
import LayoutIndex from './components/LayoutIndex';

function App() {
  return (<>
    <TopNavi />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/intro" element={<CommonLayout />} >
        <Route index element={<LayoutIndex />} />
        <Route path="router" element={<RouterHooks />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>);
}

export default App;