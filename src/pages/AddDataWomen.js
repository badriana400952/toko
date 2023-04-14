import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { db, storage } from '../firebase'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { addDoc, collection } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { Link, useNavigate } from 'react-router-dom';

const AddDataWomen = () => {

    const [nama, setNama] = useState("")
    const [type, setType] = useState("")
    const [ukuran, setUkuran] = useState("")
    const [harga, setHarga] = useState(0)
    const [deskripsi, setDeskripsi] = useState("")
    const [foto, setFoto] = useState(null)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        const dekRef = collection(db, 'toko')
        e.preventDefault()
        try {
            const storageRef = ref(storage, `foto/${Date.now() + foto.name}`)
            const uploadTask = uploadBytesResumable(storageRef, foto)
            uploadTask.on(() => {
                alert('gagal di upload')
            }, () => {
                getDownloadURL(uploadTask.snapshot.ref).then(async (downloadUrl) => {
                    await addDoc(dekRef, {
                        nama: nama,
                        type: type,
                        ukuran: ukuran,
                        harga: harga,
                        deskripsi: deskripsi,
                        foto: downloadUrl
                    })
                })
            })
        } catch (err) {
            alert('gagal menambahkan data')
        }
        navigate('/admin')
    }
    return (
        <div>
            <Container>
                <Button className='bg-danger border-none'>
                    <Link to='/admin' className='text-light text-decoration-none'>Batal</Link>
                </Button>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nama</Form.Label>
                        <InputGroup className="mb-3" >
                            <Form.Control
                                type="text"
                                name='nama'
                                onChange={(e) => setNama(e.target.value)}
                                placeholder="Nama produk"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Type</Form.Label>
                        <InputGroup className="mb-3" >
                            <Form.Control
                                name='type'
                                type="text"
                                onChange={(e) => setType(e.target.value)}
                                placeholder="Type produk"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Ukuran</Form.Label>
                        <InputGroup className="mb-3" >
                            <Form.Control
                                type="text"
                                name='ukuran'
                                onChange={(e) => setUkuran(e.target.value)}
                                placeholder="Ukuran"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Harga</Form.Label>
                        <InputGroup className="mb-3" >
                            <Form.Control
                                type="number"
                                name='harga'
                                onChange={(e) => setHarga(e.target.value)}
                                placeholder="Harga"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Deskripsi</Form.Label>
                        <Form.Floating className="mb-3">
                            <Form.Control
                                type="text"
                                name='deskripsi'
                                onChange={(e) => setDeskripsi(e.target.value)}
                                placeholder="Deskripsi"
                            />
                        </Form.Floating>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Foto</Form.Label>
                        <InputGroup className="mb-3" >
                            <Form.Control
                                name='file'
                                type='file'
                                onChange={(e) => setFoto(e.target.files[0])}
                                placeholder="Foto"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </Form.Group>


                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default AddDataWomen
