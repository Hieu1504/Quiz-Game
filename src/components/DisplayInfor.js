import React from "react";

class DisplayInfor extends React.Component {
    render() {
        //destructuring array/object
        const { listUsers } = this.props; // object
        console.log(listUsers);
        //props => viết tắt của properties
        console.log(this.props)
        return (
            <div>
                {listUsers.map((user) => {
                    return (
                        <div key={user.id}>
                            <div>My name's {user.name} </div>
                            <div>My age's {user.age} </div>

                        </div>
                    )
                })}
            </div>
        )
    }
}

export default DisplayInfor;