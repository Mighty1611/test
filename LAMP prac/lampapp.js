import logo from './logo.svg';
import styled from 'styled-components';
import React, { useState } from 'react';

// import './App.css';


// Style Component for Room Componenet
// styled.div makes it a div
const Room = styled.div` 
  position: relative;
  width: 500px;
  height: 500px;
  border: 10px solid black;
  margin: 0 auto;
`;


const Wrapper = styled.div`
  position: absolute;
  left: ${props => (props.position === "left" ? '20px' : '380px')};
  top: 20px;
  background: ${props => (props.lampOn ? 'orange': 'lightgrey')};
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const Lamp = ({lampOn, position}) => (
  <Wrapper lampOn={lampOn} position={position}>
    <div />
  </Wrapper>
);

const Button = styled.button`
  position: absolute;
  left:  ${props => (props.position === 'left' ? '20px' : '380px')};
  bottom: 20px;
  background: white;
  color: black;
  border: 1px solid black;
  border-radius: 10px;
  width: 100px;
  height: 50px;
  cursor: pointer;
`;

const LightSwitch = ({name, callback, switchOn, position}) => (
  <Button onClick = {callback} position={position}>
    {switchOn ? 'On': 'Off'}
  </Button>
);


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function RoomLamps() {
   const [isLampOneOn, setIsLampOneOn] = useState(false);
   const [isLampTwoOn, setIsLampTwoOn] = useState(true);

   const handleLightSwitchOne = () => setIsLampOneOn( prev => !prev);
   const handleLightSwitchTwo = () => setIsLampTwoOn( prev => !prev);

   return(
      <Room>
        <Lamp lampOn={isLampOneOn} position='left'></Lamp>
        <Lamp lampOn={isLampTwoOn} position='right'></Lamp>
        <LightSwitch
          name='one'
          callback={handleLightSwitchOne}
          switchOn={isLampOneOn}
          position='left'
        >
        </LightSwitch>
        <LightSwitch
          name='two'
          callback={handleLightSwitchTwo}
          switchOn={isLampTwoOn}
          position='right'
        ></LightSwitch>
      </Room>
   );
}

export default RoomLamps;
