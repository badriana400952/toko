import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { db } from '../firebase'
import Card from 'react-bootstrap/Card';
import './Stylee.css'
import { useNavigate } from 'react-router-dom';



const DataWomen = () => {
    const [data, setData] = useState([])
    const navigate = useNavigate()
    const colRef = collection(db, 'toko')

    const viewData = async () => {
        const snapshoot = await getDocs(colRef)
        // console.log(snapshoot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        setData(snapshoot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    useEffect(() => {
        viewData()
    }, )

    
 const detail=(id)=>{
    navigate(`/women/${id}`)
 }

    return (
        <Container className='my-5'>
        <h3 className='text-center'>Women Produk</h3>
            <Row>
                {
                    data.map((d) => {
                        return (
                            <Col key={d.id} sm={3} xs={6} >
                                <Card border="light" style={{ width: '18rem' }} onClick={()=> detail(d.id)} >
                                    <Card.Img  src={d.foto} alt={d.nama} className="fotoProduk hover" />
                                    <Card.Body className='card-body'>
                                        <Card.Title>{d.nama}</Card.Title>
                                        <Card.Text className="produk">IDR. {d.harga}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>

          
        </Container>
    )
}

export default DataWomen