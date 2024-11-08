import React from 'react'
import UserInfor from './UserInfor';
import DisplayInfor from './DisplayInfor';

class MyComponent extends React.Component {

    state = {
        listUser: [
            {id: '001', name: "Ronaldo", age: "30"},
            {id: '002', name: "Messi", age: "20"},
            {id: '003', name: "Tom Cursi", age: "35"},
        ]
    }
    render() {

        return (
            <div>
                {/* Nen viet onClick.... theo arrow func */}
                {/* <button className='btn-click'
                    onClick={(e) => this.handleClick(e)}>Click</button> */}
                
                {/* Khong nen viet ntn */}
                {/* <button className='btn-hover'
                    onMouseOver={this.handleMouseOver}>Hover Me</button> */}

                <UserInfor/>
                <br/>
                {/* <DisplayInfor name={"Messi"} age={40}/> */}
                <DisplayInfor listUser={this.state.listUser}/>
            </div>
        )
    }

}

export default MyComponent;