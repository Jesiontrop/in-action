import React from "react"
import "./SidebarOption.scss"

function SidebarOption({ children, Icon, active, onClick, id }) {
    return (
        <div id={id} 
            className={`sidebarOption ${active && "sidebarOption--active"}`}
            onClick={onClick}>
            <Icon />
            <h2>{children}</h2>
        </div>
    )
}

export default SidebarOption;