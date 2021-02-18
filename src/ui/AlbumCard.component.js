import React from "react";
import { Card } from "react-bootstrap";

export const AlbumCard = ({ album }) => {
    return (
        <Card className="mb-4 album-card">
            <Card.Link href={album.url} target="_blank">
                <Card.Img variant="top" src={album.thumbnailUrl} />
            </Card.Link>
            <Card.Body>
                <Card.Link href={album.url} target="_blank">
                    <Card.Title className="card-title-text">
                        {album.title}
                    </Card.Title>
                </Card.Link>
            </Card.Body>
        </Card>
    );
};
