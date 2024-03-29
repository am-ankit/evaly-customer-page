import {FC} from "react";
import * as React from "react";
import { BodyStyle, Header, Customer, Notification, Table, Searchbar, Search, TableRow, Name, Email, UserData, PhoneData, Footer, ButtonList, SearchButton, DropdownButton, Dropdown, PageDropdown, Icon} from "./styles/Body.styled";
import { FaUserCircle } from "react-icons/fa";
import {IoIosNotificationsOutline} from "react-icons/io";
import { RiDeleteBinLine} from "react-icons/ri";
import { FaRegEdit} from "react-icons/fa";
import { CiLock} from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";

const Body:FC = () => {

    const data = [
        {
            name: "Robert Fox",
            email: "robert@gmail.com",
            phone: "(201) 555-0124",
            created: "6 April 2023",
            action: "123",
        },
        {
            name: "Robert Fox",
            email: "robert@gmail.com",
            phone: "(201) 555-0124",
            created: "6 April 2023",
            action: "123",
        },
        {
            name: "Robert Fox",
            email: "robert@gmail.com",
            phone: "(201) 555-0124",
            created: "6 April 2023",
            action: "123",
        },
        {
            name: "Robert Fox",
            email: "robert@gmail.com",
            phone: "(201) 555-0124",
            created: "6 April 2023",
            action: "123",
        },
        {
            name: "Robert Fox",
            email: "robert@gmail.com",
            phone: "(201) 555-0124",
            created: "6 April 2023",
            action: "123",
        },
        {
            name: "Robert Fox",
            email: "robert@gmail.com",
            phone: "(201) 555-0124",
            created: "6 April 2023",
            action: "123",
        },
        {
            name: "Robert Fox",
            email: "robert@gmail.com",
            phone: "(201) 555-0124",
            created: "6 April 2023",
            action: "123",
        },
]

    return (
        <>
        <BodyStyle>
            <Header>
                <Customer>Customers</Customer>
                <div>
                    <Notification><IoIosNotificationsOutline /></Notification>
                    <Notification><FaUserCircle /></Notification>
                </div>
            </Header>
            <Searchbar>
                <Search type="text" placeholder="Search..."/>
                <SearchButton>🔍</SearchButton>
            </Searchbar>
            <Table>
                <thead>
                    <TableRow>
                        <th>NAME</th>
                        <th>PHONE NUMBER</th>
                        <th>CREATED</th>
                        <th>ACTION</th>
                    </TableRow>
                </thead>
                <tbody>
                {data.map((d) => (
                    <TableRow >
                    <UserData>
                        <div>
                            <FaUserCircle className="user-list"/>
                        </div>
                        <div>
                            <Name>{d.name}</Name>
                            <Email>{d.email}</Email> 
                        </div>
                    </UserData>
                    <PhoneData><div>{d.phone}</div></PhoneData>
                    <td>{d.created}</td>
                    <td>
                        <Icon>
                        <FaRegEdit /> 
                        <CiLock /> 
                        <RiDeleteBinLine />
                        </Icon>
                    </td>
                </TableRow>             
                ))}                
                </tbody>             
            </Table>
            <Footer>
                <Dropdown>
                    Showing 
                        <PageDropdown>7 
                                <DropdownButton>
                                    <RiArrowDropDownLine className="dd-btn"/>
                                </DropdownButton>
                        </PageDropdown> of 50
                </Dropdown>
                <ButtonList>
                    <button>{"<"}</button>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>5</button>
                    <button>{">"}</button>
                </ButtonList>
            </Footer>
        </BodyStyle>
        </>
    )
}

export default Body;