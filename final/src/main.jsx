import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'; // Import createRoot from the correct location
import App from 'src/App.jsx';
import './index.html'; 
import './index.css';
import Layout from 'src/routes/layout.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeedView from 'src/routes/feedView.jsx';
import CreateView from 'src/routes/createView.jsx';
import PostView from 'src/routes/postView.jsx';
import EditView from 'src/routes/editView.jsx';

// Create a component to contain route configuration
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>n
      <Routes>
        <Route path='/'>
          <Route index={false} element={<Layout />}>
            <Route index={true} element={<App />} />
            <Route index={false} path="/feed" element={<FeedView />} />
            <Route index={false} path='/create-post' element={<CreateView />} />
            <Route index={false} path="/feed/post/:id" element={<PostView />} />
            <Route index={false} path="/feed/edit/:id" element={<EditView />} />

          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)