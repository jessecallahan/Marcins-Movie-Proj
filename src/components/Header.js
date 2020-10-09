import React from "react";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


function Header(){
  return (
    <React.Fragment>
        <div className="header-style" >

      <Row>
      <Col> <Link to="/"><h1> Movie Spective</h1></Link></Col>
      <Col> <Link to="/">Home</Link></Col>
      <Col> <Link to="/signin">Sign In</Link></Col>
     
      <Col> <Link to="/favoriteslist">Favorites List</Link></Col>
         
     
        </Row>
        </div>
    </React.Fragment>
  );
}

export default Header