import React from 'react';
import { Button, Icon, Item, List, Segment} from 'semantic-ui-react';
import EventListAttendee from './EventListAttende';


export default function EventListItem (props){
    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size="tiny" circular src={props.event.hostPhotoURL}/>
                        <Item.Content>
                            <Item.Header>{props.event.title}</Item.Header>
                            <Item.Description>Hosted by {props.event.hostedBy}</Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name="clock"/>{props.event.date}
                    <Icon name="marker"/> {props.event.venue}
                </span>
            </Segment>
            <Segment secondary>
                <List horizontal>
                    {props.event.attendees.map(attendee => (
                        <EventListAttendee attendee={attendee} key={attendee.id}/>
                    ))}
                </List>
            </Segment>
            <Segment clearing>
                <p>{props.event.description}</p>
                <Button color='teal' floated="right" content="View"/>
            </Segment>

        </Segment.Group>

    )
}