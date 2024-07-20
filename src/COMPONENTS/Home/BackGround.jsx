import React, { Component } from 'react'
import bg from './Icons/secback.jpg'


export class BackGround extends Component {
    render() {
        return (
            <>
                <section className="background_section-container">
                    <img
                        src={bg}
                        alt=""
                        className="bg_img"
                        width='100%'
                    />
                </section>
            </>
        )
    }
}

export default BackGround