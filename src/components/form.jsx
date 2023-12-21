import { useState } from "react";

function Form({ handleSubmit }) {
    const [name, setName] = useState("");
    const [URL, setURL] = useState("");

    const submitForm = (event) => {
        event.preventDefault();
        handleSubmit({ name, URL });
        setName("");
        setURL("");
    }

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="linkName">Name:</label>
            <br />
            <input type="text" id="linkName" name="linkName" value={name} onChange={(event) => setName(event.target.value)} />
            <br />
            <br />
            <label For="URL">URL:</label>
            <br />
            <input type="text" id="linkURL" name="linkURL" value={URL} onChange={(event) => setURL(event.target.value)} />
            <br />
            <br />
            <input id="submit-button" type="submit" value="Submit" />
        </form>
    )
}

export default Form;