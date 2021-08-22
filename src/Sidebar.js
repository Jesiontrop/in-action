import React,  {useEffect, useState} from "react";
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
import ProfileInfo from "./ProfileInfo";

function Sidebar() {

    let countOptions = 0;
    const [actives, setActives] = useState([true]);

    useEffect(() => {
        countOptions = document.querySelectorAll("div.sidebarOption").length;
    }, [])

    const optionChanged = (e) => {
        let temp = []
        for (let i = 0; i < countOptions; i++) {
            temp[i] = false;
        }
        temp[e.currentTarget.id] = true;

        setActives(temp)
    }

    return (
        <div className="sidebar">
            <SidebarOption id="0" Icon={HomeIcon} active={actives[0]} onClick={optionChanged}>Home</SidebarOption>
            <SidebarOption id="1" Icon={SearchIcon} active={actives[1]} onClick={optionChanged}>Explore</SidebarOption>
            <SidebarOption id="2" Icon={NotificationsNoneIcon} active={actives[2]} onClick={optionChanged}>Notifications</SidebarOption>
            <SidebarOption id="3" Icon={MailOutlineIcon} active={actives[3]} onClick={optionChanged}>Messages</SidebarOption>
            <SidebarOption id="4" Icon={BookmarkBorderIcon} active={actives[4]} onClick={optionChanged}>Bookmarks</SidebarOption>
            <SidebarOption id="5" Icon={ListAltIcon} active={actives[5]} onClick={optionChanged}>Lists</SidebarOption>
            <SidebarOption id="6" Icon={PermIdentityIcon} active={actives[6]} onClick={optionChanged}>Profile</SidebarOption>
            <SidebarOption id="7" Icon={MoreHorizIcon} active={actives[7]} onClick={optionChanged}>More</SidebarOption>


            <Button varian="outlined" className="sidebar__obj" fullWidth>
                New Action
            </Button>

            <div className="sidebar__lastObj">
                <ProfileInfo 
                    username="@Jesiontrop"
                    displayName="Andrey Barkov"
                    avatar="https://www.malatyakale.bel.tr/tema/genel/uploads/profiller/anonymous-avatar-icon-25_1.jpg"
                />
            </div>
        </div>
    )
}

export default Sidebar;