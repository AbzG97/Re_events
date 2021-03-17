import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';

export default function NavBar(props) {
    return (
        <Menu inverted fixed="top">
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: '1em'}}/>
                    Re-events
                </Menu.Item>

                <Menu.Item>
                    <Button onClick={() => props.setDisplayForm(true)} basic inverted content="Create Event"/>
                </Menu.Item>

                <Menu.Item position='right'>
                    <Button basic inverted content="Login"/>  
                    <Button basic inverted content="Sign up" style={{marginLeft: '1.5em'}}/>               
                </Menu.Item>

            </Container>
        </Menu>

    )
}