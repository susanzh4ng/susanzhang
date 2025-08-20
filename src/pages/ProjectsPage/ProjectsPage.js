import React from 'react'
import Container from 'react-bootstrap/Container';
import projects from '../../projects'
import CardSZ from '../../components/CardSZ/CardSZ'
import NavBar from '../../components/NavBar/NavBar';
import "./ProjectsPage.css";

const ProjectsPage = () => {

  const cards = projects
    .filter(card => card.projectsPage === true)
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
          <h1 className='h1margintop h1default'>⋆.˚✮All work✮˚.⋆</h1>
          <p>Explore the cards below to learn about my work.</p>
          {cards}
        </section>
      </Container>
    </div>
  )
}

export default ProjectsPage