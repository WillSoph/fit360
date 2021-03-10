import React from 'react';
import { Link } from 'react-router-dom'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';

import './styles.css';

function TeacherItem() {
    return (
        <>
            <article className="teacher-item">
                <header>
                    <img src='https://www.flaticon.com/svg/vstatic/svg/4081/4081853.svg?token=exp=1614870376~hmac=3c4324028e36d127921457e4436216ad' alt="Will" />
                    <div>
                        <strong>Smart Fit - Musculação</strong>
                        <span>Período Mensal</span>
                    </div>
                </header>
                {/* <div className="description">
                    <p></p>
                    <p>Período: Mensal</p>
                </div> */}

                <footer>
                    <p>
                        Valor do plano
                    <strong>R$ 189</strong>
                    </p>
                    <Link to="/payment" className="link">
                        Escolher
                </Link>
                </footer>
            </article>

            <article className="teacher-item">
                <header>
                    <img src='https://www.flaticon.com/svg/vstatic/svg/4081/4081853.svg?token=exp=1614870376~hmac=3c4324028e36d127921457e4436216ad' alt="Will" />
                    <div>
                        <strong>Smart Fit - Musculação</strong>
                        <span>Período - Trimestral</span>
                    </div>
                </header>

                <footer>
                    <p>
                        Valor do plano
                    <strong>R$ 450</strong>
                    </p>
                    <Link to="/payment" className="link">
                        Escolher
                </Link>
                </footer>
            </article>

            <article className="teacher-item">
                <header>
                    <img src='https://www.flaticon.com/svg/vstatic/svg/4081/4081853.svg?token=exp=1614870376~hmac=3c4324028e36d127921457e4436216ad' alt="Will" />
                    <div>
                        <strong>Smart Fit - Musculação</strong>
                        <span>Período - Semestral</span>
                    </div>
                </header>

                <footer>
                    <p>
                        Valor do plano
                    <strong>R$ 800</strong>
                    </p>
                    <Link to="/payment" className="link">
                        Escolher
                </Link>
                </footer>
            </article>
        </>
    );
}

export default TeacherItem;
