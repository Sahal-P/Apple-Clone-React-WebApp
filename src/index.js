import React from 'react';
import ReactDOM from 'react-dom/client';
import {NavBarTest} from './components/navBar'
import { ImageOne } from './components/imageOne';
import { ImageTwo } from './components/imageTwo';
import { ImageThree } from './components/imageThree';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBarTest/>
    <ImageOne/>
    <ImageTwo/>
    <ImageThree/>
    <ImageOne/>
  </React.StrictMode>
);

