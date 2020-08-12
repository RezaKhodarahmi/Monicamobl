import React, { Component } from "react";
import { ProductConsumer } from "../../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "../Layout/Button";
import './Details.css'
import {
  Container,
  Row,
  Col,
  Image,
  Form,
  Button,
  FormGroup,
  FormControl,
  FormLabel,
  Table
} from "react-bootstrap";

import SliderImage from 'react-zoom-slider';
////////////////////////
// Image slider get data
const data = [
  {
    image: 'https://www.offdecor.com/image/cache/media/product/3431/Untitled-3-900x700.jpg',
    text: 'img1'
  },
  {
    image: 'https://www.offdecor.com/image/cache/media/product/3421/Untitled-1-900x700.jpg',
    text: 'img2'
  },
  {
    image: 'https://www.offdecor.com/image/cache/media/product/3421/Untitled-2-900x700.jpg',
    text: 'img3'
  }

];

export default class Details extends Component {
  commentSubmit = (e) => {
    e.preventDefault();

  }

  render() {
    return (
      <ProductConsumer>
        {(value) => {
          // get data from contetx
          const {
            id,
            material,
            title,
            img,
            price,
            info,
            inCart,
            Breadcrumb

          } = value.detailproduct;
          if (value.detailproduct.length < 1) {
            return (
              // Return Blank page if product not found
              <Container className="py-5 my-5">
                <Row>
                  <Col className="col-12 py-5 my-5 text-center  ">
                    <h1>title</h1>
                    <Link to="/">
                      <button
                        className="btn btn-outline-primary text-capitalize"
                        type="button"
                      >
                        بازگشت به صفحه ی اصلی
                      </button>
                    </Link>
                  </Col>
                </Row>
              </Container>
            );
          }
          return (
            <Container fluid className="py-5 mt-5  px-4">
              {/* Product image and descriptions */}
              
              <Row className="mt-5 p-0 details-card shadow">
                <Col className="col-10 mx-auto text-center text-blue text-slanted my-3">
                  <h1 className="text-muted font-weight-bold" style={{ color: '#D4AF37!important' }}>{title}</h1>
                  <hr className="mt-4" style={{ background: '#D4AF37' }} />
                </Col>

                <Col className=" col-12  mx-auto my-3 d-md-none d-sm-block">
                  {/* Product images slider */}
                  <SliderImage
                    data={data}
                    className="pic-zoom"
                    showDescription={false}
                    direction="center"
                  />
                </Col>
                <Col className=" col-6  mx-auto my-3 product-slider-sm">
                  {/* Product images slider */}
                  <SliderImage
                    data={data}
                    className="pic-zoom"
                    showDescription={false}
                    direction="left"
                  />
                </Col>
                <Col col="10" md="6" className="mx-auto my-3 text-capitalize text-right " >
                  <h4>مدل: {title}</h4>
                  <h5 className="text-title text-uppercase text-muted mt-3 mb-2">
                    جنس چوب: <span className="text-uppercase">{material}</span>
                  </h5>

                  <h5 className="text-blue text-muted mt-3">
                    <strong >
                      قیمت: <span >$</span>
                      {price}
                    </strong>
                  </h5>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0 " >
                    توضیحات محصول :
                  </p>
                  <p className="text-muted text-justify p-3 lead" style={{ lineHeight: '2.5rem', fontSize: '1rem' }}>{info}</p>
                  <div>
                    <Link to="/">
                      <ButtonContainer>بازگشت به فروشگاه</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      onClick={() => {
                        value.addToCart(id);
                        value.modalOpen(id);
                      }}
                      
                    disabled={inCart ? true : false}
                    >
                      {inCart ? " inCart" : "اضافه به سبد خرید"}
                    </ButtonContainer>
                  </div>
                </Col>

              </Row>
              {/* Product Details */}
              <Row className="mt-4 p-0 details-card shadow">
              <Col className="col-10 mx-auto text-center text-blue text-slanted my-4">
                  <h3 className="text-muted " style={{ color: '#D4AF37!important' }}>مشخصات محصول</h3>
                  <hr className="mt-4" style={{ background: '#D4AF37' }} />
                </Col>
                <Col sm="12" md="8" lg="8" className="text-right p-2">
                  <Table bordered hover size="sm" striped>
                    <thead>
                      <tr>
                        <th>مشخصات</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>ضمانت</td>
                        <td>دارد</td>
                      </tr>
                      <tr>
                        <td>تنوع رنگ</td>
                        <td>دارد</td>
                      </tr>
                      <tr>
                        <td>جنس پایه</td>
                        <td>دارد</td>
                      </tr>
                      <tr>
                        <td>جنس اسکلت</td>
                        <td>دارد</td>
                      </tr>
                      <tr>
                        <td>جنس اسکلت</td>
                        <td>دارد</td>
                      </tr>
                      <td>تعداد </td>
                      <td>دارد</td>
                    </tbody>
                  </Table>
                </Col>
                <Col sm="12" md="4" className="p-2">
                 
               </Col>
              </Row>
              {/* Comments */}
              <Row className="mt-4 p-0 details-card shadow">
              <Col className="col-10 mx-auto text-center text-blue text-slanted my-4">
                  <h3 className="text-muted " style={{ color: '#D4AF37!important' }}>نظرات مشتریان </h3>
                  <hr className="mt-4" style={{ background: '#D4AF37' }} />
                </Col>
                <Col sm="12" md="12" lg="12" className="text-right">
                  <Form onSubmit={this.commentSubmit}>
                    <Col lg="4" md="6" sm="12" className="d-inline-block">
                      <Form.Group controlId="formBasicEmail ">
                        <Form.Label>
                          نام<span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control type="text" placeholder="نام خود را وارد کنید" required />
                        <Form.Text className="text-muted"></Form.Text>
                      </Form.Group>
                    </Col>
                    <Col sm="12" md="6" lg="4" className="d-inline-block">
                      <Form.Group controlId="formBasicEmail ">
                        <Form.Label>
                          ایمیل <span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control type="email" placeholder="ایمیل خود را وارد کنید" required />
                      </Form.Group>
                    </Col>

                    <Col lg="10" md="12" sm="12" className="d-inline-block">
                      <Form.Group controlId="formBasicPassword ">
                        <Form.Label>نظر شما<span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control as="textarea" required />
                      </Form.Group>

                    </Col>
                    <Col
                      lg="10"
                      md="6"
                      sm="6"
                      className="form-group d-inline-block"
                    >
                      <Button variant="primary" type="submit">
                        ثبت
                      </Button>
                    </Col>
                  </Form>
                </Col>
              </Row>
              {/* start info */}
            </Container>
          );
        }}
      </ProductConsumer>
    );
  }
}
