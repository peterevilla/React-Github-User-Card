import React from "react";
import { Button, Form } from 'semantic-ui-react'







class FormSearch extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }



    handleSubmit = e => {
        e.preventDefault();
        var val = this.val.value;
        console.log(val)
        this.props.setSearchTerm(val)
        // this.props.onSearch()


    }



    render() {

        return (
            <div>
                <Form className='form' onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <label>
                            <input type='text' placeholder='search github username' ref={(c) => this.val = c}  ></input>
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