import React from '/react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './routes/layout.jsx'
import { BrowserRouter, Route, Routes, useRoutes } from "react-router-dom";
import FeedView from './routes/feedView.jsx'
import CreateView from './routes/createView.jsx'
import PostView from './routes/postView.jsx'
import EditView from './routes/editView.jsx'

const element = useRoutes([
  {
    path: "/",
    element: <Layout>
      <App />
    </Layout>
  },
  {
    path: "/feed",
    element: <Layout>
      <FeedView />
    </Layout>
  },
  {
    path: "/create-post",
    element: <Layout>
      <CreateView />
    </Layout>
  },
  {
    path: "/feed/post/:id",
    element: <Layout>
      <PostView />
    </Layout>
  },
  {
    path: "/feed/edit/:id",
    element: <Layout>
      <EditView />
    </Layout>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {element}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
