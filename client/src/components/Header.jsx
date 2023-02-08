import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
        <StyledHeaderTitle>Blog</StyledHeaderTitle>
    </StyledHeader>
  )
}

const StyledHeader = styled.div`
    margin-top: 60px;
`;

const StyledHeaderTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #444;
    font-size: 100px;
`;
