import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import { HasilComponent, ListComponent, NavbarComponent } from './components';

import React, { Component } from 'react'
import { API_URL } from './utils/constants';
import axios from 'axios';
import MenuCard from './components/MenuCard';
import swal from 'sweetalert';

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      menus: [],
      categories_aktif: "Makanan",
      keranjangs: [],
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

    axios.get(API_URL + "keranjangs")
      .then(res => {
        const keranjangs = res.data;
        this.setState({ keranjangs });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  componentDidUpdate(prevState) {
    if (prevState.keranjangs !== this.state.keranjangs) {
      axios.get(API_URL + "keranjangs")
        .then(res => {
          const keranjangs = res.data;
          this.setState({ keranjangs });
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }

  addCart = (value) => {
    // cek keranjang
    axios.get(API_URL + "keranjangs?product.id=" + value.id)
      .then(res => {
        const menus = res.data;
        if (menus.length !== 0) {
          const keranjang = {
            jumlah: menus[0].jumlah + 1,
            total_harga: menus[0].total_harga + value.harga,
            product: value,
          }
          axios.put(API_URL + "keranjangs/" + menus[0].id, keranjang)
            .then(res => {
              swal({
                title: "Suskes",
                text: "Produk sudah dimaksukan ke keranjang!",
                icon: "success",
                button: false,
                timer: 1000,
              });
            })
            .catch((error) => {
              console.log(error);
            })
        } else {
          const keranjang = {
            jumlah: 1,
            total_harga: value.harga,
            product: value,
          }
          axios.post(API_URL + "keranjangs", keranjang)
            .then(res => {
              swal({
                title: "Suskes",
                text: "Produk sudah dimaksukan ke keranjang!",
                icon: "success",
                button: false,
                timer: 1000,
              });
            })
            .catch((error) => {
              console.log(error);
            })
        }
      })
      .catch((error) => {
        swal({
          title: "Gagal",
          text: "Error! =>" + error,
          icon: "error",
          button: 'Ok, Paham!',
        });
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
    const { menus, categories_aktif, keranjangs } = this.state;
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
                      addCart={this.addCart}
                    />
                  ))}
                </Row>
              </Col>
              <HasilComponent
                keranjangs={keranjangs}
              />
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}
