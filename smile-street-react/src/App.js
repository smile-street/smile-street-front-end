import './App.css';
import Header from './components/Header/Header';
<<<<<<< HEAD
// import GoodCauseDetails from "./components/GoodCauseDetails/GoodCauseDetails";
import GoodCauseMatches from './components/GoodCauseMatches/GoodCauseMatches';
// import Login from "./components/Login/Login";
// import PasswordRecovery from "./components/PasswordRecovery/PasswordRecovery";
// import VolunteerInterests from './components/VolunteerInterests/VolunteerInterests';
import GoodCauseOpporunity from './components/GoodCauseOpportunity/GoodCauseOpportunity';
// import Registration from "./components/Registration/Registration";
import VolunteerMatches from './components/VolunteerMatches/VolunteerMatches';
// import GoodCauseOpportunity from "./components/GoodCauseOpportunity/GoodCauseOpportunity";
import VolunteerAvailability from './components/VolunteerAvaiblity/VolunteerAvailability';
=======
import GoodCauseDetails from "./components/GoodCauseDetails/GoodCauseDetails";
import GoodCauseOpportunity from "./components/GoodCauseOpportunity/GoodCauseOpportunity";
import GoodCauseMatches from "./components/GoodCauseMatches/GoodCauseMatches";
import Login from "./components/Login/Login";
import PasswordRecovery from "./components/PasswordRecovery/PasswordRecovery";
import Registration from "./components/Registration/Registration";
import VolunteerAvailability from "./components/VolunteerAvaiblity/VolunteerAvailability";
import VolunteerInterests from './components/VolunteerInterests/VolunteerInterests';
import VoluenteerMatches from './components/VolunteerMatches/VoluenteerMatches';
>>>>>>> main
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';
import Login from './components/Login/Login';

export default function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Header />
      <Router>
        <Login />
      </Router>
      {/* <GoodCauseOpporunity />
      <VolunteerMatches /> */}
      {/* <GoodCauseMatches /> */}
      {/* <VolunteerAvailability/> */}
      {/* <Router>
=======
      <Router>
>>>>>>> main
        <Header />
        <Route path="/" exact component={Login} />
        <Route path="/Registration" exact component={Registration} />
        <Route path="/PasswordRecovery" exact component={PasswordRecovery} />
      </Router>
      <VolunteerAvailability />
      <VolunteerInterests />
      <VoluenteerMatches />
      <GoodCauseDetails />
      <GoodCauseOpportunity />
      <GoodCauseMatches />

    </div>
  );
}
