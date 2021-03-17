import React from 'react';
import { Button, Form, Header, Segment } from 'semantic-ui-react';

export default function EventForm({setDisplayForm}){
    return (
        <Segment style={{marginTop: "3.5em"}} clearing>
            <Header content="Create new event"/>
            <Form>
                <Form.Field>
                    <label>Event name</label>
                    <input type="text" placeholder="Enter event name"/>
                </Form.Field>

                <Form.Field>
                    <label>Category</label>
                    <input type="text" placeholder="Event category"/>
                </Form.Field>

                <Form.Field>
                    <label>Venue</label>
                    <input type="text" placeholder="Name of the venue where the event is taking place"/>
                </Form.Field>

                <Form.Field>
                    <label>City</label>
                    <input type="text" placeholder="Name of the city where the event is taking place"/>
                </Form.Field>

                <Form.Field>
                    <label>Event date</label>
                    <input type="date" placeholder="Enter event date"/>
                </Form.Field>

                <Form.Field>
                    <Button  type="submit" floated="right" content="Submit" positive style={{marginLeft: '1.5em'}}/>
                    <Button onClick={() => setDisplayForm(false)} floated="right" content="cancel" positive/>
                </Form.Field>
            </Form>
        </Segment>
    )
}