import React from "react";
import { Button, Checkbox, Form } from 'semantic-ui-react'







class FormSearch extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                query: ''
            }
        }

    






    handleChanges = e => {
        this.setState({ ...this.state, query: e.target.value });
        console.log(this.state.query)

    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleQuery(this.state.query)
        this.props.onSearch()
        console.log('query', this.state.query)
        this.setState({ query: ''})

    }



    render() {

        return (
            <div>
                <Form className='form' onSubmit={this.handleSubmit}>
                <Form.Field>
                    <label>
                        <input type='text' name='query' placeholder='search github username' value={this.state.query} onChange={this.handleChanges}></input>
                    </label>
                </Form.Field>
                    <label>
                        <Button type='submit'>search</Button>
                    </label>

                </Form>
            </div>
        )
    }


}

export default FormSearch;