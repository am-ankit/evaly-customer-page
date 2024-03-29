import styled from "styled-components";

export const BodyStyle = styled.div`

    width: 100%;
    height: 100%vh;
    background-color: #EAF0F1;

    .customer{
        display: flex;
        justify-content: space-between;
        margin: 5px;
        padding: 5px;
    }

    .user-list{
        height: 30px;
        width: 30px;
        margin: 2px;
        padding: 2px;
    }

    .user-info{
        color: blue;
        display: flex;
        flex-direction: row;
    }  

    td, th{ 
        padding: 5px; 
        border-bottom: 1px solid gray; 
        width: 400px; 
        height: 50px;
        overflow: auto; 
    } 

    th{
        color: gray;
        font-weight: normal;
        text-align: left;
        display: flex;
        align-item: center;
    }  

    .line{
        border: 1px solid red;
    }

    // .dropdown, .foot{
    //     color: gray;
    //     margin: 20px 10px;
    //     display: flex;
    //     flex-direction: col;
    //     align-items: center;
        
    // }

    // .foot{
    //     display: flex;
    //     justify-content: space-between;
    //     background: white;
    //     margin: 0px 10px 20px 10px;
    //     height: 50px;
    //     border-bottom: 1px solid gray;
    // }

    button{
        cursor: pointer;
        background: gray;
        border: none;
        margin: 1px;
        padding: 8px 10px;
        border-radius: 2px;
    }

    button:hover{
        background: blue;
        color: white;
    }

    .page{
        cursor: pointer;
        background: none;
        border: 1px solid black;
        margin: 8px;
        padding: 4px 20px;
        border-radius: 4px;
        display: flex;
        align-content: center;
        align-items: center;
    }

    .icon{
        color: #616C6F;
        margin: 9px;
    }

    .search-btn, input{   
        background-color:transparent;
        border:0;
    }

    input{
        margin: 6px;
    }

    .dd-icon{
        text: bold;
        margin-bottom: 50px;
    }

    .dd-btn{
        font-size: 20px;
        margin-left: 2px;
    }

    @media (max-width: 1024px) {
        .search-bar{
            background: white;
            margin: 10px;
            border-radius: 4px;
            width: 27%;
            padding: 1px;
            display: inline-block;    
        }
    }
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Customer = styled.h2`
    margin: 2px 8px;
    padding: 2px;
`

export const Notification = styled.span`
    margin: 2px;
    padding: 2px;
    font-size: 20px;
`

export const Table = styled.table`
    table-layout: fixed; 
    width: 400px;
    border-collapse: collapse;
    width: 100%;
`

export const Searchbar = styled.div`
    background: white;
    margin: 10px;
    border-radius: 4px;
    width: 19%;
    padding: 1px;     
    display: inline-block;    
`

export const Search = styled.input`
    background-color:transparent;
    border:0;
    &: focus{
        outline: none; 
    }    
`

export const TableRow = styled.tr`
    display: flex;
    flex-direction: row;
    justify-content: center;    
    align-items: center;
    align-content: center;   
    margin: 0px 10px; 
    background-color: white;  
    border-radius: 5px;   
`

export const Name = styled.h4`
    margin: 2px;   
`

export const Email = styled.p`
    color: gray;
    margin: 2px 2px;   
`

export const UserData = styled.td`
    display: flex;
    flex-direction: row;  
`

export const PhoneData = styled.td`
    display: flex;
    align-item: flex-end; 
`

export const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    background: white;
    margin: 0px 10px 20px 10px;
    height: 50px;
    border-bottom: 1px solid gray; 
    color: gray;
    flex-direction: col;
    align-items: center;  
`

export const ButtonList = styled.div`
    margin: 30px;   
`

export const SearchButton = styled.button`
    cursor: pointer;
    // background: none;
    // border: none;
    margin: 1px;
    padding: 8px 10px;
    border-radius: 2px;  
    background-color:transparent;
    // border:0; 

    &: hover{
        background-color:red;
    }
`

export const DropdownButton = styled.span`
    font-size: 20px;
    margin-left: 2px;  
`

export const Dropdown = styled.p`
    font-size: 20px;
    margin-left: 2px; 
    color: gray;
        margin: 20px 10px;
        display: flex;
        flex-direction: col;
        align-items: center; 
`

export const PageDropdown = styled.button`
    cursor: pointer;
    background: none;
    border: 1px solid black;
    margin: 8px;
    padding: 4px 20px;
    border-radius: 4px;
    display: flex;
    align-content: center;
    align-items: center;
`

export const Icon = styled.span`
    color: #616C6F;
    // margin: 9px;
    display: flex;
    justify-content: space-between;
    width: 100px;
`