import React from 'react'
import { Row,Col } from "react-bootstrap";
import  './SecondSecationStyle.css';




export default function SecondSecation() {
    return(
        <div>
            <Row>
                <Col lg={3}></Col>
                <Col lg={6} md={12} xs={12}>
                <p className='paragraph6'>Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula.</p>
                <p className='paragraph6'>eu dui molestie, molestie lectus eu, semper lectus. Proin at justo lacinia, auctor nisl et, consequat ante. Donec sit amet nisi arcu. Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam posuere maximus dui et fringilla. Nulla non volutpat leo.</p>
                </Col>
                <Col lg={3}></Col>
            </Row>
            <div>
                <Row>
                    <Col lg={3}></Col>
                    <Col lg={6} md={12} xs={12}><p className='paragraph7'>A list look like this</p>
                    <ul className='list'>
                        <li>First item in the list</li>
                        <li>Second item in the list lorem ipsum dolor sit amet nunc felis dolor lorem ipsum sit amet</li>
                        <li>Third item in the list</li>
                    </ul>
                    </Col>
                    <Col lg={3}></Col>
                </Row>
            </div>
            <div>
                <Row>
                    <Col lg={3}></Col>
                    <Col lg={6} md={12} xs={12}><p className='paragraph8'>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula.</p></Col>
                    <Col lg={3}></Col>
                </Row>
               
            </div>
            <div className='display5'>     
                 <p className='paragraph9'>Thanks for reading,</p>
                 <p className='paragraph9'>Mika</p>
                </div>
                <div>
                    <Row>
                        <Col lg={3}></Col>
                        <Col lg={3} md={12} xs={12}><img src='assets/Frame 38.png'/> </Col>
                        <Col lg={3} md={12} xs={12}><img src='assets/Group 37.png'/></Col>
                        <Col lg={3}></Col>
                    </Row>
                </div>
        </div>
    )
    
}