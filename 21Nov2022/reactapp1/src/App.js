import './App.css';
import Person, { myElement, x, greetings, flowers, myInput } from './Without_JSX';
import Product from './product';
import Student from './Student';


function App() {
  return (
    <div className="App" >

      <h1>Sajedul, Hello World!</h1>

      <div className='container'>
        <h1>Use Student Component</h1>
          <Student/>
      </div>

      <div className='container'>
        <h1>Product</h1>
        <div>
        {/* {Product({name:"Shirt", price:350, quantity:20})} */}
        <br></br>
        <Product name="Blezer" price="4000" quantity="16" />
        </div>
      </div>



      <div className="container">
      <h1>Use Without_JSX And JSX </h1>

        <table border="2">
          <tr>
            <th>Make variable</th>
            <th>Make Function</th>
            <th>Make Array</th>
            <th>Make Element </th>
            <th>Make Object </th>
            <th>Make InputConst </th>
          </tr>

          <tr>
            <td>
              {x}
            </td>
            <td>
              {greetings("Sajedul")}
            </td>
            <td>
              {flowers}
            </td>

            <td>
              {myElement}
            </td>

            <td>
              <ul>
                <li>{Person.name}</li>
                <li>{Person.age}</li>
                <li>{Person.address}</li>
              </ul>
            </td>

            <td>
              {myInput}
            </td>

          </tr>




        </table>
      </div>

    </div>
  );
}

export default App;
