import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import "./ShowClasses.css";

function ListChosenClasses({ listAlert }) {
  const list = listAlert.map((e) => {
    return (
      <ListGroup as="ol" numbered>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">{e.instructors}</div>
            {e.sectionCode}
          </div>
        </ListGroup.Item>
      </ListGroup>
    );
  });
  return (
    <div className="watch-classes">
      <h2>Watching these classes:</h2>
      {list}
    </div>
  );
}

export default ListChosenClasses;
