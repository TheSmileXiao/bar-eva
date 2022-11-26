import React, { useState } from 'react';
import Navbar from '../Navbar';
import { useNavigate } from 'react-router-dom';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroBtn
} from './HeroElements';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();

  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroBtn onClick={() => navigate("/cnCarta")}>面对面<br/>中国菜</HeroBtn>
          <HeroBtn onClick={() => navigate("/esCarta")}>Cartas</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
