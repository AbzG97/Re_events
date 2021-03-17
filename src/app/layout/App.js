import './styles.css';
import { Button, Container } from 'semantic-ui-react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar';
import React, {useState} from "react"

function App() {
  // this state hook will be used to display the form or not
  const [displayForm, setDisplayForm] = useState(false);
  return (
  
    <>
      {/* the function has been passed down to navbar component where it state can be contolled by a button */}
      <NavBar setDisplayForm={setDisplayForm} />
      <Container className="main">
        <EventDashboard displayForm={displayForm} setDisplayForm={setDisplayForm}/>
      </Container>
    </>
  );
}

export default App;
