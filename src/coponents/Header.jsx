import React from 'react'
import styled from "styled-components";

function Header() {
    const HeaderWrap = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-bottom:40px;
    `;
    const Title = styled.h1`
        color: #fff;
        font-weight: 400;
        font-family: "Patua One", cursive;
        font-size:60px;
        line-height: 1;
    `;
    const Time = styled.p`
        color:#b2c3c9;
        line-height: 1;
        
    `;
    const data = new Date();
    const time = data.toLocaleString();
    return (
      <HeaderWrap>
        <Title>My TodoList</Title>
        <Time>{time}</Time>
      </HeaderWrap>
    );
}

export default Header