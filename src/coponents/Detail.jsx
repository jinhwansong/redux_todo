import React from 'react'
import styled from "styled-components";
import { useSelector} from "react-redux";
import { Link, useParams } from "react-router-dom";

function Detail() {
    const todos = useSelector((state) => {
      return state.todo.todo;
    });
    const {id} = useParams()
    const item = todos.find((item)=> item.id === parseInt(id))

  return (
    <Bgcontent>
      <TOPdetail>
        <TopId>현재페이지의 ID는 {item.id} 입니다.</TopId>
        <Link to="/">
          <PageBack>go to home </PageBack>
        </Link>
      </TOPdetail>
      <Title>{item.title}</Title>
      <p>{item.text}</p>
    </Bgcontent>
  );
}
const Bgcontent = styled.div`
  background: #0e314c;
  width:100%;
  padding:30px;
`;
const TOPdetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  padding-bottom: 25px;
  border-bottom: 1px solid #1e4a6c;;
`;
const TopId = styled.p`
  font-size:18px;
  line-height: 1;
`
const Title = styled.h3`
  font-size: 22px;
  line-height: 28px;
  margin-bottom: 20px;
  font-weight:700;
`;

const PageBack = styled.div`
  width: 120px;
  height: 55px;
  line-height: 55px;
  background: #041929;
  color: #fff;
  border-radius: 10px;
  text-align:center;
`;
export default Detail