import React from 'react'; 


function App () {

  const name = '리액트';
  const style = {
    background : 'black',
    color : 'aqua',
    fontSize : '40px',
    fontWeight : 'bold',
    padding : '16px'
  };
  return <div style={style}>{name}</div>
}

export default App;