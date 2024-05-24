import './index.css'
import Header from '../Header'

const Learnings = () => {
  return (
    <div>
      <Header />
      <div>
        <h1 className="ahead"> What will you Learn in ACCA? </h1>
        <ul className="un-lis">
          <li className="li1">
            <div>
              <h1 className="h"> Knowledge Level </h1>
              <ul>
                <li className="opt"> Fundamental Concepts </li>
                <li className="opt"> Core Subjects </li>
                <li className="opt"> Global Perspective </li>
              </ul>
            </div>
            <h1 className="footer"> 3 papers </h1>
          </li>

          <li className="li1">
            <div>
              <h1 className="h"> Skill Level </h1>
              <ul>
                <li className="opt"> Application of Knowledge </li>
                <li className="opt"> Core Modules </li>
                <li className="opt"> Analytical Skills </li>
                <li className="opt"> Technical Proficiency </li>
                <li className="opt"> Regulatory Knowledge </li>
                <li className="opt"> Practical Experience </li>
              </ul>
            </div>
            <h1 className="footer"> 6 papers </h1>
          </li>

          <li className="li1">
            <div>
              <h1 className="h"> Professional Level </h1>
              <h1 className="p1"> Essentials </h1>
              <ul>
                <li className="opt"> SBL-Strategic Business Leader </li>
                <li className="opt"> SBR-Strategic Business Reporting</li>
              </ul>
              <h1 className="p1"> Two out of the following </h1>
              <ul>
                <li className="opt"> Advanced Financial Management </li>
                <li className="opt"> Advanced Performance Management</li>
                <li className="opt"> Advanced Taxation </li>
                <li className="opt"> Advanced Audit and Assurance </li>
              </ul>
            </div>
            <h1 className="footer"> 4 papers </h1>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Learnings
