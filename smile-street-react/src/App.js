import './App.css';
import Header from './components/Header/Header';
import GoodCauseDetails from './components/GoodCauseDetails/GoodCauseDetails';
import GoodCauseOpportunity from './components/GoodCauseOpportunity/GoodCauseOpportunity';
import GoodCauseMatches from './components/GoodCauseMatches/GoodCauseMatches';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import VolunteerAvailability from './components/VolunteerAvaiblity/VolunteerAvailability';
import VolunteerInterests from './components/VolunteerInterests/VolunteerInterests';
import VolEditProfile from './components/VolunteerEditProfile/VolEditProfile';
import ManageOpportunities from './components/ManageOpportunities/ManageOpportunities';
import VolunteerMatches from './components/VolunteerMatches/VolunteerMatches';
import Footer from './components/Footer/Footer';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';


export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/" exact component={Login} />
        <Route path="/Registration" exact component={Registration} />

        <Route
          path="/VolunteerAvailability"
          component={VolunteerAvailability}
        />
        <Route path="/GoodCauseDetails" component={GoodCauseDetails} />
        <Route path="/VolunteerMatches" component={VolunteerMatches} />
        <Route path="/GoodCauseMatches" component={GoodCauseMatches} />
        <Route path="/VolunteerInterests" component={VolunteerInterests} />
        <Route path="/GoodCauseOpportunity" component={GoodCauseOpportunity} />
        <Route path="/VolEditProfile" component={VolEditProfile} />
        <Route path="/ManageOpportunities" component={ManageOpportunities} />
        <Footer />
      </Router>
      {/* <VolunteerInterests />
      <GoodCauseOpportunity /> */}
    </div>
  );
}
