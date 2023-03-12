import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// @ts-ignore
import diploma from "../../images/diploma.png";


const About = () => {
    const [show, setShow] = useState(false);

    function handleShow() {
        setShow(true);
    }


    return (
        <>
            <Modal show={show} fullscreen onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title className="d-flex justify-content-around w-100"><h3>Диплом</h3><h2><a href="https://lms.beetroot.academy/diploma/cl1w5vq5p0c6v0724f66og6dx">Click to verify here</a></h2> </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div><img src={diploma} alt=""/></div>
                </Modal.Body>
            </Modal>

            <div id='part1' className='about content-middle'>

                <h1 className='pb-4'>Про мене</h1>

                <div className='d-flex media-div-creative'>
                    <div className=' w-75 mr-5'>
                        <h3>Креативний UI/UX Дизайнер з України</h3>
                        <p>Привіт! Мене звати Соломія. Я Дизайнер, я дуже захоплена і віддана своїй роботі. Маючи 1 рік
                            досвіду дизайнера , я набула навичоки і знання, необхідних для того, щоб зробити ваш проект
                            успішним. Я насолоджуюся кожним кроком процесу проектування, від обговорення до
                            співпраці.</p>

                    </div>
                    <div className='d-flex'>
                        <div>
                            <p className='text-yellow '>Вік:</p>
                            <p className='text-yellow'>Email:</p>
                            <p className='text-yellow mr-1'>Телефон:</p>
                        </div>
                        <div>
                            <p>20</p><p>solya1450@gmail.com</p><p>+380685808890</p>
                        </div>

                    </div>
                </div>

                <div className='pt-4'>
                    <Button  className='button-1 mr-1' variant="warning"><a  href="https://www.dropbox.com/s/cuaya5x220b6uhj/cv.pdf?dl=0">Завантажити CV</a> </Button>
                    <Button onClick={() => handleShow()} className='button-1' variant="warning"><a
                        href="">Диплом</a></Button>
                </div>


                <div className="d-flex pro-skills">
                    <div>
                        <h6 className='pb-4 after-line'>Навички проектування</h6>

                        <ul className='p-0'>
                            <li>UI/UX Design</li>
                            <li>Graphic Design</li>
                            <li>Logo Design</li>
                            <li>Print Design</li>
                        </ul>
                    </div>

                    <div>
                        <h6 className='after-line pb-4'>Навички </h6>

                        <div className='d-flex'>
                            <ul className='p-0 mr-5'>
                                <li>Figma</li>
                                <li>Adobe Photoshop</li>
                                <li>Adobe Illustrator</li>
                                <li>Sketch</li>
                            </ul>
                            <ul className='p-0 '>
                                <li>FlowMapp</li>
                                <li>Miro</li>
                            </ul>
                        </div>


                    </div>

                </div>


            </div>

        </>)

}

export default About