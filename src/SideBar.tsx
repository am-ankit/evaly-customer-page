import {FC, useState} from "react";
import * as React from "react";
import { FaArrowRightArrowLeft, FaAppStoreIos} from "react-icons/fa6"
import { SideBarStyle, Card, CardItem, Title, Icon, SidebarHeader, SidebarTitle } from "./styles/SideBarStyle.styled";

const SideBar:FC = () => {

    const [showSideBar, setShowSideBar] = useState(true);

    const MAIN_MENU: Array<string> = ["Dashboard", "Order Management", "Customers", "Coupon Code", "Categories", "Transaction", "Brand"];

    const PRODUCTS: Array<string> = ["Add Products", "Product List"];

    const ADMIN: Array<string> = ["Manage Admins", "Admin Roles"];

    const toggleSidebar = () => {
        
        showSideBar ? setShowSideBar(false) : setShowSideBar(true);
    }
    return (
        <>
        <SideBarStyle>
            <SidebarHeader>
                {showSideBar && <SidebarTitle>
                    <Icon><FaAppStoreIos /></Icon>
                    <span>evaly</span>
                </SidebarTitle>}
                <Icon><FaArrowRightArrowLeft onClick={toggleSidebar}/></Icon>
            </SidebarHeader>
            
            <Card>
                {showSideBar && <Title>MAIN MENU</Title>}              
                {MAIN_MENU.map((item, index) => (
                    <CardItem key={index}>
                    <Icon><FaAppStoreIos /></Icon>
                    {showSideBar && <span>{item}</span>}
                    </CardItem>
                ))}
            </Card>

            <Card>
            {showSideBar && <Title>PRODUCTS</Title>}
                {PRODUCTS.map((item, index) => (
                        <CardItem key={index}>
                        <Icon><FaAppStoreIos /></Icon>
                        {showSideBar && <span>{item}</span>}
                        </CardItem>
                    ))}               
            </Card>

            <Card>
                {showSideBar && <Title>ADMIN</Title>}
                {ADMIN.map((item, index) => (
                    <CardItem key={index}>
                    <Icon><FaAppStoreIos /></Icon>
                    {showSideBar && <span>{item}</span>}
                    </CardItem>
                ))}          
            </Card>
        </SideBarStyle>
        </>
    )
}

export default SideBar;