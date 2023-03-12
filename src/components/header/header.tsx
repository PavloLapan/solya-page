import React from "react";
import Button from 'react-bootstrap/Button';
import './header.scss'
// @ts-ignore
import me from '../../images/me.png'
import {faHouseLaptop} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faB } from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faBehance, faTelegramPlane, faInstagram} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
    return (
        <div id='particles-js' className="container-fluid content-middle header-container">

            <div className='some-links'>
                <a href="#part3">Етапи роботи</a>

                <a href="#part4">Етапи співпраці</a>
            </div>

            <div className="info-container">

                <div className="head-image">
                    <img src={me} alt="alt image"/>
                </div>

                <h1>UI/UX Designer</h1>
                <p>Я UI/UX дизайнер, живу в Україні. Я прагну створювати креативні та красиві веб-програми за допомогою ретельно розробленого та орієнтованого на користувача дизайну.</p>


                <div className="d-flex">
                    <Button className='me-4 button-1' variant="warning"><a href="#part1">Про мене</a> </Button>
                    <Button className='button-1' variant="warning"><a href="https://www.behance.net/87b0c014">Моє портфоліо</a></Button>
                </div>
            </div>


            <div className="social-icons">
                <a href="https://www.linkedin.com/in/solomia-ogloblin-57a947249"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="https://t.me/solomiy_ogloblin"><FontAwesomeIcon icon={faTelegramPlane} /></a>
                <a href="https://instagram.com/s_creative_design_?igshid=YmMyMTA2M2Y="> <FontAwesomeIcon icon={faInstagram} /></a>
                <a href="https://www.behance.net/87b0c014"> <FontAwesomeIcon icon={faBehance} /></a>

            </div>


        </div>

    )

}

export default Header