import React from "react";

class DisplayInfor extends React.Component{

    render(){
        // console.log(this.props);
        /**
         * DESTRUCTURE CODE
         */
        const {age, name} = this.props;
        return(
            <>
            <div>
                <div>My name is {name}</div>
                <div>I'm {age} years old</div>
            </div>
            </>
        )
    }
}

export default DisplayInfor;