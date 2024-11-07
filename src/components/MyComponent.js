import React from 'react'

class MyComponent extends React.Component {

    state = {
        name: 'Ronando', address: 'VN', age: 30
    }

    handleClick(event){
        console.log(`>>> Clicked button ${this.state.age}`);
        console.log(event.target);
    }

    handleMouseOver(event) {
        console.log(event.target);
        // console.log(event);
    }
    render() {
        return (
            <div>
                My name is {this.state.name}
                <button className='btn-click' 
                    onClick={(e)=>{this.handleClick(e)}}>Click</button>
                <button className='btn-hover' 
                    onMouseOver={this.handleMouseOver}>Hover Me</button>
            </div>
        )
    }

}

export default MyComponent;