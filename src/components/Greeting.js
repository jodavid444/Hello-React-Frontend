import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getText from '../redux/getText';

function Greeting() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getText());
  }, []);
  const message = useSelector((state) => state.text);
  console.log(message);

  return (
    <h1>
      { message.data }
      {' '}
      User
    </h1>
  );
}

export default Greeting;
