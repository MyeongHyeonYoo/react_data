// 조건 연산자(삼항 연산자)
import React from 'react';

function App() {

  const name = '리액트';
  return (
    <div>
      
      <h1> 
        {
          name === '리액트' ? (<h1>리액트 입니다.</h1>) : (<h2>리액트가 아닙니다.</h2>) 
        }
      </h1>
    </div>
  );
}


export default App;