import React from "react";
import "./Sidebar.scss";
import SidebarOption from "./SidebarOption";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarOption Icon={HomeIcon} active={true}>Home</SidebarOption>
            <SidebarOption Icon={SearchIcon}>Explore</SidebarOption>
            <SidebarOption Icon={NotificationsNoneIcon}>Notifications</SidebarOption>
            <SidebarOption Icon={MailOutlineIcon}>Messages</SidebarOption>
            <SidebarOption Icon={BookmarkBorderIcon}>Bookmarks</SidebarOption>
            <SidebarOption Icon={ListAltIcon}>Lists</SidebarOption>
            <SidebarOption Icon={PermIdentityIcon}>Profile</SidebarOption>
            <SidebarOption Icon={MoreHorizIcon}>More</SidebarOption>

            <Button varian="outlined" className="sidebar__obj" fullWidth>
                New Action
            </Button>
        </div>
    )
}