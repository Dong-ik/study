import {NavLink} from 'react-router-dom'

const TopNavi = () => {
  return (
    <nav>
      <NavLink to="/use-reducer">useReducer</NavLink>
      <NavLink to="/useContext">useContext</NavLink>
    </nav>
  )
}

export default TopNavi