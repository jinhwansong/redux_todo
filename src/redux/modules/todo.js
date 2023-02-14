
const ADD_TODO= 'ADD_TODO'
const DEL_TODO ='DEL_TODO'
const CHEAK_TODO = 'CHEAK_TODO'
// 초기상태값(state)
const initialState ={
    todo : 
    [
        {id:1,title:'가나다라',text:'가나다라', done:false },
    ],
}


export const add_TODO=(payload)=>{
    return{
        type:ADD_TODO,
        payload:payload
    }
}
export const del_TODO=(payload)=>{
    return{
        type:DEL_TODO,
        payload:payload
    }
}
export const cheak_TODO=(payload)=>{
    return{
        type:CHEAK_TODO,
        payload:payload
    }
}

//reducer :함수
//input : state action두개를 고정적으로 받는다.
const todo = (state = initialState, action)=>{
    switch (action.type){
        case ADD_TODO:
            return{
                todo : [...state.todo,action.payload ]
            }
        case DEL_TODO:
            return{
                todo : state.todo.filter((todo) => todo.id !== action.payload)
            }
         case CHEAK_TODO:
            return{
                todo : state.todo.map((todo) => todo.id === action.payload ? {...todo,done:!todo.done} : todo)
            }
        default:
            return state;
    }
}
export default todo