import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import { add_TODO } from '../redux/modules/todo';
function Input() {
  //포커싱을 해봅시다....
  const idRef = useRef('')
  useEffect(()=>{
    idRef.current.focus()
  })
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const titleHandler = (event) => {
    setTitle(event.target.value);
  };
  const textHandler = (event) => {
    setText(event.target.value);
  };
  //store에 접근해서 값 가져오기 useSelector
  const todo = useSelector((state) => {
    return state.todo.todo;
  });

  const dispatch = useDispatch();
  const addBtn = () => {
    if (title.trim() === "" ) {
      alert("제목을 작성해주세요");
      return
    }else if(text.trim() === ""){
      alert("내용을 작성해주세요");
      return;
    }
    dispatch(
      add_TODO({
        id: (todo.at(-1)?.id ?? 0) + 1,
        title: title,
        text: text,
        done: false,
      })
    );
  };
  return (
    <InputWarp>
      <Inputbox
        type="text"
        placeholder="제목을 적어주세요"
        value={title}
        onChange={titleHandler}
        ref={idRef}
      />
      <Inputbox
        type="text"
        placeholder="내용을 적어주세요"
        value={text}
        onChange={textHandler}
      />
      <Button type="submin" onClick={addBtn}>
        추가하기
      </Button>
    </InputWarp>
  );
  
};

export default Input

const InputWarp = styled.div`
  display: flex;
`;
const Inputbox = styled.input`
  background: #0e314c;
  width: 420px;
  height: 55px;
  border-radius: 10px;
  padding: 20px 20px;
  box-sizing: border-box;
  outline: 0;
  border: 0;
  color: #fff;
  margin-right: 30px;
  &::placeholder {
    color: #b2c3c9;
  }
  &:focus {
    background: #0a253a;
  }
`;
const Button = styled.button`
  width: 120px;
  height: 55px;
  line-height: 55px;
  background: #041929;
  color: #fff;
  border-radius: 10px;
  outline: 0;
  border: 0;
  cursor: pointer;
`;
