import React, { Component } from 'react'
import { 
    Col, 
    Row 
} from 'react-bootstrap'

export class Cols extends Component {
    render() {
        return (
            <>
                <section className="cols_section-container">
                    <div className="container-fluid cols_section">
                        <Row className="cols-rows">
                            <Col lg={4} md={6} sm={12} className="cols-box box_1">
                                <div className="boxed">
                                    <h1 className="title">
                                        AUTOMATED ARBITRAGE
                                    </h1>
                                    <p className="disc">
                                        We use a combination of math and technology to develop safe arbitrage opportunities in the markets.
                                    </p> <br />
                                    <a href="#footer" className="btn btn-touch">Get In Touch</a>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={12} className="cols-box box_2">
                                <div className="boxed">
                                    <h1 className="title">
                                        HIGH-FREQUENCY TRADING
                                    </h1>
                                    <p className="disc">
                                        Algoquant Fintech is one the leader in HF domain in the country running on ultra low latency engine. We have a block box Model to ensure privacy of alpha's.
                                    </p>
                                    <a href="#footer" className="btn btn-touch">Get In Touch</a>
                                </div>
                            </Col>
                            <Col lg={4} md={12} sm={12} className="cols-box box_3">
                                <div className="boxed">
                                    <h1 className="title">
                                        TAILOR-MADE SOLUTIONS
                                    </h1>
                                    <p className="disc">
                                        We offer tailor-made solutions to meet our client's financial requirement including automated trading solutions, systematic trading/investment plans and delta hedge derivatives trading strategies.
                                    </p>
                                    <a href="#footer" className="btn btn-touch">Get In Touch</a>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
            </>
        )
    }
}

export default Cols