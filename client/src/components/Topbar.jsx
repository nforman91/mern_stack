import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Topbar() {
  return (
    <StyledTop>
        <StyledTopLeft>
            <StyledTopIcon className="fa-brands fa-square-facebook"></StyledTopIcon>
            <StyledTopIcon className="fa-brands fa-square-twitter"></StyledTopIcon>
            <StyledTopIcon className="fa-brands fa-square-instagram"></StyledTopIcon>
        </StyledTopLeft>
        <StyledTopCenter>
            <StyledTopList>
                <StyledTopListItem>
                    <Link className="link" to="/">HOME</Link>
                </StyledTopListItem>
                <StyledTopListItem>
                    <Link className="link" to="/write">WRITE</Link>
                </StyledTopListItem>
            </StyledTopList>
        </StyledTopCenter>
        <StyledTopRight>
            
        </StyledTopRight>
    </StyledTop>
  )
};

const StyledTop = styled.div`
    width: 100%;
    height: 50px;
    background-color: white;
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    z-index: 999;
`;

const StyledTopLeft = styled.div`
    flex: 3;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledTopCenter = styled.div`
    flex: 6;
`;

const StyledTopRight = styled.div`
    flex: 3;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledTopIcon = styled.i`
    font-size: 20px;
    margin-right: 10px;
    color: #444;
    cursor: pointer;
`;

const StyledTopList = styled.ul`
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    list-style: none;
`;

const StyledTopListItem = styled.li`
    margin-right: 20px;
    font-size: 18px;
    font-weight: 300;
    cursor: pointer;
`;
