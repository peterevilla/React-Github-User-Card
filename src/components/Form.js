import React from "react";







class Form extends React.Component {

    state = {
        query: ''
    }

    render() {

        return(
           <div>
               <form>
                    <label>
                        <input type='text' name='query' placeholder='search github username' value={this.state.query}></input>
                    </label>


               </form>
           </div>
        )
    }


}

export default Form;