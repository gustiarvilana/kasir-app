import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { numberWithCommas } from "../utils/util";

const MenuCard = ({ menu }) => {
    return (
        < Col md={4} >
            <Card className="mb-3 shadow">
                <Card.Img height={150} width={100} variant="top" loading='lazy' src={"assets/images/" + menu.category.nama.toLowerCase() + "/" + menu.gambar} i />
                <Card.Body>
                    <Card.Title>{menu.nama}</Card.Title>
                    <Card.Text>
                        <p>Rp. {numberWithCommas(menu.harga)}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col >
    )
}

export default MenuCard
