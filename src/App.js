import { Route, Routes } from 'react-router-dom';
import './App.css';
import Add from './Components/Add/Add';
import Blog from './Components/Blog/Blog';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import InventoryDetails from './Components/InventoryDetails/InventoryDetails';
import Login from './Components/Login/Login';
import Manage from './Components/Manage/Manage';
import MyItem from './Components/MyItem/MyItem';
import NotFound from './Components/NotFound/NotFound';
import Register from './Components/Register/Register';
import RequireAuth from './Components/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/ShowInventory/:ShowInventoryId' element={
          <RequireAuth>
            <InventoryDetails></InventoryDetails>
          </RequireAuth>
        }></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/myItem' element={
          <RequireAuth>
            <MyItem></MyItem>
          </RequireAuth>
        }></Route>
        <Route path='/add' element={
          <RequireAuth>
            <Add></Add>
          </RequireAuth>
        }></Route>
        <Route path='/orders' element={
          <RequireAuth>
            <Manage></Manage>
          </RequireAuth>
        }></Route>
      
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
