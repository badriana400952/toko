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


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layoute />}>
          <Route index element={<Home />} />
          <Route path='men' element={<Men />} />
          <Route path='women' element={<Women />} />
          <Route path='baby' element={<Baby />} />
          <Route path='baby/babydata' element={<DataBabyProduk />} />
          <Route path='baby/babydata/:id' element={<DetailDataBaby />} />
          <Route path='login' element={<Login />} />
          <Route path='regis' element={<Regis />} />
          <Route path='women' element={<DataWomen />} />
          <Route path='men/mendata' element={<DataMenProduk />} />
          <Route path='men/mendata/:id' element={<DetailMen />} />
          <Route path='women/:id' element={<DetailWomenProduk />} />
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
