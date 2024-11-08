import React from 'react'
import UserInfor from './UserInfor';
import DisplayInfor from './DisplayInfor';

class MyComponent extends React.Component {

    
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
                <DisplayInfor name="Messi" age={40}/>
                <hr/>
                <DisplayInfor name={"MPape"} age="35"/>
            </div>
        )
    }

}

export default MyComponent;