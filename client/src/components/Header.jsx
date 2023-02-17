import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
        <StyledHeaderTitle>Nate's Blog</StyledHeaderTitle>
        <StyledHeaderImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/440px-Image_created_with_a_mobile_phone.png" alt="phone pic"/>
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

const StyledHeaderImg = styled.img`
    width: 100%;
    height: 450px;
    margin-top: 80px;
    object-fit: cover;
`;
