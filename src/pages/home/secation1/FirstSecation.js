import React from 'react';
import {Row,Col} from'react-bootstrap'
import './FirstSecationStyle.css' 


export default function FirstSecation() {
    return(
       <div>
       <Row>
       <Col lg={3}></Col>
       <Col lg={6}>
        <p className="paragraph3"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra.</p>
 <p className="paragraph3">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula. In eu dui molestie, molestie lectus eu, semper lectus.</p>
</Col>
       <Col lg={3}></Col>
       </Row>
       <div>
           <Row>
           <Col lg={3} md={0} ></Col>
           <Col lg={6} md={12} xs={12}><h1 className='heading1'>Next on the pipeline</h1>
           <p className='paragraph4'>Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
           <p className='paragraph4'>Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam posuere maximus dui et fringilla.</p>
           </Col>
           <Col lg={3} md={0}></Col>
           </Row>
       </div>
       <div>
           <Row>
               <Col lg={2} md={0} xs={0}></Col>
               <Col lg={8} md={12} xs={12}><img src="/assets/Rectangle 8.png" className='image1'/>
               <p className='paragraph5'>Image caption centered this way and I’ll make this a bit longer to indicate the amount of line-height.</p>
               </Col>
               <Col lg={2} md={0} xs={0}></Col>
           </Row>
       </div>
       
          
       </div> 
    )
    
}