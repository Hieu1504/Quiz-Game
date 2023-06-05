import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {

    state = {
        listUsers: [
            { id: 1, name: "Hoi dan IT", age: "30" },
            { id: 2, name: "Eric", age: "26" },
            { id: 3, name: "Hieu", age: "30" },

        ]
    }

    render() {
        //DRY => don't repeat youself
        return (
            <div>
                <UserInfor />
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