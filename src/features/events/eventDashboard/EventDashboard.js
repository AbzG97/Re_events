import React, {useState} from 'react';
import { Grid, GridColumn } from 'semantic-ui-react';
import EventForm from '../eventForm/EventForm';
import EventList from './EventList';
import EventListAttendee from './EventListAttende';
import {sampleData} from '../../../app/api/SampleData';

function EventDashboard({displayForm, setDisplayForm}) {
    // states
    // first part is a variable that can be updated
    // second part is setEvents is the function that is going to be used to update the state of the variable
    const [events, setEvents] = useState(sampleData);

   
    return (
        <Grid>
            <Grid.Column width={10}>
                <h1>Events</h1>
                <EventList events={events}/>
            </Grid.Column>
            <Grid.Column width={6}>
                {displayForm && <EventForm setDisplayForm={setDisplayForm}/>} 
            </Grid.Column>
        </Grid>
    )
}

export default EventDashboard;