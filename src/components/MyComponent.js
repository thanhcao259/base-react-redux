import React from 'react'
import UserInfor from './UserInfor';

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
            </div>
        )
    }

}

export default MyComponent;