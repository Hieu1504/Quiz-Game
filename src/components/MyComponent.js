import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    render() {
        const myInfor = ['ab', 'b', 'c']
        return (
            <div>
                <UserInfor />
                <br /><br />
                <DisplayInfor name="Hoi dan IT" age="30" />
                <hr />
                <DisplayInfor name={"Eric"} age={26} myInfor={myInfor} />
            </div>
        );
    }
}

export default MyComponent;