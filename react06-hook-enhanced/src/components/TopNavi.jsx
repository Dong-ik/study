import {NavLink} from 'react-router-dom'

const TopNavi = () => {
  return (
    <nav>
      <NavLink to="/use-optimistic">useOptimistic</NavLink>&nbsp;
      <NavLink to="/use-action-state">useActionState</NavLink>&nbsp;
      <NavLink to="/use-from-status">useFromStatus</NavLink>&nbsp;
    </nav>
  );
}

export default TopNavi;