import styled from "styled-components";

export const SideBarStyle = styled.div`
    
    width: auto;

    .main-menu{
        margin: 10px;
        padding: 10px;
    }

    span{
        margin: 4px;
        padding: 4px;
        width: auto;
    }

    span{
        margin: 3px 0px;
    }
`

export const CardItem = styled.div`
    display: flex;
    flex-direction: col;
    width:auto;

    &:hover {
        cursor: pointer;
        color: black;
        background-color: gray; 
        border-radius: 5px;
    }
`

export const Card = styled.div`
    color: gray;
    width: auto;
`

export const Title = styled.p`
    font-size: 10px;
    margin: 4px;
    padding: 4px;
`

export const Icon = styled.p`
    margin: 4px;
    padding: 4px;

    &:hover{
        cursor: pointer;
    }
`

export const SidebarHeader = styled.div`
    display: flex;
    flex-direction: col;
    justify-content: space-between;
`

export const SidebarTitle = styled.div`
    display: flex;
    flex-direction: col;
    color: blue;
`