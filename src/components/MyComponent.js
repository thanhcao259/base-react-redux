import React from 'react'

class MyComponent extends React.Component {

    state = {
        name: 'Ronando', address: 'VN', age: 30
    }

    handleClick(event) {
        console.log(`>>> Clicked button ${this.state.age}`);
        this.setState({
            age: Math.floor((Math.random() * 100) + 1)
        })
    }

    handleMouseOver(event) {
        console.log(event.target);
        console.log(`>>> Clicked button ${this.state.age}`);
        // console.log(event);
    }

    handleOnChangeInput = (event) => {
        // console.log(event.target.value);
        this.setState({
            name: event.target.value
        })
    }

    handleOnSubmit = (e)=>{
        e.preventDefault();
        alert('submited')
    }
    render() {
        return (
            <div>
                My name is {this.state.name}
                {/* Nen viet onClick.... theo arrow func */}
                <button className='btn-click'
                    onClick={(e) => this.handleClick(e)}>Click</button>
                
                {/* Khong nen viet ntn */}
                {/* <button className='btn-hover'
                    onMouseOver={this.handleMouseOver}>Hover Me</button> */}

                <form onSubmit={(e)=>{this.handleOnSubmit(e)}}>
                    <input type='text'
                        onChange={(e) => {this.handleOnChangeInput(e)} }></input>
                    <button >Submit</button>
                </form>
            </div>
        )
    }

}

export default MyComponent;