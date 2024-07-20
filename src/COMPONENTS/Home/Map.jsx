import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

export class Map extends Component {
  render() {
    return (
      <>
        <section className="map_section-container">
            <Container className="map_section">
                <div className="map">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14006.71750384507!2d77.22343253198974!3d28.639370018639685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfdc0b2c93905%3A0xfb290a103e3bb762!2sAlgoquant%20Fintech%20Limited!5e0!3m2!1sen!2sin!4v1675413092189!5m2!1sen!2sin" 
                        width="100%" 
                        height="550" 
                        style={{border: "0" }}
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title='officeMap'
                        >
                    </iframe>
                </div>
            </Container>
        </section>
      </>
    )
  }
}

export default Map