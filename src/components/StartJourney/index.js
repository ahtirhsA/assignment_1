import './index.css'
import {useState} from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {IoMdClose} from 'react-icons/io'
import Header from '../Header'

const StartJourney = () => {
  const [phn, setPhn] = useState('')
  const [mail, setMail] = useState('')
  const [isErr, setErr] = useState('')
  const [ismailErr, setmailErr] = useState('')
  const [sel, setSel] = useState('')
  const [isselErr, setSelErr] = useState('')
  const [int, setInt] = useState('')
  const [isintErr, setIntErr] = useState('')

  const condn =
    isErr === '' &&
    ismailErr === '' &&
    isselErr === '' &&
    isintErr === '' &&
    phn !== '' &&
    mail !== '' &&
    sel !== '' &&
    int !== ''
      ? true
      : false

  const phnFunc = event => {
    setPhn(event.target.value)
  }

  const mailFunc = event => {
    setMail(event.target.value)
  }

  const blurFunc = () => {
    if (phn === '') {
      setErr('Required*')
    } else {
      const res = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
      const spStr = phn.split('')
      const nums = spStr.every(i => res.includes(i))

      if (phn.length !== 10 && nums !== true) {
        setErr('Enter correct number*')
      } else {
        setErr('')
      }
    }
  }

  const mailBlurFunc = () => {
    if (mail === '') {
      setmailErr('Required*')
    } else {
      if (mail.includes('@gmail.com')) {
        setmailErr('')
      } else {
        setmailErr('Enter correct email*')
      }
    }
  }

  const selFunc = event => {
    setSel(event.target.value)
  }

  const selBlurFunc = () => {
    if (sel === '') {
      setSelErr('Required*')
    } else {
      setSelErr('')
    }
  }

  const intFunc = event => {
    setInt(event.target.value)
  }

  const intBlurFunc = () => {
    if (int === '') {
      setIntErr('Required*')
    } else {
      setIntErr('')
    }
  }

  const submitFunc = event => {
    event.preventDefault()
    blurFunc()
    mailBlurFunc()
    selBlurFunc()
    intBlurFunc()
  }

  const popUpCard = () => (
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <button type="button" className="butt trigger-button">
            Request Call Back
          </button>
        }
      >
        {close => (
          <>
            <button
              type="button"
              className="closeIcon trigger-button"
              onClick={() => close()}
            >
              <IoMdClose />
            </button>
            <div className="popUp">
              <p className="successPara"> Details Successfully Recorded! </p>
            </div>
          </>
        )}
      </Popup>
    </div>
  )

  const submitButt = () => {
    return (
      <button className="butt" type="submit">
        {' '}
        Request Call Back{' '}
      </button>
    )
  }

  return (
    <div>
      <Header />
      <div className="x">
      <h1 className="hdd"> Kick off your ACCA Prep Journey with Indigo Learn </h1>
      <form className="form" onSubmit={submitFunc}>
        <h1> Aspiring to be an ACCA? Get in touch with us!</h1>
        <div>
          <input
            type="text"
            className="inp form-control"
            placeholder="Phone Number*"
            value={phn}
            onChange={phnFunc}
            onBlur={blurFunc}
          />
          <p className="errPara"> {isErr}</p>
        </div>
        <div>
          <input
            type="text"
            className="inp form-control"
            placeholder="Email ID"
            value={mail}
            onChange={mailFunc}
            onBlur={mailBlurFunc}
          />
          <p className="errPara"> {ismailErr} </p>
        </div>

        <div>
          <select
            className="inp form-control"
            onChange={selFunc}
            value={sel}
            onBlur={selBlurFunc}
          >
            <option value="" disabled selected>
              {' '}
              Current qualification
            </option>
            <option value="high_school_diploma">High School Diploma</option>
            <option value="bachelors_accounting">
              Bachelor's Degree in Accounting
            </option>
            <option value="masters_finance">Master's Degree in Finance</option>
            <option value="ca_inter">CA Inter</option>
          </select>
          <p className="errPara"> {isselErr} </p>
        </div>

        <div>
          <select
            className="inp form-control"
            onChange={intFunc}
            value={int}
            onBlur={intBlurFunc}
          >
            <option value="" disabled selected>
              {' '}
              Interested in
            </option>
            <option value="Taxation">Taxation</option>
            <option value="Audit">Audit</option>
            <option value="Financial Management">Financial Management</option>
          </select>
          <p className="errPara"> {isintErr}</p>
        </div>

        {condn ? popUpCard() : submitButt()}
      </form>
      </div> 
    </div>
  )
}

export default StartJourney
