import React from "react";
import { Card, Badge } from "react-bootstrap";
import Avatar from "react-avatar";

export const UserCard = ({ user }) => {
    const detailLink = `user/${user.id}`;
    return (
        <Card className="mb-3">
            <Card.Body>
                <div className="d-flex justify-content-between">
                    <div>
                        <Card.Link href={detailLink}>
                            <Card.Title className="card-title-text">
                                {user.name}
                            </Card.Title>
                        </Card.Link>
                        <Card.Subtitle className="text-muted mb-2">
                            Work at {user.company.name}
                            <p>{user.company.catchPhrase}</p>
                        </Card.Subtitle>
                        <Badge variant="secondary" className="mr-2">{user.type}</Badge>
                        <Badge variant="secondary">{user.address.city}</Badge>
                    </div>
                    <Card.Link href={detailLink}>
                        <Avatar className="d-md-block" height="50" name={user.name} />
                    </Card.Link>
                </div>
            </Card.Body>
        </Card>
    );
};
