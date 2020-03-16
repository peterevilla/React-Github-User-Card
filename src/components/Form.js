import React from "react";







class Form extends React.Component {

   
        state = {
            query: ''
        }

        


   

    handleChanges = e => {
        this.setState({ ...this.state, query: e.target.value });
        // this.props.handleQuery(this.state.query)
        
      };


 

    render() {

        return(
           <div>
               <form>
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