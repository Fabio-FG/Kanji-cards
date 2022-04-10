import React, { MouseEventHandler } from "react";
import { ReactComponent as Icon } from "../../../assets/icons/menu.svg";


//interface to style the icon
interface IconProps {
    className: string,
    fill?: string,
    stroke?: string
    onClick?: MouseEventHandler,
}

export const HamburguerIcon = (props: IconProps) => {
    return <Icon {...props} />
}