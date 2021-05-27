import './Quiry.css';

function QuiryComponent ({ newQuiry, quiry, setQuiry }) {
    return (
        <div className='class-quiry'>
            <label htmlFor={quiry.id}>{quiry.description}</label>
            <textarea
                id={quiry.id}
                value={newQuiry}
                required={quiry.required}
                onChange={(e) => setQuiry(e.target.value)}
            />
        </div>
    )
}

export default QuiryComponent;
