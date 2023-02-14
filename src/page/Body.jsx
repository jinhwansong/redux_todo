import React from 'react'
import styled from "styled-components";
import Header from '../coponents/Header';
import Input from '../coponents/Input';
import List from '../coponents/List';
import { Link } from "react-router-dom";
function Body() {
    
    return (
      <>
        <Background>
          <Link to="/">
            <Logo xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
              <polygon points="0 0 80 0 0 80 0 0" fill="#121212" />
              <path
                fill="#fff"
                d="m15.75,15.86c-4.31,4.31-4.31,11.24,0,15.56l10.68,10.68c.28.28.71.42,1.06.21.42-.14.64-.49.64-.92l.07-.92c.07-.49.42-.85.92-.92,1.56,0,2.83-1.27,2.83-2.83.07-.49.42-.85.92-.92,1.56,0,2.83-1.27,2.83-2.83.07-.49.42-.85.92-.92,1.56,0,2.83-1.27,2.83-2.83.07-.49.42-.85.92-.92l.92-.07c.28,0,.49-.07.71-.28.07-.07.21-.21.21-.35.14-.42.07-.78-.21-1.06l-10.68-10.68c-4.31-4.31-11.24-4.31-15.56,0Zm9.19,6.36c-.42-.42-.42-.99,0-1.41s.99-.42,1.41,0l2.12,2.12c.42.42.42.99,0,1.41s-.99.42-1.41,0l-2.12-2.12Zm-4.24,4.24c-.42-.42-.42-.99,0-1.41s.99-.42,1.41,0l2.12,2.12c.42.42.42.99,0,1.41s-.99.42-1.41,0l-2.12-2.12Zm11.31-1.41l-7.07,7.07c-.42.42-.99.42-1.41,0s-.42-.99,0-1.41l7.07-7.07c.42-.42.99-.42,1.41,0s.42.99,0,1.41Z"
              />
            </Logo>
          </Link>
          <Inner>
            <Header></Header>
            <Input></Input>
            <List></List>
          </Inner>
        </Background>
      </>
    );
}

export default Body;


const Background = styled.div`
  background: linear-gradient(to right, #09203f, #0a1e2d);
  width: 100%;
  min-height: 100vh;
  position: relative;
`;
const Inner = styled.div`
  width: 1000px;
  margin: 0 auto;
  color: #fff;
  padding: 150px 0; ;
`;
const Logo = styled.svg`
  width: 80px;
  height: 80px;
  position: absolute;
  left: 0;
  top: 0;
`;