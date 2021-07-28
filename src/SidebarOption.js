import React from "react"
import "./SidebarOption.scss"

function SidebarOption(props) {
    Icon = props.Icon;
    return (
        <div className={`sidebarOption ${props.active && "sidebarOption--active"}`}>
            <Icon />
            <h2>{props.children}</h2>
        </div>
    )
}