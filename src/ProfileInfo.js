import React, {useState} from "react";
import "./ProfileInfo.scss"
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import {Menu, Avatar} from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';

function ProfileInfo({displayName, username, avatar, onClick}) {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <div id="box" className="box" onClick={handleClick}>
                <Avatar src={avatar}/>
                <div className="box__info" >
                    <span id="displayname">{displayName}</span>
                    <span id="username">{username}</span>
                </div>
                <div className="box__more">
                    <MoreHorizIcon />
                </div>
            </div>
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Sign out</MenuItem>
            </Menu>
        </div>
    );
}

export default ProfileInfo;