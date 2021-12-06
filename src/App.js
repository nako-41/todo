import React, { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import './App.css';
import Todos from "./components/Todos";


function App() {
  const [toDoItem,setToDoItem] = useState("");
  const [toDoItem,setToDoItems] = useState([]);

  const onToDoSubmitted = (event) => {
     setToDoItem(event,target,value);
  };

    const OnToDoSend = () => {
     const newToDos = [...toDoItem];
     newToDos.push(toDoItem);
     setToDoItem(newToDos);

    }   

  return (
       <Container  className="App">
       <Row>
         <Col>
         <h1>to do App</h1>
         </Col>
         </Row>
         <Row className="my-5">
           <Col>
         <Form.Label>TO DO ENTER</Form.Label>
       </Col>
       <Col>
        <Form.Control type="email" placeholder="please" onChange={(e) => onToDoSubmitted(e)}/>
     </Col>
       <Col>
        <Button variant="primary" type="submit" onClick={OnToDoSend}>
        <FontAwesomeIcon icon={faPlus} style={{ color:"#FFF"}} />
     </Button>
      </Col>
      </Row>
     <Row>
      <Col> 
        <Todos toDoItem={toDoItem} toDoItems={toDoItems}></Todos>
       </Col>
    </Row>
  </Container>
  );
}

export default App;
