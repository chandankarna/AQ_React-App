import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

export class Office extends Component {
    render() {
        return (
            <>
                <section className="office_section-container">
                    <Container className="office_section">
                        <div className="office-texts">
                            <h1 className="title">
                                OFFICES
                            </h1>
                            <h5 className="subtitle">
                                We have our offices in Delhi, Maharashtra, Bengaluru, Gujarat, West Bengal, Uttar Pradesh and Haryana.
                            </h5>
                        </div>
                    </Container>
                </section>
            </>
        )
    }
}

export default Office