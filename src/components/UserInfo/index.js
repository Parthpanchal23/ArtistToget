import React from "react";
import {useDispatch} from "react-redux";
import {Avatar, Popover} from "antd";
import {Link} from "react-router-dom";
import {userSignOut} from "appRedux/actions/Auth";

const UserInfo = () => {

  const dispatch = useDispatch();

  const userMenuOptions = (
    
    <ul className="gx-user-popover">
      <li><Link to="../../social-apps/profile">My Account</Link></li>
      <li><Link to="../../update/ProfileUpdate">Edit</Link></li>
      <li onClick={() => dispatch(userSignOut())}>Logout
      </li>
    </ul>
  );

  return (
    <Popover overlayClassName="gx-popover-horizantal" placement="bottomRight" content={userMenuOptions}
             trigger="click">

      <Avatar src={require("assets/images/placeholder.jpg")}
              className="gx-avatar gx-pointer" alt="userlogo"/>
    </Popover>
  )

}

export default UserInfo;
