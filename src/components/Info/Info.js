import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {Infocontents} from '../../data/dataStore';

const Info = () => (
  <Container>
    <h2>Info</h2>
    <Hero title={Infocontents.title} image={Infocontents.image}/>
    <p>{Infocontents.description}</p>
  </Container>
);
export default Info;