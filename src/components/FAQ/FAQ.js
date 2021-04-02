import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {FAQcontents} from '../../data/dataStore';



const FAQ = () => (
  <Container>
    <h2>FAQ</h2>
    <Hero title={FAQcontents.title} image={FAQcontents.image} />
    <p>{FAQcontents.description}</p>
  </Container>
);




export default FAQ;