import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MessageModal from './MessageModal';

class Contact extends Component {
    constructor(props) {
        super(props);
        // To control the modal visibility
        this.state = {
            isModalOpen: false,
            name: '',
        };
    }

    handleInputChange = (e) => {
        // Update the 'name' property in the state
        this.setState({
            name: e.target.value,
        });
    };

    
    handleSubmit = (e) => {
        e.preventDefault();
        // Simulate a successful form submission
        this.setState({ isModalOpen: true });

        // Simulate a response after a few seconds
        setTimeout(() => {
            // Close the modal
            this.setState({
                isModalOpen: false,
            });
        // Adjust the time as needed
        }, 25000); 
    };

    closeModal = () => {
        this.setState({ isModalOpen: false });
    };

    render() {
        return (
            <>
                <section className="contact_section-container">
                    <Container className='contact_section'>
                        <Row className='contact_section-rows'>
                            <Col lg={5} md={6} sm={12} className='contact_section-texts'>
                                <div className="contact-texts">
                                    <h1 className="title">
                                        GET IN TOUCH
                                    </h1>
                                    <p className="disc">
                                        1<sup>st</sup> Floor , 4/11 Asaf Ali Road
                                        New Delhi - 110002 (India)
                                    </p>
                                    <p className="disc">
                                        <a href="mailto:Investors@algoquantfintech.com">Investors@algoquantfintech.com</a>
                                    </p>
                                    <p className="disc">
                                        <a href="tel:+91-9910032394">+91-9910032394</a>
                                    </p>
                                </div>
                            </Col>
                            <Col lg={7} md={6} sm={12} className='contact_section-form'>
                                <div className="contact-form">
                                    <form onSubmit={this.handleSubmit}>
                                        <input
                                            type="text"
                                            name='name'
                                            id='name'
                                            placeholder='Name'
                                            // Bind the input value to the state property
                                            value={this.state.name} 
                                            // Handle user input changes
                                            onChange={this.handleInputChange} 
                                            required
                                        />


                                        <input
                                            type="email"
                                            placeholder='Email'
                                            required
                                        />
                                        <input
                                            type="text"
                                            placeholder='Phone'
                                            minLength='10'
                                            required
                                        />
                                        <input
                                            type="text"
                                            placeholder='Address'
                                            required
                                        />
                                        <textarea
                                            className="msg-box"
                                            rows="3"
                                        />
                                        <button type="submit" className='submit-btn'>Submit</button>
                                    </form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* Add the MessageModal component */}
                <MessageModal isOpen={this.state.isModalOpen} onClose={this.closeModal} userName={this.state.name} />
            </>
        );
    }
}

export default Contact;
