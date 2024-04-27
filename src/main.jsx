import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './routes/Layout';
import CrewDetail from './routes/CrewDetail.jsx';
import CreateCrewmate from './routes/CreateCrewmate.jsx';
import DetailView from './routes/DetailView.jsx';
import EditCrewmate from './routes/EditCrewmate.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} path='/' element={<App />} />
          <Route index={false} path="/gallery" element={<CrewDetail />} />
          <Route index={false} path="/create" element={<CreateCrewmate />} />
          <Route index={false} path="/details/:id" element={<DetailView />} />
          <Route index={false} path="/details/:id/edit" element={<EditCrewmate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
