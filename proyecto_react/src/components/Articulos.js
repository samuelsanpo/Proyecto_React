import {Link} from 'react-router-dom'
import React, { useState} from 'react'
import style from '../cssmodules/cardstyle.module.css'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'


function Articulo(props)  {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const imagen={
        height:'200px',
        
        }

    return (
        
            <div className={style.card}>
                <div className={style.containerI}>
                </div>            
                <div className={style.containerD}>
                    <h4>{props.titulo}</h4>
                    <p>{props.precio}</p> 
                    <button   className={style.buttonx} onClick={handleShow}>Show Details</button>
                    <Modal size="xl" show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title><h1>{props.titulo}</h1></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Container>
                        <Row className="show-grid">
                            <Col  xs={8} md={4}>
                                <div style={imagen} className="p-3  bg-secondary text-white"></div>
                            </Col>
                            <Col xs={8} md={4}>
                                <Row><h4 className={style.h3}>Precio:</h4></Row>
                                <Row><h4 className={style.h3}>Modelo:</h4></Row>                                
                                <Row><h4 className={style.h3}>Envio:</h4></Row>
                            </Col>
                            <Col xs={4} md={4}>
                            <Row><p>{props.Price}</p></Row>
                            <Row><p>{props.Model}</p></Row>                            
                            <Row><p>{props.Envio}</p></Row>
                            </Col>
                            
                            
                        </Row>
                        <Row>
                            <Col xs={6} md={4}>
                                <Row><h4 className={style.h4}>Descripcion:</h4> </Row>
                                
                            </Col>
                            <Col xs={8} md={6}>
                                <Row> <p>{props.des}</p> </Row>                           
                            </Col>
                            </Row>
                        
                    </Container>
                     
                    
                        
                    </Modal.Body>
                    <Modal.Footer>
                    <button type="button" class="btn btn-primary btn-lg">Buy Now</button>
                    <button onHide={handleClose} type="button" class="btn btn-secondary btn-lg">Close</button>
                    </Modal.Footer>
                    </Modal>
                </div>
            </div>
       
    );
}
export default Articulo;

