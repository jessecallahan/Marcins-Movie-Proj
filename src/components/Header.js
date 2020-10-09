import React from "react";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


function Header(){
  return (
    <React.Fragment>
      <Row>
      <Col> <h1> Movie Project</h1></Col>
      <Col> <Link to="/">Home</Link></Col>
      <Col> <Link to="/signin">Sign In</Link></Col>
     
      <Col> <Link to="/favoriteslist">Favorites List</Link></Col>
         
        
        </Row>
       
    </React.Fragment>
  );
}

export default Header