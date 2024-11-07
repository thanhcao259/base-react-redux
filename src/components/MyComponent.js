import React from 'react'

class MyComponent extends React.Component {

    state = {
        name: 'Ronando', address: 'VN', age: 30
    }
    render() {
        return (
            <div>
                My name is {this.state.name}
            </div>
        )
    }

}

export default MyComponent;