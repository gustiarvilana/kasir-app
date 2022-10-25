import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import { HasilComponent, ListComponent, NavbarComponent } from './components';

import React, { Component } from 'react'
import { API_URL } from './utils/constants';
import axios from 'axios';
import MenuCard from './components/MenuCard';

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      menus: [],
      categories_aktif: "Makanan",
    }
  }

  componentDidMount() {
    axios.get(API_URL + "products?category.nama=" + this.state.categories_aktif)
      .then(res => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  changeCategory = (value) => {
    this.setState({
      categories_aktif: value,
      menus: [],
    })
    axios.get(API_URL + "products?category.nama=" + value)
      .then(res => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    const { menus, categories_aktif } = this.state;
    return (
      <div className="App">
        <NavbarComponent />
        <div className='mt-3'>
          <Container fluid>
            <Row>
              <ListComponent changeCategory={this.changeCategory} categories_aktif={categories_aktif} />
              <Col>
                <h2>Daftar Menu</h2>
                <hr />
                <Row>
                  {menus && menus.map((menu) => (
                    <MenuCard
                      key={menu.id}
                      menu={menu}
                    />
                  ))}
                </Row>
              </Col>
              <HasilComponent />
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}
