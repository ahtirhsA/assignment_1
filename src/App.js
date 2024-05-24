import './App.css'
import ChooseUs from './components/ChooseUs'
import Home from './components/Home'
import {Switch, Route} from 'react-router-dom'
import Placements from './components/Placements'
import StartJourney from './components/StartJourney'
import Learnings from './components/Learnings'

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/chooseus" component={ChooseUs} />
      <Route exact path="/learnings" component={Learnings} />
      <Route exact path="/placements" component={Placements} />
      <Route exact path="/journey" component={StartJourney} />
    </Switch>
  )
}

export default App

/*
<Switch>
      <Route exact path="/chooseus" component={ChooseUs} />
      <Route exact path="/learnings" component={Learnings} />
      <Route exact path="/placements" component={Placements} />
    </Switch>
    */
