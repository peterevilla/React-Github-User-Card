import React from "react";







class Form extends React.Component {
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
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type='text' name='query' placeholder='search github username' value={this.state.query} onChange={this.handleChanges}></input>
                    </label>
                    <label>
                        <button>search</button>
                    </label>

                </form>
            </div>
        )
    }


}

export default Form;