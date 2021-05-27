import './Quiry.css';

function QuiryComponent ({ newQuiry, quiry, setQuiry }) {
    //possible re-rendering issues in larger apps with many more components
    //thought about using memo but considered it is ok without for this app
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
