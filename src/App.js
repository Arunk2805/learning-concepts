import logo from './logo.svg';
import './App.css';
import Login from './components/LoginPage/Login';
import Cart from './components/Add_Discount_to _item/Cart';
import Crud from './components/Crud/Crud';
import Parent from './components/pass_data_C-to-P/Parent';
import ParentComp from './components/pass_data_P-to-C/ParentComp';

function App() {
  return (
    <div>
     {/* <Login/> */}
     {/* <Cart/> */}
     {/* <Crud/> */}
     {/* <Parent/> */}
     <ParentComp/>
    </div>
  );
}

export default App;
