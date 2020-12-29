import React, { useState } from 'react';
import PropTypes from 'prop-types';

ToDoForm.propTypes = {
    onSubmit: PropTypes.func,
};

ToDoForm.defaultProps = {
    onSubmit: null,
}

function ToDoForm(props) {
    const { onSubmit } = props;
    const [value, setValue] = useState('');

    function handleInputChange (e) {
        //console.log(e.target.value);
        return setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!onSubmit) return;
        const formValues = {
            name: value,
        };
        onSubmit(formValues);
        setValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={ value } onChange={handleInputChange}/>
        </form>
    );
}

export default ToDoForm;