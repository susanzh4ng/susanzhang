import React, { useState, useEffect } from 'react';
//import { Button, Alert, Breadcrumb, Card, Container, Row, Col} from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css'
import projects from '../../projects'
import CardSZ from '../../components/CardSZ/CardSZ'
import "./LandingPage.css";

const LandingPage = () => {
  const [cardsShow, setCardsShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const introHeight = document.querySelector('.intro').offsetHeight;
      const scrollY = window.scrollY;
      if (scrollY >= introHeight / 2) {
        setCardsShow(true);
      } else {
        setCardsShow(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cards = projects
    .filter(card => card.recentProjects === true)
    .map(card => {
      return (<CardSZ
        key={card.id}
        {...card}
        />
      )
  })

  return (
    <div className='LandingPage'>
      <Container>
        <div className='intro'>
          <h1>Hello there!</h1>
          <p><strong><i>Susan Zhang</i></strong> is a <strong><i>full-stack developer and UI/UX designer</i></strong> who aims to create modern and user-oriented applications. As a <strong><i>student at the University of Texas at Dallas</i></strong>, she's currently pursuing a degree in Computer Science alongside a certificate in Applied Experience Design and Research.</p>
          <i>Designer, currently at UTDesign - UT Dallas.</i>
        </div>

        { cardsShow && <section className="cardsList">
          <h2>Recent Projects</h2>
          {cards}
        </section>}
        {/*<h1>LandingPage</h1>
        <Breadcrumb>
          <Breadcrumb.Item>heyy</Breadcrumb.Item>
          <Breadcrumb.Item>heyy2</Breadcrumb.Item>
          <Breadcrumb.Item active>heyy3</Breadcrumb.Item>
        </Breadcrumb>
        <Button>Heyyy</Button>
        <Alert variant='primary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend, purus nec egestas commodo, neque risus condimentum ligula, a rhoncus urna turpis a tortor. Sed placerat malesuada ligula, quis blandit leo. Aenean commodo bibendum odio, ac pretium ligula pharetra quis. Integer imperdiet eros lacus, quis luctus leo convallis non. Suspendisse condimentum hendrerit faucibus. Praesent in velit eu felis vestibulum faucibus. Phasellus risus neque, posuere id pharetra nec, mattis eget lorem.</Alert>
        <Alert variant='primary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend, purus nec egestas commodo, neque risus condimentum ligula, a rhoncus urna turpis a tortor. Sed placerat malesuada ligula, quis blandit leo. Aenean commodo bibendum odio, ac pretium ligula pharetra quis. Integer imperdiet eros lacus, quis luctus leo convallis non. Suspendisse condimentum hendrerit faucibus. Praesent in velit eu felis vestibulum faucibus. Phasellus risus neque, posuere id pharetra nec, mattis eget lorem.</Alert>
        <Alert variant='primary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend, purus nec egestas commodo, neque risus condimentum ligula, a rhoncus urna turpis a tortor. Sed placerat malesuada ligula, quis blandit leo. Aenean commodo bibendum odio, ac pretium ligula pharetra quis. Integer imperdiet eros lacus, quis luctus leo convallis non. Suspendisse condimentum hendrerit faucibus. Praesent in velit eu felis vestibulum faucibus. Phasellus risus neque, posuere id pharetra nec, mattis eget lorem.</Alert>
        <Alert variant='primary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend, purus nec egestas commodo, neque risus condimentum ligula, a rhoncus urna turpis a tortor. Sed placerat malesuada ligula, quis blandit leo. Aenean commodo bibendum odio, ac pretium ligula pharetra quis. Integer imperdiet eros lacus, quis luctus leo convallis non. Suspendisse condimentum hendrerit faucibus. Praesent in velit eu felis vestibulum faucibus. Phasellus risus neque, posuere id pharetra nec, mattis eget lorem.</Alert>
        <Alert variant='primary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend, purus nec egestas commodo, neque risus condimentum ligula, a rhoncus urna turpis a tortor. Sed placerat malesuada ligula, quis blandit leo. Aenean commodo bibendum odio, ac pretium ligula pharetra quis. Integer imperdiet eros lacus, quis luctus leo convallis non. Suspendisse condimentum hendrerit faucibus. Praesent in velit eu felis vestibulum faucibus. Phasellus risus neque, posuere id pharetra nec, mattis eget lorem.</Alert>
        <Alert variant='primary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend, purus nec egestas commodo, neque risus condimentum ligula, a rhoncus urna turpis a tortor. Sed placerat malesuada ligula, quis blandit leo. Aenean commodo bibendum odio, ac pretium ligula pharetra quis. Integer imperdiet eros lacus, quis luctus leo convallis non. Suspendisse condimentum hendrerit faucibus. Praesent in velit eu felis vestibulum faucibus. Phasellus risus neque, posuere id pharetra nec, mattis eget lorem.</Alert>
        <Alert variant='primary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend, purus nec egestas commodo, neque risus condimentum ligula, a rhoncus urna turpis a tortor. Sed placerat malesuada ligula, quis blandit leo. Aenean commodo bibendum odio, ac pretium ligula pharetra quis. Integer imperdiet eros lacus, quis luctus leo convallis non. Suspendisse condimentum hendrerit faucibus. Praesent in velit eu felis vestibulum faucibus. Phasellus risus neque, posuere id pharetra nec, mattis eget lorem.</Alert>
        <Alert variant='primary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend, purus nec egestas commodo, neque risus condimentum ligula, a rhoncus urna turpis a tortor. Sed placerat malesuada ligula, quis blandit leo. Aenean commodo bibendum odio, ac pretium ligula pharetra quis. Integer imperdiet eros lacus, quis luctus leo convallis non. Suspendisse condimentum hendrerit faucibus. Praesent in velit eu felis vestibulum faucibus. Phasellus risus neque, posuere id pharetra nec, mattis eget lorem.</Alert>
        <Alert variant='primary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend, purus nec egestas commodo, neque risus condimentum ligula, a rhoncus urna turpis a tortor. Sed placerat malesuada ligula, quis blandit leo. Aenean commodo bibendum odio, ac pretium ligula pharetra quis. Integer imperdiet eros lacus, quis luctus leo convallis non. Suspendisse condimentum hendrerit faucibus. Praesent in velit eu felis vestibulum faucibus. Phasellus risus neque, posuere id pharetra nec, mattis eget lorem.</Alert>
        <Card>
          <Card.Img />
          <Card.Body>
            <Card.Title>Example</Card.Title>
            <Card.Text>Lorem ipsum dolor sit amet</Card.Text>
          </Card.Body>
  </Card> */}
      </Container>
    </div>
  )
}

export default LandingPage