import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {

    state = {
        listUsers: [
            { id: 1, name: "Hoi dan IT", age: "16" },
            { id: 2, name: "Eric", age: "26" },
            { id: 3, name: "Hieu", age: "69" },

        ]
    }

    handleAddNewUser = (userObj) => {
        // let listUsersNew = this.state.listUsers;
        // listUsersNew.unshift(userObj);
        // listUsersNew.push(userObj);

        // this.setState({
        //     listUser: listUsersNew
        // })

        this.setState({
            // listUsers: [userObj, ...this.state.listUsers]
            listUsers: [...this.state.listUsers, userObj]

        })
    }

    render() {
        //DRY => don't repeat youself
        return (
            <div>
                <AddUserInfor
                    handleAddNewUser={this.handleAddNewUser}

                />
                <br /><br />
                <DisplayInfor
                    listUsers={this.state.listUsers}
                />
                <hr />
            </div>
        );
    }
}

export default MyComponent;