import React, { Component } from 'react';
import { Card, Jumbotron } from 'react-bootstrap';
import bwipjs from 'bwip-js';class ExitCode extends Component {
    componentDidMount() {
        try {
          // The return value is the canvas element
          let canvas = bwipjs.toCanvas('mycanvas', {
                    bcid:        'code128',       // Barcode type
                    text:        'U-DATE-SALE#',    // Text to encode
                    scale:       2,               // 3x scaling factor
                    height:      12,              // Bar height, in millimeters
                    includetext: true,            // Show human-readable text
                    textxalign:  'center',        // Always good to set this
                });
        } catch (e) {
            // `e` may be a string or Error object
        }
      }
      render() {
        return (
          <Card>
              <Card.Header>
                  <h2>Thank You</h2>
              </Card.Header>
              <Card.Body>
              <canvas id="mycanvas"></canvas>
              </Card.Body>
              <Card.Footer>
              <p>Continue Shopping : <a href='/'> Click Here</a></p>
            </Card.Footer>
          </Card>

        );
      }
}
 
export default ExitCode;