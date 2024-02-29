
import { Provider } from 'react-redux';
import './App.css';

import Body from './components/Body';
import appStore from './utils/appStore';

function App() {

  console.log("Inside App");
  return (
    <div>
      <Provider store={appStore}> 
        <Body/>
      </Provider>
    </div>
  );
}

export default App;
