import React, { MouseEventHandler } from "react";
import { ReactComponent as Icon } from "../../../assets/images/logov8.svg";


//interface to style the icon
interface IconProps {
    className?: string,
    fill?: string,
    stroke?: string
    onClick?: MouseEventHandler,
}

export const Logo = (props: IconProps) => {
    return <Icon {...props} />
}