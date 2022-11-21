
import './App.css';
import {myElement} from './Without_JSX';

function App() {
  return (
    <div className="App">
      <h1>Sajedul, Hello World!</h1>

      <table border="2" >
        <tr>
          <th>Name</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>John</td>
          <td>John</td>
        </tr>
        <tr>
          <td></td>
          <td>
            {myElement}
          </td>
        </tr>
      </table>
    </div>
  );
}

export default App;
