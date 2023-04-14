import { doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { db } from '../firebase'

const DetailMen = () => {
    const { id } = useParams()
    const [detail, setDetail] = useState([])
    const docData = doc(db, 'men', id)

    useEffect(() => {

        const detaildatas = async () => {
            const snapshoot = await getDoc(docData)
            if (snapshoot.exists) {
                setDetail(snapshoot.data())
            } else {
                alert('no data')
            }
        }
        detaildatas()
    })



    return (
        <div>
        <Container className='my-5'>
          <Row>
            <Col>
              <img src={detail.foto} alt={detail.nama} />
            </Col>
            <Col>
              <h3 className='font'>{detail.nama}</h3>
              <p className='font2'>Rp. {detail.harga}</p>
              <p className='font2'> Type {detail.type}</p>
              <p className='font2'>Deskription</p>
              <p className='font2'> {detail.deskripsi}</p>
            </Col>
          </Row>
        </Container>
      </div>
  
    )
}

export default DetailMen