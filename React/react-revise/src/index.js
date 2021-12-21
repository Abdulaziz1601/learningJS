import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import {Btn} from './App';
import BootstrapTest from './BootstrapTest';

// Here we can use inheritance, so we can reuse our simple btn and make Big btn out of it
const BigBtn = styled(Btn)`
  width:245px;
  text-align: center;
`;
ReactDOM.render(
    <StrictMode>
      <App />,
      <BigBtn as="a">Send Data</BigBtn>,
      <BootstrapTest/>
    </StrictMode>,
  document.getElementById('root')
);