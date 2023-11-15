import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/User/Home.jsx';
import CompetitionVote from './pages/User/CompetitionVote.jsx';
import CompetitionImage from './components/Competition/CompetitionImage';
import ImageDetail from './pages/User/ImageDetail.jsx';
import Store from './redux/Store.jsx'
import { Provider } from 'react-redux'
import CompetitionList from './pages/User/CompetitionList.jsx';
import Login from './pages/User/Login.jsx';
import Signup from './pages/User/Signup.jsx';
import ImageUploadPage from './pages/Admin/ImageUploadPage.jsx'
import ExhibitionPage from './pages/User/ExhibitionPage.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/competitionvote' element={<CompetitionVote/>}/>
        <Route path='/test' element={<CompetitionImage/>}/>
        <Route path='/imageDetail' element={<ImageDetail/>}/>
        <Route path='/competitionList' element={<CompetitionList/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/admin/imageUpload' element={<ImageUploadPage/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/exhibition' element={<ExhibitionPage/>}/>
      </Routes>
    </BrowserRouter>
  </Provider>
  
);

