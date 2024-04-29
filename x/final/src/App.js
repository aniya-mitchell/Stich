import React from 'react';
import './App.css'
import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'
import Layout from './routes/layout.js'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FeedView from './routes/feedView.js'
import CreateView from './routes/createView.js'
import PostView from './routes/postView.js'
import EditView from './routes/editView.js'



function App() {
  let element = useRoutes([
    {
      path:"/feed" ,
      element:<FeedView />
    },
    {
      path:"/feed/edit/:id",
      element: <EditPost data={posts} />
    },
    {
      path:"/create-post",
      element: <CreatePost />
    },
    {
      path:"/feed/edit/:id",
      element: <PostView />
    }
    
  ]);

  return (
    <>
      <div className='App'>
        <h1 style={{ margin: '.5em' }}>Post Your Yarn Projects</h1>
        <h3>Share your favorite projects, stictches, products, ect with people just like you.</h3>

  
        <div className="card">
          <Link to={'/feed'}>
            <button>
              Head to Stichify Feed
            </button>
          </Link>
        </div>
      </div>


    </>
  )
}

export default App
