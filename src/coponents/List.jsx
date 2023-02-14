import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrashCan, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { del_TODO, cheak_TODO } from "../redux/modules/todo";
import { Link} from 'react-router-dom';
function List() {
    const todo = useSelector((state) => {
      return state.todo.todo;
    });
    const dispatch = useDispatch();
    const delBtn = (id)=>{
      dispatch(del_TODO(id));
    }
    const checkBtn = (id) => {
      dispatch(cheak_TODO(id));
    };

  return (
    <div>
      <div>
        <Title>Doing...</Title>
        <ul>
          {todo.map((todo) => {
            if(!todo.done){
              return (
                <Listbox key={todo.id}>
                  <Textbox>
                    <Titletext>{todo.title}</Titletext>
                    <Context>{todo.text}</Context>
                  </Textbox>
                  <Iconbox>
                    <FontIcon>
                      <FontAwesomeIcon
                        icon={faCheck}
                        onClick={() => checkBtn(todo.id)}
                      />
                    </FontIcon>
                    <FontIcon>
                      <FontAwesomeIcon
                        icon={faTrashCan}
                        onClick={() => delBtn(todo.id)}
                      />
                    </FontIcon>
                    <Link to={`/${todo.id}`} key={todo.id}>
                      <FontIcon>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </FontIcon>
                    </Link>
                  </Iconbox>
                </Listbox>
              );
            }else{
              return null;
            }
          })}
        </ul>
      </div>
      <div>
        <Title>Done...</Title>
        <ul>
          {todo.map((todo) => {
             if (todo.done) {
               return (
                 <Listbox2 key={todo.id}>
                   <Textbox>
                     <Titletext>{todo.title}</Titletext>
                     <Context>{todo.text}</Context>
                   </Textbox>
                   <Iconbox>
                     <FontIcon onClick={() => checkBtn(todo.id)}>
                       <FontAwesomeIcon icon={faCheck} />
                     </FontIcon>
                     <FontIcon onClick={() => delBtn(todo.id)}>
                       <FontAwesomeIcon icon={faTrashCan} />
                     </FontIcon>

                     <Link to={`/${todo.id}`} key={todo.id}>
                       <FontIcon>
                         <FontAwesomeIcon icon={faMagnifyingGlass} />
                       </FontIcon>
                     </Link>
                   </Iconbox>
                 </Listbox2>
               );
             } else {
               return null;
             }
          })}
        </ul>
      </div>
    </div>
  );
}

    
export default List

const Title = styled.h3`
  color: #fff;
  font-weight: 400;
  font-family: "Patua One", cursive;
  font-size: 25px;
  line-height: 1;
  margin: 60px 0 30px;
`;
const Listbox = styled.li`
  box-sizing: border-box;
  width: 100%;
  padding: 30px 30px;
  background: #0e314c;
  border-radius: 10px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    background: #0a253a;
    color: #a0b0b6;
  }
`;
const Textbox = styled.div`
  width: calc(100% - 150px);
`;
const Titletext = styled.em`
  display: block;
  line-height: 1;
  font-size: 18px;
  font-weight: 500;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
  margin-bottom: 15px;
`;
const Context = styled.p`
  font-size: 15px;
  line-height: 20px;
  max-height: 40px;
  -webkit-line-clamp: 2;
  display: block;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  white-space: normal;
  overflow: hidden;
`;
const Iconbox = styled.div`
  width: 125px;
  display: flex;
`;
const FontIcon = styled.div`
  margin-left: 10px;
  font-size: 15px;
  width: 35px;
  height: 35px;
  line-height: 35px;
  color: #fff;
  text-align: center;
  border-radius: 35px;
  background: #041929;
  cursor: pointer;
`;
const Listbox2 = styled.li`
  width: 100%;
  padding: 30px 30px;
  border-radius: 10px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #0a253a;
  color: #a0b0b6;
  box-sizing: border-box;
`;