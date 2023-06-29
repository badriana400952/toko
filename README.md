# react dan firebase

## file firebase
buat file firebase
```
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
import { getStorage } from '@firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBfnvT2ZgcPYiO2HQhvQeOr0vghiaQNlRo",
  authDomain: "toko-d8701.firebaseapp.com",
  projectId: "toko-d8701",
  storageBucket: "toko-d8701.appspot.com",
  messagingSenderId: "777256590443",
  appId: "1:777256590443:web:1d13acfe7debbe8c28e52e",
  measurementId: "G-7BFE6KQT15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)

```
## app js
```
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Data from './pages/Data';
import AddDataWomen from './pages/AddDataWomen';
import Home from './pages/Home';
import Men from './pages/Men';
import Women from './pages/Women';
import Layoute from './component/Layoute'
import Baby from './pages/Baby';
import DetailWomenProduk from './component/DetailWomenProduk';
import DataWomen from './component/DataWomen';
import Login from './pages/Login';
import Regis from './pages/Regis';
import AddDataMen from './pages/addDataMen';
import DataMenProduk from './component/DataMenProduk';
import DetailMen from './component/DetailMen';
import AddDataBaby from './pages/AddDataBaby';
import DataBabyProduk from './component/DataBabyProduk';
import DetailDataBaby from './component/DetailDataBaby';
import MenCarouDetail from './component/MenCarouDetail';
import BabyCarouDetail from './component/BabyCarouDetail';
import WomenCarowdetail from './component/WomenCarowdetail';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layoute />}>
          {/* page */}
          <Route index element={<Home />} />
          <Route path='men' element={<Men />} />
          <Route path='women' element={<Women />} />
          <Route path='baby' element={<Baby />} />
          {/* componen */}
          <Route path='women' element={<DataWomen />} />
          <Route path='women/:id' element={<DetailWomenProduk />} />
          <Route path='women/womencarowdetail/:id' element={<WomenCarowdetail />} />

          <Route path='baby/babydata' element={<DataBabyProduk />} />
          <Route path='baby/babycarowdetail/:id' element={<BabyCarouDetail />} />
          <Route path='baby/babydata/:id' element={<DetailDataBaby />} />

          <Route path='men/mendata' element={<DataMenProduk />} />
          <Route path='men/mendata/:id' element={<DetailMen />} />
          <Route path='men/mencarowdetail/:id' element={<MenCarouDetail />} />
          {/* User */}
          <Route path='login' element={<Login />} />
          <Route path='regis' element={<Regis />} />
          <Route path='admin' element={<Data />} />

        </Route>

        <Route path='tambah' element={<AddDataWomen />} />
        <Route path='mentambah' element={<AddDataMen />} />
        <Route path='babytambah' element={<AddDataBaby />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


```
## view Data admin
```
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
```

## view user
```
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
```
## Tambah Data

```
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

```
## detail Data
```
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
```
