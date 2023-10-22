import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";
import { Colaboration } from "../colaboration/Colaboration";
export const Footer = ({ description }) => {
  return (
    <div
      style={{
        height: "10vh",
        width: "99%",
        background: "lightgray",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          height: "10%",
          paddingTop: "20px",
          paddingRight: "10px",
          width: "40%",
          textAlign: "center",
          color: "black",
        }}
      >
        <p>{description}</p>
      </div>
      <div
        style={{
          height: "10%",
          width: "25%",
          paddingTop: "2px",
          textAlign: "center",
        }}
      >
        <Stack direction="horizontal" gap={2}>
          <Badge bg="primary">Adopción Cachorritos</Badge>
          <Badge bg="secondary">Adopción Abuelitos</Badge>
          <Badge bg="danger">Adopción URGENTE</Badge>
          <Badge bg="warning" text="dark">
            Adopción en Preparación Médica
          </Badge>
        </Stack>
      </div>
      <div
        style={{
          width: "30%",
          paddingTop: "8px",
          paddingRight: "10px",
          textAlign: "center",
          color: "black",
        }}
      >
        <p>COLABORA CON NOSOTROS</p>
        <Colaboration />
      </div>
    </div>
  );
};
