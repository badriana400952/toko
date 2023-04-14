import { doc, getDoc, } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { db } from '../firebase'
import './Stylee.css'
import { useParams } from 'react-router-dom';

const DetailWomenProduk = () => {

  const [data, setData] = useState([])
  const { id } = useParams()
  const colRef = doc(db, 'toko', id)
  
  const detail = async () => {
    const snapshoot = await getDoc(colRef)
    if (snapshoot.exists) {
      setData(snapshoot.data())
    } else {
      alert('no data')
    }
  }

  useEffect(() => {
    detail()
  }, [])

  return (
    <div>
      <Container className='my-5'>
        <Row>
          <Col>
            <img src={data.foto} alt={data.nama} />
          </Col>
          <Col>
            <h3 className='font'>{data.nama}</h3>
            <p className='font2'>Rp. {data.harga}</p>
            <p className='font2'> Type {data.type}</p>
            <p className='font2'>Deskription</p>
            <p className='font2'> {data.deskripsi}</p>
          </Col>
        </Row>
      </Container>
    </div>

  )
}

export default DetailWomenProduk