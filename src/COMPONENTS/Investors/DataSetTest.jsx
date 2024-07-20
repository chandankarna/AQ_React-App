import React, { Component } from 'react';
import { Container, Accordion } from 'react-bootstrap';
import Datas from './Datas.json'; // Import the JSON file directly

export class DataTest extends Component {
    constructor(props) {
        super(props);
        // Initialize the component's state with the imported JSON data
        this.state = {
            data: Datas,
        };
    }

    render() {
        return (
            <>
                <section className="data_section-container">
                    <Container className="data_section">
                        <h1 style={{ textAlign: "center" }}>Investor Data</h1>
                        <div className="datas">
                            <Accordion defaultActiveKey="0" flush>
                                {this.state.data.map((item, index) => (
                                    <Accordion.Item eventKey={index + 1} key={index}>
                                        <Accordion.Header>
                                            <h5 className="heading">{item.title}</h5>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            {item.content.map((pdf, pdfIndex) => (
                                                <div key={pdfIndex} className='dataContainer'>
                                                    <p>{pdf.pdfName}</p>
                                                    <a href={pdf.pdfLink} target="_blank" rel="noopener noreferrer">
                                                        Download PDF
                                                    </a>
                                                </div>
                                            ))}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </div>
                    </Container>
                </section>
            </>
        );
    }
}

export default DataTest;
