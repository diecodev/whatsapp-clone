import styled from "styled-components";
import {globalVariables as variables} from "../globalsVariables"

export const AsideContainer = styled.aside`
    width: 355px;
    height: 100vh;
    background-color: ${variables.white};
    border-right: 2px solid ${variables.whiteShadow};
`;

export const HeaderContainer = styled.header`
    width: 100%;
    height: 70px;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid ${variables.whiteShadow};
    position: sticky;
    top: 0;
    left: 0;
`;

export const Profile = styled.div`
    width: 55px;
    height: 55px;
    border-radius: 54%;
    background-color: ${variables.white};
    background-color: ${variables.chat};
`;

export const HeaderMenu = styled.div`
    display: flex;
    gap: 10px;
`;

export const MenuIcon = styled.div`
    cursor: pointer;
    color: ${variables.chatShadow};
    display: flex;

    &:hover{
        color: ${variables.chat};
    }
`;

export const ChatCard = styled.div`
    width: 100%;
    height: 100px;
    border-bottom: 1px solid ${variables.whiteShadow};
    padding: 10px;
    display: flex;
    align-items: center;
    column-gap: 10px;
`;

export const ChatCardProfile = styled.div`
    height: 70px;
    width: 70px;
    background-color: red;
    border-radius: 50%;
`;
export const ChatCardBody = styled.div`
    width: calc(100% - 80px);
    height: 70px;
    background-color: green;
`;