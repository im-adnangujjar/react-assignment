import React from 'react';
import {Row,Col }     from'react-bootstrap'
import './HeaderSecation.css'



export default function HeadreSecation() {
    return (
        <div>
        <Row>
            <Col lg={2}></Col>
            <Col lg={8}  ><p className="paragraph1">A few words about this blog platform, Ghost, and how this site was made</p>
                  <p className="paragraph2">A few words about this blog platform, Ghost, and how this site was made</p>
            </Col>
            <Col lg={2}></Col>
        </Row>
        
        <Row>
        <Col lg={12}md={12}xs={12}>
        <img src='/assets/image-2.png'className="image"/>
        </Col>
        </Row>
        <Row>
            <Col lg={3}></Col>
            <Col lg={6} md={12} xs={12}><hr className="line"></hr></Col>
            <Col lg={3}></Col>
        </Row>
        <Row>
            <Col lg={3}></Col>
            <Col lg={4}>
            <div className='display2'>
<img src="/assets/Mask Group.png"/>
<div>
<h5>MIKA MATIKAINE</h5>
<p>Apr 15, 2020 . 4 mi read</p>
</div>
</div>
            </Col>
            <Col lg={2}>
                <img src="/assets/Group 4.png"/>
            </Col>
            <Col lg={3}></Col>
        </Row>
    
        </div>
        
    )
}