
import React, { useState } from 'react';
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown"
import { DropdownButton, TabPane } from "react-bootstrap";
import {Button} from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import "../../style/dropdownStyle.css"
import AuthService from "../../utils/Auth"
import { ADD_PARENT_TO_EVENT } from "../../utils/apollo/mutations";
import { useMutation } from '@apollo/client';
const EventCard = (props) => {
    // console.log(props.attendees);

    const userData = AuthService.getInfo();

    const [addParentToEvent, { loading, error }] = useMutation(ADD_PARENT_TO_EVENT);

    // const arrOfAttendees = props.attendees ? props.attendees.map
    const onAdd = async (e) => {
        e.preventDefault();
        // console.log(typeof userData.data.id);
        const { data } = await addParentToEvent({variables: {eventId: props.eventId, parentId: userData.data.id}})
        window.location.reload();
        // console.log(data);
        // console.log("clicked")
    }

  return (
    <Card className='shadow mx-auto text-center' style={{ width: "18rem", minHeight: "16rem", marginTop: "2rem" }}>
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Subtitle>{props.date}</Card.Subtitle>
      <Card.Text>{props.time}</Card.Text>
      <Card.Text><a href={props.location}>Link To Meeting</a></Card.Text>
      <Dropdown>

        <DropdownButton id="dropdown-basic-button" title="Attendees">
        { props.attendees ? props.attendees.map( (currentPerson, index) => (
            <Dropdown.ItemText key={index}>{currentPerson.firstName} {currentPerson.lastName}</Dropdown.ItemText>
        )) : <Dropdown.ItemText>No Attendees Yet</Dropdown.ItemText>}
        <Dropdown.Item onClick={onAdd}>Add</Dropdown.Item>

        </DropdownButton>

      </Dropdown>

    </Card.Body>
    </Card>
  );
};

export default EventCard;
