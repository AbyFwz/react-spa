/* React Mandatory */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
/* Stylesheet */
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
/* Component */
import CharacterList from './pages/character-list/';
import CharacterDetail from './pages/character-detail/';
import CharacterLocation from './pages/character-by-location/';
import Header from './components/header';
import Footer from './components/footer';
import { Col, Container, Row } from 'react-bootstrap';
import { LocalStorageProvider } from './contexts/LocalStorageContext';
import MyComponent from './pages/testing/MyComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const router = createBrowserRouter([
//   {
//       path: "/",
//       element: <CharacterList />
//   },
//   {
//       path: "/character-details",
//       element: <CharacterDetail />
//   },
//   {
//       path: "/character-locations",
//       element: <CharacterLocation />
//   }
// ]);
root.render(
  <React.StrictMode>
    <LocalStorageProvider>
      <BrowserRouter>
        <Container className='contact-content debug-border'>
          <Row>
            <Col><Header /></Col>
          </Row>
          <Row className='justify-content-center align-items-center d-flex'>
            <Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto">
              <Routes>
                <Route path="/" element={<CharacterList />} />
                <Route path="/character-details/:id" element={<CharacterDetail />} />
                <Route path="/character-locations" element={<CharacterLocation />} />
                <Route path="/character-locations.details/:id" element={<CharacterLocation />} />
                <Route path="/testing" element={<MyComponent />} />
              </Routes>
            </Col>
          </Row>
          <Row>
            <Col><Footer /></Col>
          </Row>
        </Container>
      </BrowserRouter>
    </LocalStorageProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
