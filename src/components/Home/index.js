import './index.css'
import Slider from 'react-perfect-slider'
import Header from '../Header'

const Home = props => {
  const jourFunc = () => {
    const {history} = props
    history.replace('/journey')
  }

  return (
    <div>
      <Header />
      <div className="bigCon">
        <div className="exCon">
          <h1 className="bhead1"> Become ACCA in 18 months </h1>
          <button type="button" className="startButt" onClick={jourFunc}>
            {' '}
            Start Your Journey{' '}
          </button>
        </div>
        <p className="bpara1">
          Becoming an ACCA (Association of Chartered Certified Accountants) in
          18 months is an accelerated path requiring dedication and strategic
          planning. It involves passing a series of exams, completing
          professional experience requirements, and maintaining continuous
          professional development. This fast-track approach is intense but
          feasible for committed individuals aiming for a prestigious global
          qualification in finance and accounting.
        </p>
        <Slider
          renderControls={(next, previous) => [
            <div className="buttCon">
              <button className="pbbutt" onClick={previous}>
                Previous
              </button>
              ,
              <button className="pbbutt" onClick={next}>
                Next
              </button>
              ,
            </div>,
          ]}
        >
          <div>
            <img
              src="https://d13loartjoc1yn.cloudfront.net/course/1688375484_ACCA%20Full%20Form.jpg"
              className="cimg"
            />
          </div>
          <div>
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.-yYYvBQLYvson4upYRn4qAHaD4&pid=Api&P=0&h=180"
              className="cimg"
            />
          </div>
          <div>
            <img
              src="https://whitecollaraccountant.com/wp-content/uploads/2019/06/aatn-copy.jpg"
              className="cimg"
            />
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default Home
