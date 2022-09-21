import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../redux/actions/action';

const dispatch = useDispatch();
const removeData = (item) => dispatch(removeFromCart(item))

export default removeData;