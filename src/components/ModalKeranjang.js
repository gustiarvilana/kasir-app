import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { numberWithCommas } from "../utils/util";

const ModalKeranjang = ({
  showModal,
  handleClose,
  keranjangDetail,
  jumlah,
  keterangan,
  tambahHandler,
  kurangHandler,
  submitHandler,
  changeHandler,
}) => {
  if (keranjangDetail) {
    return (
      <>
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              {keranjangDetail.product.nama}{" "}
              <strong>
                (Rp. {numberWithCommas(keranjangDetail.product.harga)})
              </strong>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={submitHandler}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Total Harga : </Form.Label>
                <p>
                  <strong>
                    Rp. {numberWithCommas(keranjangDetail.total_harga)}
                  </strong>
                </p>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Jumlah :</Form.Label>
                <br />
                <Button>
                  <FontAwesomeIcon
                    icon={faMinus}
                    onClick={() => kurangHandler()}
                  />
                </Button>
                <strong className="mx-3"> {jumlah} </strong>
                <Button>
                  <FontAwesomeIcon
                    icon={faPlus}
                    onClick={() => tambahHandler()}
                  />
                </Button>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Keterangan</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="keterangan"
                  placeholder="Contoh= Pedas, Nasi Setengah"
                  value={keterangan}
                  onChange={(event) => changeHandler(event)}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Simpan Perubahan
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger">
              <FontAwesomeIcon icon={faTrash} /> {"  "}
              Hapus Pesanan!
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  } else {
    return (
      <>
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Kosong</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Total Harga : </Form.Label>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Jumlah</Form.Label>
                <Button>
                  <FontAwesomeIcon icon={faMinus} />
                </Button>
                <Form.Control type="text" placeholder="pedas=2, manis=4" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Keretrangan</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
};

export default ModalKeranjang;
