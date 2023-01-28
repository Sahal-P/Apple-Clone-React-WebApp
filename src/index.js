import React from 'react';
import ReactDOM from 'react-dom/client';
import {NavBarTest} from './components/navBar'
import { ImageOne } from './components/imageOne';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBarTest/>
    <ImageOne/>
    <ImageOne/>
    <ImageOne/>
    <ImageOne/>
  </React.StrictMode>
);

