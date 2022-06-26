import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout())

    navigate("/login");

  }

  return (
    <div>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}

export default Logout;
