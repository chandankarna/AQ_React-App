import React, { Component } from 'react'
import './Style.scss'
import { Container } from 'react-bootstrap'
import Scroll from '../ScrollTop/Scroll'


export class Footer extends Component {
  render() {
    return (
      <>
        <section className="footer_section-container">
          <Container className='footer_section'>
            <div className="footer-texts">
              <p className="disc">
                2023 &copy; Algoquant Fintech
              </p>
            </div>
          </Container>
        </section>
        <Scroll />
      </>
    )
  }
}

export default Footer