import './index.css'
import {FaLightbulb} from 'react-icons/fa'
import {BsPeopleFill} from 'react-icons/bs'
import { FaInfinity } from "react-icons/fa"
import Header from '../Header'

const ChooseUs = () => {
  return (
    <div>
      <Header />
      <div className="bg">
        <h1 className="head"> Why Choose Us? </h1>
        <ul className="ul">
          <li className="li">
            <FaLightbulb className="ic" />
            <h1 className="head1"> Expert Faculty </h1>
            <p className="p">
              {' '}
              Our ACCA program is led by a team of expert faculty members who
              bring a wealth of industry experience and academic excellence.
              Their dedicated guidance and deep understanding of ACCA standards
              ensure students receive top-tier education and personalized
              support.{' '}
            </p>
          </li>
          <li className="li">
            <BsPeopleFill className="ic" />
            <h1 className="head1"> Complete Success Package </h1>
            <p className="p">
              {' '}
              Our ACCA program offers a comprehensive success package, including
              personalized study plans, extensive practice resources, and
              dedicated mentorship. This all-inclusive support system is
              designed to ensure students excel in their ACCA exams and achieve
              their career goals.
            </p>
          </li>
          <li className="li">
          <FaInfinity className="ic"/>

            <h1 className="head1"> Placements </h1>
            <p className="p">
              {' '}
              Our ACCA program boasts an outstanding placement record, with
              strong industry connections that help students secure prestigious
              positions in top firms. We provide dedicated career support to
              ensure graduates are well-prepared for successful careers in
              accounting and finance.{' '}
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ChooseUs
