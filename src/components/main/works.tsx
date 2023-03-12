import React from "react";

const Works = () => {
    return (

        <div id='part3' className='works'>

            <div>
                <h1 className='pb-4'>Що я роблю</h1>

                <ul className='p-0'>
                    <li>Проєктую дизайн та функціонал адаптивних сайтів.</li>
                    <li>Оптимізовую існуючі сайти.</li>
                    <li>Створюю дизайн-системи у Figma.</li>
                    <li>Проводжу дослідження та порівняння конкурентів клієнта, аналізую вхідні дані від клієнта.</li>
                    <li>Розробляю персони користувачів, сценарії користування, sitemap та логіку роботи проєктів.</li>
                    <li>Створюю іконки, ілюстрації, логотипи, банери та інші графічні елементи.</li>
                    <li>Розробляю концепти і шукаю референси для замовника.</li>
                    <li>Оформлюю презентації для клієнтів.</li>
                </ul>
            </div>

            <div>


                <h1 className='pt-4 pb-4'>Етапи роботи</h1>
                <div className='d-flex w-100 justify-content-between'>
                    <ol className=' pr-4'>
                        <li>Brief</li>
                        <li>Mindmap (Mindmeister)</li>
                        <li>Конкурентний аналіз</li>
                        <li>SWOT-аналіз</li>
                        <li>Порівняльна таблиця функцій</li>
                        <li>Дослідження ЦА</li>
                        <li>Інтерв’ю + карта емпатії</li>
                        <li>Пошук будь-якої корисної інформації в інтернеті</li>
                        <li>Опитування</li>
                        <li>Персона користувача</li>
                        <li>Інформаційна архітектура</li>
                    </ol>
                    <ol start={12} className='p-0 w-50'>
                        <li>CJM</li>
                        <li>Userflow</li>
                        <li>Sketch/Wireframes</li>
                        <li>Ul - beginning (Moodboard etc.)</li>
                        <li>Підбір фірмової колірної схеми</li>
                        <li>Підбір фірмових шрифтів</li>
                        <li>Ul</li>
                        <li>Ul kit</li>
                        <li>Adaptivity</li>
                        <li>Ul - finishing</li>
                        <li>Interactive prototype</li>
                    </ol>
                </div>
            </div>

        </div>
    )

}

export default Works