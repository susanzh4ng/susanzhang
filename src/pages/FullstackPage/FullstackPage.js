import React from 'react'
import Container from 'react-bootstrap/Container';
import projects from '../../projects'
import CardSZ from '../../components/CardSZ/CardSZ'
import "../ProjectsPage/ProjectsPage.css";

const FullstackPage = () => {

  const cards = projects
  .filter(card => card.fullStackPage === true)
  .map(card => {
    return (<CardSZ
      key={card.id}
      {...card}
      />
    )
})

  return (
    <Container>
    <section className="cardsList">
      <h1 className='h1'>Full-stack Projects</h1>
      <p><i>Coding for care.</i> Explore the cards below to learn more.</p>
      {cards}
    </section>
  </Container>
  )
}

export default FullstackPage