import React from "react";

class UserInfor extends React.Component {
    
    state = {
        name: 'Ronando', address: 'VN', age: 30
    }

    handleOnChangeName = (event) => {
        // console.log(event.target.value);
        this.setState({
            name: event.target.value
        });
    }

    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        });
    }

    handleOnSubmit = (e)=>{
        e.preventDefault();
        console.log(this.state);
    }
    render(){

        return(
            <>
                My name is {this.state.name},
                Now, I'm {this.state.age} years old.

                <form onSubmit={(e)=>{this.handleOnSubmit(e)}}>
                    <label>Your name:</label>
                    <input type='text'
                        onChange={(e) => {this.handleOnChangeName(e)} }/>
                    
                    <label>Your age:</label>
                    <input type='text'
                        onChange={(e) => {this.handleOnChangeAge(e)} }/>
                    
                    
                    <button >Submit</button>
                </form>

            </>
        )
    }
}
export default UserInfor;