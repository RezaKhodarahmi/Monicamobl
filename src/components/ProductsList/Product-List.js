import React, { Component } from "react";
// import Title from "./Title";
import Product from "./Product";
import { ProductConsumer } from "../../context";

// import Pagination from "react-js-pagination";
import { Container, Row, Col } from "react-bootstrap";

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <Container fluid>
        <Row className="row mt-5 pt-5">
          <Col sm="0" md="3" className="">

          </Col>
          
          
            <Col md="9" lg="9" sm="12" className="pt-5 ">
              {/* <Title name="our" title="products" /> */}
              <Row>
                <ProductConsumer>
                  {(value) => {
                    const { products } = value;
                    if (products.length < 1) {
                      return (
                        <Container>
                          <Row>
                            <Col className="col-12 py-5 my-5 text-center text-primary">
                              <h3>محصولی یافت نشد</h3>
                            </Col>
                          </Row>
                        </Container>
                      );
                    }
                    if (value.loading) {
                      return (
                        <Container>
                          <Row>
                            <Col className="col-12 py-5 my-5 text-center text-primary">
                              <div
                                className="spinner-border mb-5"
                                role="status"
                              >
                                <span className="sr-only">Loading...</span>
                              </div>
                            </Col>
                          </Row>
                        </Container>
                      );
                    }

                    return value.products.map((product) => {
                      return <Product key={product.id} product={product} />;
                    });
                  }}
                </ProductConsumer>
              </Row>
            </Col>
           
          
          
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
const StyleSlider = {
  background: "#f3f3f3",
  border: " 0.02rem solid lightgray",
};
