import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";

export const Tags = ({ colorBadge, textBadge }) => {
  return (
    <h4>
      <Badge pill bg={colorBadge}>
        <a href="">{textBadge}</a>
      </Badge>
    </h4>
  );
};
