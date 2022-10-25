import axios from 'axios'
import React, { Component } from 'react'
import { Col, ListGroup, Row } from 'react-bootstrap'
import { API_URL } from '../utils/constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils, faCoffee, faCheese } from '@fortawesome/free-solid-svg-icons'

const Icon = ({ category }) => {
    if (category === "Makanan") return <FontAwesomeIcon icon={faUtensils} style={{ marginRight: "10" }} />
    if (category === "Minuman") return <FontAwesomeIcon icon={faCoffee} style={{ marginRight: "5" }} />
    if (category === "Cemilan") return <FontAwesomeIcon icon={faCheese} style={{ marginRight: "10" }} />

    return <FontAwesomeIcon icon={faUtensils} style={{ marginRight: "10" }} />
}

export default class ListComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            categories: [],
        }
    }

    componentDidMount() {
        axios.get(API_URL + "categories")
            .then(res => {
                const categories = res.data;
                this.setState({ categories });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        const { categories } = this.state
        const { changeCategory, categories_aktif } = this.props
        return (
            <Col md={3}>
                <h2>List Categori</h2>
                <hr />
                <ListGroup style={{ cursor: "ponter" }}>
                    {categories && categories.map((category) => (
                        <ListGroup.Item
                            key={category.id}
                            onClick={() => changeCategory(category.nama)}
                            className={categories_aktif === category.nama && 'class-aktif'}
                        >
                            <Icon category={category.nama} /> <strong>{category.nama}</strong>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Col>
        )
    }
}
