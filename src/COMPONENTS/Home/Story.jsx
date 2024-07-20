import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

export class Story extends Component {
    render() {
        return (
            <>
                <section className="story_section-container">
                    <Container className='story_section'>
                        <div className="story-texts">
                            <h1 className="title">
                                OUR STORY
                            </h1>
                            <h5 className="subtitle">
                                Innovative Investing
                            </h5>
                            <p className="disc">
                                Algoquant Fintech is a Tech-driven , new-age company focusing on generating maximum 
                                return using complex algorithms and sophisticated technology. We help our clients 
                                invest for their future financial security. We specialize in assessing each of our 
                                client`s unique needs and creating a personalized investment plan and strategy that 
                                matches their requirements and helps them achieve secure and low risk returns.
                            </p>
                        </div>
                    </Container>
                </section>
            </>
        )
    }
}

export default Story