import ModalCreateUser from "./ModalCreateUser";

const ManageUser = (props) => {
    return (
        <div classNameName="manage-user-content">
            <div classNameName="title">
                Manage User
            </div>
            <div classNameName="users-content">
                <div>
                    <button>Add New Users</button>
                </div>
                <div>
                    table-users
                    <ModalCreateUser />
                </div>
            </div>
        </div>
    )
}

export default ManageUser;