import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App.js';
import './index.css';
import Layout from './routes/layout.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FeedView from './routes/feedView.js';
import CreateView from './routes/createView.js';
import PostView from './routes/postView.js';
import EditView from './routes/editView.js';

function App() {
  let element = useRoutes([
    {
      path: "/feed",
      element: React.createElement(FeedView, null)
    },
    {
      path: "/feed/edit/:id",
      element: React.createElement(EditPost, { data: posts })
    },
    {
      path: "/create-post",
      element: React.createElement(CreatePost, null)
    },
    {
      path: "/feed/edit/:id",
      element: React.createElement(PostView, null)
    }
  ]);

  return (
    React.createElement(React.Fragment, null,
      React.createElement("div", { className: 'App' },
        React.createElement("h1", { style: { margin: '.5em' } }, "Post Your Yarn Projects"),
        React.createElement("h3", null, "Share your favorite projects, stitches, products, etc with people just like you."),
        React.createElement("div", { className: "card" },
          React.createElement(Link, { to: '/feed' },
            React.createElement("button", null, "Head to Stichify Feed")
          )
        )
      )
    )
  );
}
