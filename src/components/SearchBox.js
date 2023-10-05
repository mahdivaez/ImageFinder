import React from "react";

class SearchBox extends React.Component{
    
    state = {term : ""};

    OnFormSubmit=(e)=>{
        e.preventDefault();
        this.props.onSubmit(this.state.term)
    }

    render(){
        return(
            <div className="ui segment">
                <form onSubmit={this.OnFormSubmit.bind(this)}>
                    <div className="ui form">
                        <div className="field">
                            <label>Image Search</label>
                            <input 
                            type="text"
                            value={this.state.terms} 
                            onChange={e => this.setState({term:e.target.value})}/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBox    