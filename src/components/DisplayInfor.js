import React from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg';

class DisplayInfor extends React.Component {
    constructor(props) {
        console.log(">>> call contructor : 1")
        super(props);
        this.state = {
            isShowListUser: true
        }

    }

    componentDidMount() {
        console.log('>>> call me component did mount')
        setTimeout(() => { document.title = 'Eric & Hoi dan IT' }, 3000);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('>>> call me component did update', this.props, prevProps)
        if (this.props.listUsers !== prevProps.listUsers) {
            if (this.props.listUsers.lenght === 5) {
                alert('you got 5 users')
            }
        }
    }

    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    render() {
        console.log('>>> call me render')
        //destructuring array/object
        const { listUsers } = this.props; // object
        //props => viết tắt của properties
        return (
            <div className='display-infor-container'>
                {/* <img src={logo} /> */}
                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                        {this.state.isShowListUser === true ? "Hide List Users:" : "Show List Users:"}
                    </span>
                </div>
                {this.state.isShowListUser &&
                    <>
                        {listUsers.map((user, index) => {
                            return (
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div>
                                        <div>My name's {user.name} </div>
                                        <div>My age's {user.age} </div>
                                    </div>
                                    <div>
                                        <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
                                    </div>
                                    <hr />
                                </div>
                            )
                        })}
                    </>
                }
            </div>
        )
    }
}

export default DisplayInfor;