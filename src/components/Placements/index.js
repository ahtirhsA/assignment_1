import './index.css'
import Header from '../Header'

const Placements = () => {
  return (
    <div>
      <Header />
      <div className="con">
        <div className="pbg">
          <h1 className="phead"> 100% Placement Assistance </h1>
          <h1 className="txt"> Resume Building </h1>
          <p className="pp">
            Resume building in ACCA involves highlighting your ACCA
            certification, relevant financial experience, and core accounting
            skills to enhance career prospects."
          </p>
          <h1 className="txt"> Career Counselling </h1>
          <p className="pp">
            {' '}
            Career counseling provides personalized guidance to help individuals
            make informed career decisions and achieve their professional goals
          </p>
          <h1 className="txt"> Jobs </h1>
          <p className="pp">
            Jobs provide individuals with employment opportunities, enabling
            them to apply their skills, earn income, and contribute to
            organizational goals."
          </p>
        </div>
      </div>
    </div>
  )
}

export default Placements
