import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { filterUsers, usersSelector } from "./UserSlice";

export const Search = () => {
    const dispatch = useDispatch();
    const { city, users } = useSelector(usersSelector);
    const [location, setLocation] = useState(city);
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(filterUsers({
            city: location,
            users,
        }));
    };
    return (
        <Form className="component-job-filter col-md-12 col-xs-12 col-xl-6 text-center" id="jobFilterForm"
            name="jobFilterForm" onSubmit={handleSubmit}>
            <Form.Row className="align-items-end">
                <Form.Group as={Col} controlId="formGridLocation">
                    <Form.Control onChange={e => setLocation(e.target.value)} value={location} name="location" type="text" placeholder="Search by city" />
                </Form.Group>
                <Form.Group as={Col} className="col-md-2 col-xs-2 col-xl-2" controlId="formGridSubmit">
                    <Button variant="primary" type="submit" onSubmit={handleSubmit}>
                        Go
                    </Button>
                </Form.Group>
            </Form.Row>
        </Form>
    );
};

