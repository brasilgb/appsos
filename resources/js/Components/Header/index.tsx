import React from 'react'
import UserDropDown from "../UserDropDown"

const Header = ({mensagens}: any) => {
    return (
        <header className="flex items-center justify-between h-[65px] bg-white shadow-sm pr-4">
            <div></div>
            <div className="flex items-center">
            <UserDropDown />
            </div>
        </header>
    )
}

export default Header