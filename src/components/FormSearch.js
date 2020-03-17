import React from "react";
import { Button, Form } from 'semantic-ui-react'







class FormSearch extends React.Component {
    constructor(props) {
        super(props)

    
    }



    handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.value)
        this.props.setSearchTerm(e.target.value)
        // this.props.onSearch()


    }



    render() {

        return (
            <div>
                <Form className='form' onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <label>
                            <input type='text' placeholder='search github username'  ></input>
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