import { doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { db } from '../firebase'

const DetailDataBaby = () => {
    const [bajuBaby, setBajuBaby] = useState([])
    const { id } = useParams()
    const condoc = doc(db, 'baby', id)


    useEffect(() => {
     const detailBabyId = async () => {
        const snapshoot = await getDoc(condoc)
        if(snapshoot.exists) {
            setBajuBaby(snapshoot.data())
        } else {
            alert('ko nggak ada data wkwkw')
        }
     }
     detailBabyId()

    })


    return (
        <div>
        <Container className='my-5'>
          <Row>
            <Col>
              <img src={bajuBaby.foto} alt={bajuBaby.nama} />
            </Col>
            <Col>
              <h3 className='font'>{bajuBaby.nama}</h3>
              <p className='font2'>Rp. {bajuBaby.harga}</p>
              <p className='font2'> Type {bajuBaby.type}</p>
              <p className='font2'>Deskription</p>
              <p className='font2'> {bajuBaby.deskripsi}</p>
            </Col>
          </Row>
        </Container>
      </div>
    )
}

export default DetailDataBaby