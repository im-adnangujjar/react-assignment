import { Collapse } from 'bootstrap';
import React from 'react';
import { Row, Col, Container } from "react-bootstrap";
// import Button from '../../../commonComponant/button/Button';
import './ThridSecationStyle.css'



export default function ThridSecation() {
    return (
        <div>


            <p className='paragraph10'>Tags: product design, culture</p>
            <div className='adnan'>
                <p className='line2'></p>
            </div>

            <div className='display3'>
                <img src='/assets/Mask Group.png' />
                <p className='paragraph11'><b>Mika Matikainen</b> is a Design Founder & Advisor, Berlin School of Creative Leadership Executive MBA participant, Zippie advisor, Wolt co-founder, and Nordic Rose stakeholder.</p>


            </div>
            <div><img src='/assets/group 56.png' className='image2' /></div>

            <div>
                <p className='paragraph12'>What to read next</p>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col lg={4} md={6} xs={12}><img src='\assets\Rectangle 4.png' className='image3' />
                            <p className='paragraph13'>Connecting artificial intelligence with digital product design</p>
                        </Col>
                        <Col lg={4} md={6} xs={12}><img src='\assets\Rectangle 11.png' className='image3' />
                            <p className='paragraph13'>Hello world, or, in other words, why this blog exists</p>
                        </Col>
                        <Col lg={4} md={6} xs={12}><img src='\assets\Rectangle 10.png' className='image3' />
                            <p className='paragraph13'>Hello world, or, in other words, why this blog exists</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col lg={4} md={6} xs={12}><img src='/assets/Rectangle 37.png' className='image3' />
                            <p className='paragraph13'>A few words about this blog platform, Ghost, and how this site was made</p>
                        </Col>
                        <Col lg={4} md={6} xs={12}><img src='/assets/Rectangle 38.png' className='image3' />
                            <p className='paragraph13'>Updating list of 50+ sources on distributed teams, remote work, and how to make it all work better</p></Col>
                        <Col lg={4} md={6} xs={12}><img src='/assets/Rectangle 39.png' className='image3' />
                            <p className='paragraph13'>How modern remote working tools get along with Old School Cowboy's methods</p></Col>
                    </Row>
                </Container>
            </div>
            <div className='gujjar'>
                <p className='line3'></p>
            </div>
            <div className='adnan1'>
                <div className='Border'>
                    <p className='paragraph14'>Sign up for the newsletter</p>
                    <p className='paragraph15'>If you want relevant updates occasionally, sign up for the private newsletter. Your email is never shared.</p>
                    <input type="text" placeholder='Enter your email' />
                   <button className='Button'>submit</button>

                </div>
            </div>
        </div>
    )
}