import React from "react";

class DisplayInfor extends React.Component{

    render(){
        // console.log(this.props);
        /**
         * DESTRUCTURE CODE
         */
        // const {age, name} = this.props;
        const {listUser} = this.props;
        return(
            <>
            <div>
                {listUser.map((item, index)=>{
                    return(
                    <div key={item.id}>
                        <div>My name is {item.name}</div>
                        <div>I'm {item.age} years old</div>
                        <hr/> 
                    </div>
         
                    )
                })}
            </div>
            </>
        )
    }
}

export default DisplayInfor;