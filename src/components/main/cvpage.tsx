import React from "react";

const CVPage = () => {
    return (

        <div className='cvpage'>

            <h1>Резюме</h1>


            <div className="d-flex">

                <div className='w-50 pr-4'>
                    <h5 className='after-line pb-4'>Досвід</h5>

                    <div className='b-bottom under-line'>
                        <div className="d-flex justify-content-between pt-4">
                            <p >MindyTeam</p>
                            <p className='text-yellow'>2022-2023</p>
                        </div>
                        <p>Графічний помічник</p>
                    </div>
                    <div className='b-bottom under-line'>
                        <div className="d-flex justify-content-between pt-4">
                            <p >Freelance</p>
                            <p className='text-yellow'>2021-2023</p>
                        </div>
                        <p>Дизайнер</p>
                    </div>

                </div>
                <div className='w-50'>
                    <h5 className='after-line pb-4'>Освіта</h5>

                    <div className='b-bottom under-line'>
                        <div className="d-flex justify-content-between pt-4">
                            <p >Beetroot Academy</p>
                            <p className='text-yellow'>2022-2022</p>
                        </div>
                        <p>UI/UX Дизайнер</p>
                    </div>
                    <div className='b-bottom under-line'>
                        <div className="d-flex justify-content-between pt-4">
                            <p>Interregional Academy of Personnel Management</p>
                            <p className='text-yellow'>2019-2023</p>
                        </div>
                        <p>Юридичний факультет</p>
                    </div>
                </div>
            </div>


    </div>)

}

export default CVPage