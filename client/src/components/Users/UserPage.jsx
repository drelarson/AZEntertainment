import React from "react";
import UserMap from "./UserMap";


const UserPage = ({ setUserList,userList, theme }) => {
    return (
        <>
            <UserMap
                array={userList}
                setUserList={setUserList}
            />
        </>
    )
}
export default UserPage
