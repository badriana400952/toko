import { collection, deleteDoc, doc, getDoc, getDocs } from 'firebase/firestore'
import React, { useState, useEffect } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import { db } from '../firebase'
import Table from 'react-bootstrap/Table';
import './Style.css'
import { Link } from 'react-router-dom';

const Data = () => {
    const [data, setData] = useState([])
    const [menData, setMenData] = useState([])
    const [baby, setBaby] = useState([])
    const coll = collection(db, 'toko')
    const refMen = collection(db, 'men')
    const refBaby = collection(db, 'baby')

    const viewData = async () => {
        const snapshoot = await getDocs(coll)
        // console.log(snapshoot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        setData(snapshoot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    const productMenData = async () => {
        const shotMen = await getDocs(refMen)
        // console.log(shotMen.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        setMenData(shotMen.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    const handleClick = async (d) => {
        await deleteDoc(doc(db, 'toko', d.id))

    }

    const hapusMen = async (d) => {
        await deleteDoc(doc(db, 'men', d.id))
    }


    const productBabyData = async () => {
        const shootBaby = await getDocs(refBaby)
        console.log(shootBaby.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        setBaby(shootBaby.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    const hapusBaby = async (d) => {
        await deleteDoc(doc(db, 'baby', d.id))
    }
    useEffect(() => {
        viewData()
        productMenData()
        productBabyData()
    })
    return (
        <Container>
            <Button><Link to='/tambah' className='text-light text-decoration-none'>Tambah Data Women</Link></Button>
            <Button><Link to='/mentambah' className='text-light text-decoration-none'>Tambah Data Men</Link></Button>
            <Button><Link to='/babytambah' className='text-light text-decoration-none'>Tambah Data Baby</Link></Button>
            <Row>
            <h1 className='text-center'>Tambah data Womwen</h1>

                <Table striped>
                    <thead>
                        <tr>
                            <th>Nama</th>
                            <th>Type</th>
                            <th>Ukuran</th>
                            <th>Harga</th>
                            <th>Deskripsi</th>
                            <th>Foto</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((d) =>
                                <tr key={d.id}>
                                    <td>{d.nama}</td>
                                    <td>{d.type}</td>
                                    <td>{d.ukuran}</td>
                                    <td>{d.harga}</td>
                                    <td>{d.deskripsi}</td>
                                    <td> <img className='foto' src={d.foto} alt={d.nama} /> </td>
                                    <td><Button onClick={() => handleClick(d)}>Delete</Button></td>
                                </tr>

                            )
                        }

                    </tbody>
                </Table>
            </Row>

            <Row className='my-5'>
                <h1 className='text-center'>Tambah data Mens</h1>
                <Table striped>
                    <thead>
                        <tr>
                            <th>Nama</th>
                            <th>Type</th>
                            <th>Ukuran</th>
                            <th>Harga</th>
                            <th>Deskripsi</th>
                            <th>Foto</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menData.map((d) =>
                                <tr key={d.id}>
                                    <td>{d.nama}</td>
                                    <td>{d.type}</td>
                                    <td>{d.ukuran}</td>
                                    <td>{d.harga}</td>
                                    <td>{d.deskripsi}</td>
                                    <td> <img className='foto' src={d.foto} alt={d.nama} /> </td>
                                    <td><Button onClick={() => hapusMen(d)}>Delete</Button></td>
                                </tr>

                            )
                        }

                    </tbody>
                </Table>
            </Row>
            <Row className='my-5'>
                <h1 className='text-center'>Tambah data baby</h1>
                <Table striped>
                    <thead>
                        <tr>
                            <th>Nama</th>
                            <th>Type</th>
                            <th>Ukuran</th>
                            <th>Harga</th>
                            <th>Deskripsi</th>
                            <th>Foto</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            baby.map((d) =>
                                <tr key={d.id}>
                                    <td>{d.nama}</td>
                                    <td>{d.type}</td>
                                    <td>{d.ukuran}</td>
                                    <td>{d.harga}</td>
                                    <td>{d.deskripsi}</td>
                                    <td> <img className='foto' src={d.foto} alt={d.nama} /> </td>
                                    <td><Button onClick={() => hapusBaby(d)}>Delete</Button></td>
                                </tr>

                            )
                        }

                    </tbody>
                </Table>
            </Row>
        </Container>
    )
}

export default Data