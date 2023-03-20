import React, {useCallback} from "react";
import Button from 'react-bootstrap/Button';
import './header.scss'
// @ts-ignore
import me from '../../images/me.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin, faBehance, faTelegramPlane, faInstagram} from "@fortawesome/free-brands-svg-icons";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";

import { loadFull } from "tsparticles";

const Header = () => {

    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);


    return (
        <div id='particles-js' className="container-fluid content-middle header-container">
            <Particles options={{
                background: {
                    color: {
                        value: "#111111",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 100,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }} init={particlesInit}/>
            <div className='some-links'>
                <a href="#part3">Етапи роботи</a>

                <a href="#part4">Етапи співпраці</a>
            </div>

            <div className="info-container">

                <div className="head-image">
                    <img src={me} alt={'alt'}/>
                </div>

                <h1>UI/UX Designer</h1>
                <p>Я UI/UX дизайнер, живу в Україні. Я прагну створювати креативні та красиві веб-програми за допомогою ретельно розробленого та орієнтованого на користувача дизайну.</p>


                <div className="d-flex">
                    <Button className='me-4 button-1' variant="warning"><a href="https://t.me/solomiy_ogloblin">Зв'язатись в телеграм <FontAwesomeIcon icon={faTelegramPlane} /></a> </Button>
                    <Button className='button-1' variant="warning"><a href="https://www.behance.net/87b0c014">Моє портфоліо <FontAwesomeIcon icon={faBehance} /></a></Button>
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