import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import Refs from './Refs';
// import Portals from './Portals';
import Context from './Context';
// import {Btn} from './App';

// Here we can use inheritance, so we can reuse our simple btn and make Big btn out of it
// const BigBtn = styled(Btn)`
  // width:245px;
  // text-align: center;
// `;
ReactDOM.render(
    <StrictMode>
      <Context />
    </StrictMode>,
  document.getElementById('root')
);