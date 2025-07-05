import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [isLoggedIn,setIsLoggedIn]=useState(true);
  return (
    <Provider store={store}>
      <div className='App'>
        {isLoggedIn && <HomeParent/>}
      </div>
    </Provider>
  );
}

export default App;
