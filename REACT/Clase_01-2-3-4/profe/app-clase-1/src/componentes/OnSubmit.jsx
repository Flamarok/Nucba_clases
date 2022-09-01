import React from 'react'

function Form() {
    const halndelSubmit = e => {
        e.preventDefault();
        console.log('You clicked submit.');
    }
    return (
    <form onSubmit={handleSubmit}>
        <button type='submit'>Submit</button>
    </form>
  );
}

export default Form