import React from "react";
import { Button, Form } from 'semantic-ui-react'







class FormSearch extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }



    handleSubmit = e => {
        e.preventDefault();
        console.log(this.val)
        var val = this.val.value
        console.log(val)
        this.props.onSearch(val)
    

    }



    render() {

        return (
            <div>
                <Form className='form' onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <label>
                            <input type='text' placeholder='search github username' ref={(c) => this.val = c} onfocus="this.value=''" ></input>
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