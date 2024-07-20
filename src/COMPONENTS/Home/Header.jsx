import React, { Component } from 'react'
import {
    Container
} from 'react-bootstrap'


export class Header extends Component {
  render() {
    return (
      <>
        <section className="header_section-container">
            <Container className="header_section">
                <div className="header-text">
                    <h1 className="title">
                        SECURE YOUR FINANCIAL FUTURE WITH ALGOQUANT FINTECH
                    </h1>
                </div>
            </Container>
        </section>
      </>
    )
  }
}

export default Header