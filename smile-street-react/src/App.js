import "./App.css";
import Login from "./components/Login/Login";

import Volunteermatches from "./components/Volunteermatches/Volunteermatches";
import PasswordRecovery from "./components/PasswordRecovery/PasswordRecovery";
import GoodCauseVolunteerRegistration from "./components/GoodCause-Voluenteer-Registration/GoodCauseVolunteerRegistration";
import Header from "./components/Header/Header";
import Profilebutton from "./components/Volunteermatches/Profilebutton";
import MatchCard from "./components/Volunteermatches/MatchCard";

function App() {
  return (
    <div className="App">


      <Header />
      <Login />
      <GoodCauseOpportunity />
      <GoodCauseDetails />
      <VolunteerInterests />
      <VolunteermatchesYesNoButton />
      <Registration />
      <PasswordRecovery />


    </div>
  );
}

export default App;
