import {React, useState} from 'react'
import AddUserInfor from './AddUserInfor';
import DisplayInfor from './DisplayInfor';

const MyComponent = () => {
    
    const [listUser, setListUser] = useState( [
            {id: '001', name: "Ronaldo", age: "30"},
            {id: '002', name: "Messi", age: "20"},
            {id: '003', name: "Tom Cursi", age: "35"},
        ]
    )

    const handleAddNewUser = (newObj) => {
        /** USING SPEARD SHEET 
         * to insert new obj to existing list
         * 1. setState({}) for existing list
         */
        // this.setState({
        //     listUser: 
        //         [newObj, ...this.state.listUser]
        // })
        setListUser([newObj, ...listUser])
    };
    const handleDelUser = (existObj) => {
        // let listUserClone = this.state.listUser;
        // listUserClone = listUserClone.filter((item)=> 
        //     item.id  !== existObj.id)
        // this.setState({
        //     listUser: listUserClone
        // });
        let listUserClone = listUser;
        listUserClone = listUserClone.filter((item)=>
            item.id !== existObj.id
        );
        setListUser(listUserClone);
    };

    return (
        <div>
            <AddUserInfor 
                // handleAddNewUser (left) is name of props
                // Might rename it as add_new_user_props, etc
                // {this.handle...} to refer to this handle... function
                // handleAddNewUser={this.handleAddNewUser}/>
                handleAddNewUser={handleAddNewUser}
                />
            <br/>
            <DisplayInfor 
                // listUser={this.state.listUser}
                // handleDelUser={this.handleDelUser}

                listUser = {listUser}
                handleDelUser = {handleDelUser}
                />
        </div>
    );
}

export default MyComponent;