import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import PrivateRoute from './components/PrivateRoute';

const AppRoutes = () => {
    
   return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path='/' element={<PrivateRoute/>}>
                <Route exact path='/' element={<Home/>}/>
            </Route>
            <Route path="*" component={() => <h1>Page not found</h1>} />
        </Routes>
    </BrowserRouter>
   )
}

export default AppRoutes;