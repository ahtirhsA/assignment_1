import './index.css'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'

const Header = props => {

  const homeFunc = () => {
    const {history} = props
    history.replace('/')
  }
 

  return (
    <nav className="nav">
      <img
        src="https://www.uml.edu/Images/acca_accredited_programme_tcm18-356350.png?w=l"
        className="lgo"
      />
      <div className="align">
        <ul className="ull">
          <Link to="/chooseus" className="link">
            <li className="nli">ChooseUs</li>
          </Link>

          <Link to="/learnings" className="link">
            <li className="nli"> Learnings </li>
          </Link>

          <Link to="/placements" className="link">
            <li className="nli"> Placements </li>
          </Link>
        </ul>

        <button type="butt" className="lgOut" onClick={homeFunc}>
          {' '}
          Logout{' '}
        </button>
      </div>
    </nav>
  )
}

export default withRouter(Header)
