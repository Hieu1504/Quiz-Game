import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'Eric',
        address: 'Hoi Dan IT',
        age: 26
    };

    handleClick = (event) => {
        console.log(">>> click me my button");
        console.log("random",)

        this.setState({
            name: 'Hieu',
            age: Math.floor((Math.random() * 100) + 1)
        })

        // this.setState({
        //     age: Math.floor((Math.random() * 100) + 1)
        // })
    }

    handleOnMouseOver = (event) => {
        // console.log(event.pageX)
    }

    //jsx
    render() {
        return (
            <div>

                My name is {this.state.name} and I'm  {this.state.age}
                <button onMouseOver={this.handleOnMouseOver}>hover me</button>
                <button onClick={this.handleClick}>click me</button>

            </div>
        );
    }
}

export default MyComponent;