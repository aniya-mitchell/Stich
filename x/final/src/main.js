import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'
import Layout from './routes/layout.js'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FeedView from './routes/feedView.js'
import CreateView from './routes/createView.js'
import PostView from './routes/postView.js'
import EditView from './routes/editView.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
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

