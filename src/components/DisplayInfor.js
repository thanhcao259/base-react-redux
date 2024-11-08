import React from "react";

class DisplayInfor extends React.Component {

    state = {
        isShow: true
    }
    handleShowHide = (e) => {
        this.setState({
            isShow: !this.state.isShow
        })
    };
    render() {
        // console.log(this.props);
        /**
         * DESTRUCTURE CODE
         */
        // const {age, name} = this.props;
        const { listUser } = this.props;
        return (
            <>
                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                        {this.state.isShow ? "Hide " : "Show "}list of users</span>
                </div>
                { this.state.isShow && 
                <div>
                    {listUser.map((item, index) => {

                        return (
                        <div key={item.id}
                            className={+item.age > 28 ? "red" : "green"}>
                            <div>My name is {item.name}</div>
                            <div>I'm {item.age} years old</div>
                            <hr />
                        </div>
                        )
                    })}
                </div>

                }
            </>
        )
    }
}

export default DisplayInfor;