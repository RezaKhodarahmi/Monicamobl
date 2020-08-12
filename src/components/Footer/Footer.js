import React, { Component } from "react";
import styled from "styled-components";

import { Container, Row, Col, Nav } from 'react-bootstrap';

export default class footer extends Component {
    render() {
        return (
            <ContainerContent >
                <div className="footer" id="footer">
                    <Container>
                        <Row>
                            <Col lg="6" md="6" sm="6" xs="6">
                                <h4 className="text-light"> مونیکا مبل </h4>
                            </Col>
                            <Col lg="3" sm="2" xs="3">
                                <h3  className="text-light"> Contact </h3>
                                <Nav>
                                    <Nav.Item>
                                        <Nav.Link className="email text-light" >
                                            mrkhodarahmi@gmail.com
                    </Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <Nav.Link className="text-light" >
                                            +98-910-07-46-903
                    </Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <Nav.Link className="text-light">
                                            +98-935-63-83-311
                    </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col lg="3" sm="2" xs="3">
                                <Nav >
                                    <Nav.Item>
                                        <h5 > 
                                            <Nav.Link to="/"  className="text-light" style={{ marginTop: "5rem" }}>
                                                ABOUT US
                      </Nav.Link>
                                        </h5>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <h5>
                                            <Nav.Link to="/"  className="text-light"> CURRENT SERIES </Nav.Link>
                                        </h5>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <h5>
                                            <Nav.Link to="/"  className="text-light"> THE HOUSE </Nav.Link>
                                        </h5>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <h5>
                                            <Nav.Link to="/"  className="text-light"> LOOKING BACK </Nav.Link>
                                        </h5>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                        </Row>
                    </Container>
                    <div className="footer-bottom">
                        <Container>
                            <p className="pull-left copyright">
                                Copyright © MonicaMobl 2020. All right reserved.
              </p>
                        </Container>
                    </div>
                </div>
            </ContainerContent>
        );
    }
}
const ContainerContent = styled.div`


.full {
    width: 100%;    
}
.gap {
	height: 30px;
	width: 100%;
	clear: both;
	display: block;
}
.footer {
    display:block;
    position: static;
    bottom:0;
    right:0;
    left:0;
    direction:ltr;
	background: #818285;
    padding-bottom: 30px;
}
.footer p {
	margin: 0;
}
.footer img {
	max-width: 100%;
}
.footer h3 {
	color: black;
	font-size: 18px;
	font-weight: 600;
	line-height: 27px;
	padding: 40px 0 0px;
	text-transform: uppercase;
  margin-bottom: 15px;
}

.footer h4 {
	color: black;
	font-size: 2em;
	font-weight: 600;
	line-height: 38px;
	padding: 40px 0 10px;
	font-family: cursive;
  font-weight: lighter;
}

.footer ul {
	font-size: 13px;
	list-style-type: none;
	margin-left: 0;
	padding-left: 0;
	margin-top: 0px;
	color: #7F8C8D;
  padding: 0 0 8px 0;
}

.email{
  border-bottom: 3px solid #fff;
}
.footer ul li a {
	padding: 0 0 12px 0;
	display: block;
}
.footer a {
	color: black;
  font-weight: lighter;
}

.footer p {
	color: black;
  font-weight: lighter;
  
}

.footer a:hover {
	text-decoration:none;
  font-weight: bold;
}
.supportLi h4 {
	font-size: 20px;
	font-weight: lighter;
	line-height: normal;
	margin-bottom: 0 !important;
	padding-bottom: 0;
}

.bg-gray {
	background-image: -moz-linear-gradient(center bottom, #BBBBBB 0%, #F0F0F0 100%);
	box-shadow: 0 1px 0 #B4B3B3;
}

.footer a {
	color: black
}

.footer-bottom {
  margin-top: 2em;
	border-top: 1px solid black;
	padding-top: 20px;
	padding-bottom: 10px;
}
.footer-bottom p.pull-left {
	padding-top: 6px;
  font-size: 0.75em
}
`;
