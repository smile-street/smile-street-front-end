import './App.css';
import Header from './components/Header/Header';
// import GoodCauseDetails from "./components/GoodCauseDetails/GoodCauseDetails";
// import GoodCauseMatches from "./components/GoodCauseMatches/GoodCauseMatches";
import Login from "./components/Login/Login";
// import PasswordRecovery from "./components/PasswordRecovery/PasswordRecovery";
// import VolunteerInterests from './components/VolunteerInterests/VolunteerInterests';
// import GoodCauseOpporunity from './components/GoodCauseOpportunity/GoodCauseOpportunity';
// import Registration from "./components/Registration/Registration";
// import VoluenteerMatches from './components/VolunteerMatches/VoluenteerMatches';
// import GoodCauseOpportunity from "./components/GoodCauseOpportunity/GoodCauseOpportunity";
import VolunteerAvailability from "./components/VolunteerAvaiblity/VolunteerAvailability";
import VolunteerEditProfile from "./components/VolunteerEditProfile/VolunteerEditProfile";
import VolEditProfile from "./components/VolunteerEditProfile/VolEditProfile";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";


export default function App() {
  return (
    <div className="App">
   
   
      
      /* <Router>
        <Header />
        <Route path="/" exact component={Login} />
   
        <Route path="/PasswordRecovery" exact component={Login}/>
        <Route path="/V" exact component={VolEditProfile} />
      </Router> */
    </div>

  );
}
