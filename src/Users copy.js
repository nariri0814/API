// //useReducer사용 -> useAsync사용
// import React, { useState } from 'react';
// import axios from 'axios';
// import useAsync from './useAsync';
// import User2 from './User2'

// async function getUsers() {
//     const response = await axios.get('https://jsonplaceholder.typicode.com/users');
//     return response.data;
// }

// // function reducer(state, action) {
// //     switch(action.type){
// //         case 'LOADING' : 
// //             return {
// //                 loading: true,
// //                 data: null,
// //                 error: null
// //             }
// //         case 'SUCCESS' :
// //             return {
// //                 loading: false,
// //                 data: action.data,
// //                 error: null
// //             }
// //         case 'ERROR' :
// //             return {
// //                 loading: false,
// //                 data: null,
// //                 error: action.error
// //             }
// //         default:
// //             throw new Error (`Unhandled action type: ${action.type}`);
// //     }
// // }


// function Users() {

//     const [userId, setUserId] = useState(null);
//     const [state, refetch] = useAsync(getUsers, [], true); //처음 랜더링될 때 하는 요청은 생략

//     // const [state, dispatch] = useReducer(reducer, {
//     //     loading: false,
//     //     data: null,
//     //     error: null
//     // })

//     // const fetchUsers = async () => {
//     //     dispatch({type: 'LOADING'})
//     //     try {
//     //         const response = await axios.get('https://jsonplaceholder.typicode.com/users');
//     //         dispatch({type:'SUCCESS', data: response.data})
//     //     } catch (e) {
//     //         dispatch({type: 'ERROR', error: e});
//     //     }
//     // };

//     // useEffect(() => {
//     //     fetchUsers();
//     // },[]);

    
//     const {loading, data: users, error} = state;
    
//     if(loading) return <div>로딩중...</div>
//     if(error) return <div>에러 발생</div>
//     if(!users) return <button onClick={refetch}>불러오기</button>;

//     return (
//         <>
//             <ul>
//                 {users.map(user=> 
//                 (<li key={user.id} 
//                 onClick={() => setUserId(user.id)} 
//                 style={{cursor: 'pointer'}}>
//                     {user.username} ({user.name})
//                 </li>))}
//             </ul>
//             <button onClick={refetch}>다시 불러오기</button>
//             {userId && <User2 id={userId}/>}
//         </>

//     )
// }


// export default Users;

import React, { useState } from 'react';
import axios from 'axios';
import useAsync from './useAsync';
import User2 from './User2';

// useAsync 에서는 Promise 의 결과를 바로 data 에 담기 때문에,
// 요청을 한 이후 response 에서 data 추출하여 반환하는 함수를 따로 만들었습니다.
async function getUsers() {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );
  return response.data;
}

function Users() {
  const [userId, setUserId] = useState(null);
  const [state, refetch] = useAsync(getUsers, [], true);

  const { loading, data: users, error } = state; // state.data 를 users 키워드로 조회

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return <button onClick={refetch}>불러오기</button>;
  return (
    <>
      <ul>
        {users.map(user => (
          <li
            key={user.id}
            onClick={() => setUserId(user.id)}
            style={{ cursor: 'pointer' }}
          >
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={refetch}>다시 불러오기</button>
      {userId && <User2 id={userId} />}
    </>
  );
}

export default Users;