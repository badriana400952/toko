import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { db } from '../firebase'
    import './Stylee.css'
const DataMenProduk = () => {
    const [menProduk, setMenProduk] = useState([])
    const datamen = collection(db, 'men')
    const navigate = useNavigate()
    
    useEffect(() => {
        const men = async () => {
            const snapMen = await getDocs(datamen)
            console.log(snapMen.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            setMenProduk(snapMen.docs.map((data) => ({ ...data.data(), id: data.id })))
        }
        men()
    },[])
    const detailClick= async(d)=> {
        // alert('ok')
        navigate(`/men/mendata/${d.id}`)
    }

    return (
        <Container className='my-5'>
        <h3 className='text-center'>Women Men</h3>
            <Row>
                {
                    menProduk.map((d) => {
                        return (
                            <Col key={d.id} sm={3} xs={6} >
                                <Card border="light" style={{ width: '18rem'}} onClick={()=> detailClick(d)}  >
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

export default DataMenProduk