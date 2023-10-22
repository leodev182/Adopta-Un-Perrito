import Card from "react-bootstrap/Card";
import { Tags } from "..";

import React from "react";

export const MyCard = ({ image, title, petText, colorBadge, textBadge }) => {
  // console.log(textButton);

  return (
    <Card className="card-pet">
      <div
        style={{
          height: "40%",
        }}
      >
        <Card.Img
          variant="top"
          src={image}
          style={{
            height: "100%",
            display: "block",
            objectFit: "cover",
          }}
        />
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text
          style={{
            height: "65%",
          }}
        >
          {petText}
        </Card.Text>
        <Tags colorBadge={colorBadge} textBadge={textBadge}></Tags>
      </Card.Body>
    </Card>
  );
};
