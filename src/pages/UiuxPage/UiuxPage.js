import React from 'react'
import Container from 'react-bootstrap/Container';
import projects from '../../projects'
import CardSZ from '../../components/CardSZ/CardSZ'
import NavBar from '../../components/NavBar/NavBar';
import "../ProjectsPage/ProjectsPage.css";

const UiuxPage = () => {

  const cards = projects
    .filter(card => card.uiuxPage === true)
    .map(card => {
      return (<CardSZ
        key={card.id}
        {...card}
        />
      )
  })

  return (
    
    <div>
      <NavBar />
      <Container>
        <section className="cardsList">
          <h1 className='h1'>UI/UX Projects</h1>
          <p><i>Designing for the future.</i> Explore the cards below to learn more.</p>
          {cards}
        </section>
      </Container>
    </div>

      
  )
}

export default UiuxPage