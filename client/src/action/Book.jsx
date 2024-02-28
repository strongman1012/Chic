
const APIURL = "http://localhost:3001"
import { toast } from 'react-toastify';
import { setCategories } from '../reducer/CategorySlice';
import { setServices } from '../reducer/ServiceSlice';
import { setStaffs } from '../reducer/StaffSlice';

export const AllCategories = () => {
  return async (dispatch) => {
    try {
      // Make API request to register the user
      const response = await fetch(
        `${APIURL}/book/getCategories`,
        {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (!response.ok) {
        throw new Error('Failed to categories');
      }
      const data = await response.json();
      dispatch(setCategories({ categories: data }))
    } catch (error) {
      // Dispatch failure action if there's an error
      console.log(error, 'error');
    }
  }
}

export const AllServices = () => {
  return async (dispatch) => {
    try {
      // Make API request to register the user
      const response = await fetch(
        `${APIURL}/book/getServices`,
        {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (!response.ok) {
        throw new Error('Failed to services');
      }
      const data = await response.json();
      dispatch(setServices({ services: data }))
    } catch (error) {
      // Dispatch failure action if there's an error
      console.log(error, 'error');
    }
  }
}
export const AllStaffs = () => {
  return async (dispatch) => {
    try {
      // Make API request to register the user
      const response = await fetch(
        `${APIURL}/book/getStaffs`,
        {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (!response.ok) {
        throw new Error('Failed to staffs');
      }
      const data = await response.json();
      dispatch(setStaffs({ staffs: data }))
    } catch (error) {
      // Dispatch failure action if there's an error
      console.log(error, 'error');
    }
  }
}

export const placeOrder = (placeOrderData) => {
  
  return async (dispatch) => {
    try {
      // Make API request to register the user
      const response = await fetch(
        `${APIURL}/book/placeOrder`,
        {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(placeOrderData)
        }
      );
      if (!response.ok) {
        throw new Error('Failed to register');
      }
      const data = await response.json();
      // Dispatch success action if the request is successful
      localStorage.removeItem("CartList");
      localStorage.removeItem("Additional");
      localStorage.removeItem('serviceList');
      localStorage.removeItem('selectedTime');
      localStorage.removeItem('showModalData');
      toast.success('Place order Successful!');

    } catch (error) {
      // Dispatch failure action if there's an error
      toast.error("Place order");
    }
  }
}

