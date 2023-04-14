import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import { Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import './Stylee.css'
const DataBabyProduk = () => {

  const [babyy, setBabyy] = useState([])
  const colRefBaby = collection(db, 'baby')
  const navigate = useNavigate()

  useEffect(() => {
    const dataBaby = async () => {
      const shootBaby = await getDocs(colRefBaby)
      console.log(shootBaby.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      setBabyy(shootBaby.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    dataBaby()
  })

  const detailBaby = (d) => {
    navigate(`/baby/babydata/${d.id}`)
  }
  return (
    <Container className='my-5'>
      <h3 className='text-center'>Baby Produk</h3>
      <Row>
        {
          babyy.map((d) => {
            return (
              <Col key={d.id} sm={3} xs={6} >
                <Card border="light" style={{ width: '18rem' }} onClick={()=>detailBaby(d)} >
                  <Card.Img src={d.foto} alt={d.nama} className="fotoProduk hover" />
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

export default DataBabyProduk