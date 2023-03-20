import React, {useEffect, useState} from "react";
import Modal from 'react-bootstrap/Modal';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Button from "react-bootstrap/Button";


interface reviewProp {
    name: string,
    typeOfWork: string,
    text: string
}

const Reviews = () => {
    const [show, setShow] = useState(false);
    const [form, setForm] = useState([]);

    const bsd = [
        {
            name: 'Богдан Парипа',
            //typeOfWork: 'тубу',
            text: 'Відмінне відчуття смаку і структури, чітка комунікація,\n' +
                'всі бажання враховані. Замовлення виконано на високому рівні.'
        },
        {
            name: 'Дмитро Пономаренко',
           // typeOfWork: 'werer werwe ',
            text: 'Знову ж таки, Соломія зробила чудову роботу і в необхідний час.\n' +
                'Я буду звертатися до неї знову для інших проектів.'
        },
        {
            name: 'Максим Клименко',
            //typeOfWork: 'werer werwe ',
            text: 'Я дуже задоволений співпрацею. Все зроблено\n' +
                'на найвищому рівні. Концепція була затверджена з першого разу.\n' +
                'Завжди на зв\'язку і швидка комунікація.\n' +
                'Рекомендую !'
        },
        {
            name: 'Олександр Павлюк',
            //typeOfWork: 'werer werwe ',
            text: 'Дивовижний результат . Дуже задоволений . \n' +
                'Рекомендую !'
        },

    ]

    function handleShow() {
        setShow(true);
    }

    const submitForm = (event: { preventDefault: () => void; target: any; }) => {
        event.preventDefault();
        const target = event.target;
        const value = target.value;
        const name = target.name;

        const newFormObject = {
            [name]: value
        };

        // @ts-ignore
        setForm([...form, newFormObject]);

        // Reset the form fields after submitting
        target.reset();
    };


    const setInitialValues = React.useCallback( () => {
        // @ts-ignore
        setForm(bsd)
    },[])

    useEffect(()=>{
        setInitialValues()

    },[setInitialValues])

    return (
        <div className='reviews'>
            <div className='d-flex justify-content-between mb-5'>
                <h1>Відгуки</h1>
                <h3 className='d-none' onClick={handleShow}>Додати відгук</h3>
            </div>

            <Modal show={show} fullscreen={'md-down'} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Додати відгук</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className='' onSubmit={submitForm}>
                        <h5>Ваше Ім'я</h5>
                        <input type="text" name="name" placeholder="Василь Грицько"/>

                        <h5>Тип роботи</h5>
                        <input type="text" name="typeOfWork" placeholder="банер"/>

                        <h5>Ваш відгук</h5>
                        <input type="text" name="text"/>
                        <br/>

                        <Button className="mt-2 button-1" type="submit" variant="warning">
                            <a href="#">Відправити!</a>
                        </Button>
                    </form>
                </Modal.Body>
            </Modal>
            {form.length > 0 &&
                <OwlCarousel className="owl-theme" loop margin={10}  autoplay  responsive={{
                    0: {
                        items: 1
                    },
                    700: {
                        items: 3
                    }
                }}>
                    {form.map((review: reviewProp, index) => {
                        return (
                            <div key={index} className="item text-center">
                                <h2>{review.name}</h2>
                                {/*<p>{review.typeOfWork}</p>*/}
                                <p>{review.text}</p>
                            </div>
                        );
                    })}
                </OwlCarousel>
            }

        </div>
    );
};


export default Reviews