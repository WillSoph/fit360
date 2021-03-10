import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import logoImg from '../../assets/images/logo.png';
import landingImg from '../../assets/images/gym.png';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import api from '../../services/api';

import './styles.css';

function Landing() {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('connections').then(response => {
      const { total } = response.data;

      setTotalConnections(total);
    })
  }, []);

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Fit 360" />
          <h2>O seu gerenciador online.</h2>
        </div>

        <img
          src={landingImg}
          alt="Gerenciador online"
          className="hero-image"
        />

        <div className="buttons-container">
          <Link to="/faturas" className="study">
            <img src={studyIcon} alt="Estudar" />
            Faturas
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar aulas" />
            Meus Dados
          </Link>
        </div>

        <span className="total-connections">
          Total de {totalConnections} pagamentos pendentes.
          {/* <img src={purpleHeartIcon} alt="Coração roxo" /> */}
        </span>
      </div>
    </div>
  )
}

export default Landing;