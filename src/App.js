import {Button} from 'react-bootstrap'
import './App.css';
import { DefaultLayout } from './layout/DefaultLayout';
import { Entry } from './pages/entry/Entry.page';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/* <Entry />*/}
        <DefaultLayout >
          send page components
        </DefaultLayout>
      
      </header>
    </div>
  );
}

export default App;
