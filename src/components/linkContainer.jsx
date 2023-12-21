import { useState } from "react";
import Table from './table';
import Form from './form';

function LinkContainer() {
    const [favLinks, setFavLinks] = useState([]);

    const handleRemove = (index) => {
        setFavLinks(favLinks.filter((_, i) => i !== index));
    }

    const handleSubmit = (favLink) => {
        setFavLinks([...favLinks, favLink]);
    }

    return (
        <div>
            <h1>🔗 Favorite Links 🔗</h1>
            <p>Place a new link with the name and URL to the table!</p>
            <Table linkData={favLinks} removeLink={handleRemove} />
            <h1>New Link!</h1>
            <Form handleSubmit={handleSubmit} />
        </div>
    )
}

export defau