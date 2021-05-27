import './Selection.css';

function SelectionComponent ({ newEnquiry, enquiry, setEnquiry }) {
    return (
        <div className="class-selection">
            <label htmlFor={enquiry.id}>{enquiry.description}</label>
            <select id={enquiry.id}
                value={newEnquiry}
                required={enquiry.required}
                onChange={(e) => setEnquiry(e.target.value)}
            >
                <option value='' disabled >Select your option</option>
                {enquiry.enum.map((el) =>
                    <option key={el} value={el}>{el}</option>
                )}
            </select>
        </div>
    )
}
export default SelectionComponent
