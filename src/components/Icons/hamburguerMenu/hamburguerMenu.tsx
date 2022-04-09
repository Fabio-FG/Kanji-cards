import React from "react";
import { ReactComponent as Icon } from "../../../assets/icons/menu.svg";


//interface to style the icon
interface IconProps {
    className: string,
    fill?: string,
    stroke?: string
}

export const HamburguerIcon = (props: IconProps) => {
    return <Icon {...props} />
}