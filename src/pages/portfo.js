import React, { Component } from "react"
import SEO from "../components/seo"
// import Hero from "../components/hero"
import Portfolio from "../components/portfolio"
import PortfolioItems from "../components/portfolioItems"
import MiniHero from "../components/miniHero"
import "../styles/Portfolio.scss"
import AOS from "aos"

class Portfo extends Component {
  state = {
    selectedList: [],
    genres: [],
    allList: [
      {
        id: 1,
        title: "Factoring",
        company: "Abraham Carpio",
        poster:
          "https://images.pexels.com/photos/7357/startup-photos.jpg?cs=srgb&dl=businesswoman-company-concept-7357.jpg&fm=jpg",
        category: "motion",
        url: "https://pisogerencial.reactionpages.com/EP01-Factoring/",
      },
      {
        id: 2,
        title: "Transformación Digital",
        company: "Vamos por más",
        poster:
          "https://images.pexels.com/photos/1081225/pexels-photo-1081225.jpeg?cs=srgb&dl=adult-analysis-brainstorming-1081225.jpg&fm=jpg",
        category: "motion",
        url: "https://pisogerencial.reactionpages.com/EP01-Factoring/",
      },
      {
        id: 3,
        title: "Blockchain",
        company: "Piso Gerencial",
        poster:
          "https://images.pexels.com/photos/261949/pexels-photo-261949.jpeg?cs=srgb&dl=administration-articles-bank-261949.jpg&fm=jpg",
        category: "motion",
        url: "https://pisogerencial.reactionpages.com/EP01-Factoring/",
      },
      {
        id: 4,
        title: "Finanzas",
        company: "Finanzas para tu Bolsillo",
        poster:
          "https://images.pexels.com/photos/7357/startup-photos.jpg?cs=srgb&dl=businesswoman-company-concept-7357.jpg&fm=jpg",
        category: "motion",
        url: "https://pisogerencial.reactionpages.com/EP01-Factoring/",
      },
      {
        id: 5,
        title: "Factoring",
        company: "Abraham Carpio",
        poster:
          "https://images.pexels.com/photos/7357/startup-photos.jpg?cs=srgb&dl=businesswoman-company-concept-7357.jpg&fm=jpg",
        category: "motion",
        url: "https://pisogerencial.reactionpages.com/EP01-Factoring/",
      },
      {
        id: 6,
        title: "Transformación Digital",
        company: "Vamos por más",
        poster:
          "https://images.pexels.com/photos/1081225/pexels-photo-1081225.jpeg?cs=srgb&dl=adult-analysis-brainstorming-1081225.jpg&fm=jpg",
        category: "motion",
        url: "https://pisogerencial.reactionpages.com/EP01-Factoring/",
      },
      {
        id: 7,
        title: "Blockchain",
        company: "Piso Gerencial",
        poster:
          "https://images.pexels.com/photos/261949/pexels-photo-261949.jpeg?cs=srgb&dl=administration-articles-bank-261949.jpg&fm=jpg",
        category: "motion",
        url: "https://pisogerencial.reactionpages.com/EP01-Factoring/",
      },
      {
        id: 8,
        title: "Finanzas",
        company: "Finanzas para tu Bolsillo",
        poster:
          "https://images.pexels.com/photos/7357/startup-photos.jpg?cs=srgb&dl=businesswoman-company-concept-7357.jpg&fm=jpg",
        category: "motion",
        url: "https://pisogerencial.reactionpages.com/EP01-Factoring/",
      },
    ],
  }
  render() {
    AOS.init({
      offset: 100,
      // startEvent: "DOMContentLoaded",
      duration: 1000,
      anchorPlacement: "top",
    })
    const projects = this.state.allList
    return (
      <>
        <SEO title="Portfolio Madmedia" />
        <MiniHero
          url="https://images.pexels.com/photos/1661004/pexels-photo-1661004.jpeg?cs=srgb&dl=adults-analysis-brainstorming-1661004.jpg&fm=jpg"
          title="Examples speak louder than words"
          description="OUR WORK"
        />
        <div className="Section__title">Explore our recent projects.</div>

        <div className="Categories">
          <ul className="Categories__container" data-aos="fade-up">
            <li>
              <strong>Mostrar:</strong>
            </li>
            <li className="Categories__item">Todo</li>
            <li className="Categories__item">Corporativo</li>
            <li className="Categories__item">Entrevista</li>
            <li className="Categories__item">Eventos</li>
            <li className="Categories__item">Motion Graphics</li>
            <li className="Categories__item">Publicidad</li>
            <li className="Categories__item">Documentales</li>
          </ul>
        </div>

        <Portfolio>
          {projects.map(project => (
            <PortfolioItems
              key={project.id}
              title={project.title}
              company={project.company}
              poster={project.poster}
              link={project.url}
            />
          ))}
        </Portfolio>
      </>
    )
  }
}

export default Portfo
