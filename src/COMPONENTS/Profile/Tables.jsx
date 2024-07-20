import React, { Component } from 'react'
import {
  Container,
  Table
} from 'react-bootstrap'


export class Tables extends Component {
  render() {
    return (
      <>
        <section className="table_section-container">
          <Container className="table_section">
            <h1 className="title">
              Composition of the Committees of Algoquant Fintech Limited
            </h1>
            <hr width="100%" />
            <h2 className="table_title">
              1. Audit Committee
            </h2>
            <Table bordered hover>
              <thead>
                <tr>
                  <th>S. No.</th>
                  <th>Name of the Director</th>
                  <th>Designation</th>
                  <th>Position</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Amit Gupta</td>
                  <td>Independent Director</td>
                  <td>Chairman</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Gyaneshwar Sahai                  </td>
                  <td>Independent Director</td>
                  <td>Member</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Himanjal Jagdishchandra Brahmbhatt	</td>
                  <td>Non-Executive Director </td>
                  <td>Member</td>
                </tr>
              </tbody>
            </Table>
            <hr width="100%" />
            <h2 className="table_title">
              1. Nomination and Remuneration Committee
            </h2>
            <Table bordered hover>
              <thead>
                <tr>
                  <th>S. No.</th>
                  <th>Name of the Director</th>
                  <th>Designation</th>
                  <th>Position</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1.</td>
                  <td>Amit Gupta</td>
                  <td>Independent Director</td>
                  <td>Chairman</td>
                </tr>
                <tr>
                  <td>2.</td>
                  <td>Shubhangi Agarwal </td>
                  <td>Independent Director</td>
                  <td>Member</td>
                </tr>
                <tr>
                  <td>3.</td>
                  <td>Gyaneshwar Sahai </td>
                  <td>Independent Director</td>
                  <td>Member</td>
                </tr>
              </tbody>
            </Table>
            <hr width="100%" />
            <h2 className="table_title">
              1. Nomination and Remuneration Committee
            </h2>
            <Table bordered hover>
              <thead>
                <tr>
                  <th>S. No.</th>
                  <th>Name of the Director</th>
                  <th>Designation</th>
                  <th>Position</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1.</td>
                  <td>Gyaneshwar Sahai</td>
                  <td>Independent Director</td>
                  <td>Chairman</td>
                </tr>
                <tr>
                  <td>2.</td>
                  <td>Amit Gupta </td>
                  <td>Independent Director </td>
                  <td>Member</td>
                </tr>
                <tr>
                  <td>3.</td>
                  <td>Shubhangi Agarwal </td>
                  <td>Independent Director</td>
                  <td>Member</td>
                </tr>
              </tbody>
            </Table>
          </Container>
        </section>
      </>
    )
  }
}

export default Tables