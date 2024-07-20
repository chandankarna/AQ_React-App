import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

export class Offer extends Component {
    render() {
        return (
            <>
                <section className="offer_section-container">
                    <Container className='offer_section'>
                        <div className="offer-texts">
                            <h1 className="title">
                                WHAT WE OFFER
                            </h1>
                            <h4 className="subtitle">
                                Low Risk Arbitrage | High Frequency Trading
                            </h4>
                            <p className="disc">
                                Algoquant Fintech Limited (Formerly Hindustan Everest Tools Limited) is a technology
                                driven trading Firm. We are one of the<br /> leaders in Low risk arbitrage and high frequency
                                trading in the Indian Capital Markets.
                            </p>
                            <p className="disc">
                                Our team of highly talented individuals helps us to run sophisticated algorithms at ultra law
                                latencies.
                            </p>
                        </div>
                    </Container>
                </section>
            </>
        )
    }
}

export default Offer