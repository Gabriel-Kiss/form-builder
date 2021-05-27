import React, { useState } from 'react';

import SelectionComponent from './Selection/Selection';
import DateComponent from './Date/Date';
import QueryComponent from './Query/Quiry';

import './Form.css';

const Form = ({ schema }) => {
    const [newEnquiry, setNewEnquiry] = useState('');
    const [newDate, setNewDate] = useState(null);
    const [newQuiry, setNewQuiry] = useState('');

    const { title, description, properties: { enquiry, date, quiry } } = schema;

    const isEnabled = newEnquiry.length > 0 && newQuiry.length > 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        const body = document.createElement('body');
        body.innerHTML = `<table>
                            <tr><td>Subject: ${title}</td></tr>
                            <tr><td>Enquiry type: ${newEnquiry}</td></tr>
                             ${newDate ? '<tr><td>Date of paysleep: ' + newDate.split("-").reverse().join("/") + '</td></tr>' : ''}
                             <tr><td>Quiry : ${newQuiry}</td></tr>
                          </table>`;

        console.log(body)

        setNewEnquiry('');
        setNewDate(null);
        setNewQuiry('');
    }

    return (
        <div className='form-container'>
            <h1>{title}</h1>
            <p>{description}</p>

            <form
                className='class-form'
                onSubmit={handleSubmit}
            >
                <SelectionComponent
                    newEnquiry={newEnquiry}
                    enquiry={enquiry}
                    setEnquiry={setNewEnquiry}
                />
                {date.enum.includes(newEnquiry) &&
                    <DateComponent
                        date={date}
                        setDate={setNewDate}
                    />
                }

                <QueryComponent
                    newQuiry={newQuiry}
                    quiry={quiry}
                    setQuiry={setNewQuiry}
                />

                <button
                    type='submit'
                    className='submit-button'
                    disabled={!isEnabled}
                >
                    Submit
                </button>
            </form>
        </div>
    );
};


export default Form;
