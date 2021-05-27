import './Date.css';

function DateComponent ({ date, setDate }) {
    const maxDate = new Date().toISOString().slice(0, 10);
    return (
        <div className='class-date'>
            <label htmlFor={date.id}>{date.description}</label>
            <input
                id={date.id}
                type={date.format}
                required={date.required}
                max={maxDate}
                onChange={(e) => setDate(e.target.value)}
            />
        </div>
    )
}

export default DateComponent;
