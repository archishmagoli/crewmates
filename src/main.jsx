import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './routes/Layout';
import CrewDetail from './routes/CrewDetail.jsx';
import CreateCrewmate from './routes/CreateCrewmate.jsx';
import DetailView from './routes/DetailView.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/crewmates" element={<Layout />}>
          <Route index={true} path='/crewmates' element={<App />} />
          <Route index={false} path="/crewmates/gallery" element={<CrewDetail />} />
          <Route index={false} path="/crewmates/create" element={<CreateCrewmate />} />
          <Route index={false} path="/crewmates/details/:id" element={<DetailView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
