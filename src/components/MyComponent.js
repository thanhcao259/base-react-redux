import React from 'react'
import AddUserInfor from './AddUserInfor';
import DisplayInfor from './DisplayInfor';

class MyComponent extends React.Component {

    state = {
        listUser: [
            {id: '001', name: "Ronaldo", age: "30"},
            {id: '002', name: "Messi", age: "20"},
            {id: '003', name: "Tom Cursi", age: "35"},
        ]
    }

    handleAddNewUser = (newObj) => {
        /** USING SPEARD SHEET 
         * to insert new obj to existing list
         * 1. setState({}) for existing list
         */
        this.setState({
            listUser: 
                [newObj, ...this.state.listUser]
        })
    }

    handleDelUser = (existObj) => {
        // console.log('>>>extObj', existObj);
        let listUserClone = this.state.listUser;
        listUserClone = listUserClone.filter((item)=> 
            item.id  !== existObj.id)
        this.setState({
            listUser: listUserClone
        });
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

                <AddUserInfor 
                    // handleAddNewUser (left) is name of props
                    // Might rename it as add_new_user_props, etc
                    // {this.handle...} to refer to this handle... function
                    handleAddNewUser={this.handleAddNewUser}/>
                <br/>
                {/* <DisplayInfor name={"Messi"} age={40}/> */}
                <DisplayInfor listUser={this.state.listUser}
                    handleDelUser={this.handleDelUser}
                    />
            </div>
        )
    }

}

export default MyComponent;