import React, { useState } from "react";

// class UserInfor extends React.Component {
    
//     state = {
//         name: '', address: '', age: ''
//     }

//     handleOnChangeName = (event) => {
//         // console.log(event.target.value);
//         this.setState({
//             name: event.target.value
//         });
//     }

//     handleOnChangeAge = (event) => {
//         this.setState({
//             age: event.target.value
//         });
//     }

//     handleOnSubmit = (e)=>{
//         e.preventDefault();
//         // console.log(this.state);

//         /**
//          * On handleAdd(newObj) of parent passing an agrument 'newObj'
//          * 
//          */
//         this.props.handleAddNewUser({
//             id: Math.floor((Math.random() *100)+1) + "", 
//             name: this.state.name, 
//             age: this.state.age
//         });

//         /** clear input fields after submmit
//          * 1. state({}) with key-value is empty
//          * 2. On fnc handling submit event, call setState({})
//          *  */ 
//         this.setState({
//             name: "", age: ''
//         })
//     }
//     render(){

//         return(
//             <>
//                 My name is {this.state.name},
//                 Now, I'm {this.state.age} years old.

//                 <form onSubmit={(e)=>{this.handleOnSubmit(e)}}>
//                     <label>Your name:</label>
//                     <input type='text' className="inp-add-user"
//                         onChange={(e) => {this.handleOnChangeName(e)} }
//                         value={this.state.name}/>
                    
//                     <label>Your age:</label>
//                     <input type='text' className="inp-add-user"
//                         onChange={(e) => {this.handleOnChangeAge(e)} }
//                         value={this.state.age}/>
                    
                    
//                     <button >Submit</button>
//                 </form>

//             </>
//         )
//     }
// }

const UserInfor = (props) => {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [age, setAge] = useState(0);

    const handleOnChangeName = (event) => {
        // this.setState({
        //     name: event.target.value
        // });
        setName(event.target.value);
    };

    const handleOnChangeAge = (event) => {
        setAge(event.target.value);
    };

    const handleOnSubmit = (e)=>{
        e.preventDefault();
        /**
         * On handleAdd(newObj) of parent passing an agrument 'newObj'
         */
        props.handleAddNewUser({
            id: Math.floor((Math.random() *100)+1) + "", 
            name: name, 
            age: age
        });
        setName(''); setAge(0);
    };
        
    return(
    <>
        My name is {name},
        Now, I'm {age} years old.

        <form onSubmit={(e)=>{handleOnSubmit(e)}}>
            <label>Your name:</label>
            <input type='text' className="inp-add-user"
                onChange={(e) => {handleOnChangeName(e)} }
                value={name}/>
            
            <label>Your age:</label>
            <input type='text' className="inp-add-user"
                onChange={(e) => {handleOnChangeAge(e)} }
                value={age}/>
            
            
            <button >Submit</button>
        </form>

    </>
    )
};
export default UserInfor;