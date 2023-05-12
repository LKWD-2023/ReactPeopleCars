import React from 'react';
import { produce } from 'immer';
import axios from 'axios';

class AddPerson extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        age: '',
    }

    onTextChange = e => {
        const nextState = produce(this.state, draft => {
            draft[e.target.name] = e.target.value;
        });

        this.setState(nextState);
    }

    onSubmitClick = async () => {
        await axios.post('/api/peoplecars/addperson', this.state);
        this.props.history.push('/');
    }

    render() {
        const { firstName, lastName, age } = this.state;
        return (
            <div style={{ minHeight: 1000, paddingTop: 200 }}>
                <div className="row">
                    <div className='col-md-6 offset-md-3 card bg-light p-4'>
                        <h2>Add a New Person</h2>
                        <input type="text" className='form-control' name='firstName' value={firstName} onChange={this.onTextChange} placeholder="First Name" />
                        <br />
                        <input type="text" className='form-control' name='lastName' value={lastName} onChange={this.onTextChange} placeholder="Last Name" />
                        <br />
                        <input type="text" className='form-control' name='age' value={age} onChange={this.onTextChange} placeholder="Age" />
                        <br />
                        <button className='btn btn-primary btn-lg btn-block' onClick={this.onSubmitClick}>Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddPerson;