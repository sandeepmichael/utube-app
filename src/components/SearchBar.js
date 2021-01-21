import React from 'react'




class Searchbar extends React.Component {
    state = {term:''}

onFormSubmit = (event) => {
event.preventDefault()

  this.props.onSubmitted(this.state.term)                         //callback from parent component
}

onChangeHandler= (event) => {
    this.setState({term:event.target.value})
}


    render() {
        return (
            <div className='search-bar ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                        <label>video search</label>
                    <input type='text' value={this.state.term} onChange={this.onChangeHandler} />
                    </div>
                </form>
            </div>
        );
    }
}
export default Searchbar;