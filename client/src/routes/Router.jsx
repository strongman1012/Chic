import { Route, Routes, Navigate } from "react-router-dom";
import MainLayout from "../layouts/Mainlayout";
import { useDispatch } from 'react-redux';
import Home from "../pages/Home";
import Faq from "../pages/Faq";
import Books from '../pages/Books';
import Terms from '../pages/Terms';
import BookCalendar from '../pages/BookCalendar';
import BookDetail from "../pages/BookDetail";
import Cart from "../pages/Cart";
import { setAuthentication } from "../reducer/AuthenticationSlice";
import Checkout from "../pages/Checkout";

const Router = () => {
  const dispatch = useDispatch();
  let token = localStorage.getItem("token");
  if (token) {
    dispatch(setAuthentication({ authentication: true }));
  }
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route
        path="/home"
        element={
          <MainLayout layout="home">
            <Home />
          </MainLayout>
        }
      />
      <Route
        path="/faq"
        element={
          <MainLayout>
            <Faq />
          </MainLayout>
        }
      />
      <Route
        path="/book"
        element={
          <MainLayout>
            <Books />
          </MainLayout>
        }
      />
      <Route
        path="/book-calendar"
        element={
          <MainLayout>
            <BookCalendar />
          </MainLayout>
        }
      />
      <Route
        path="/book-detail"
        element={
          <MainLayout>
            <BookDetail />
          </MainLayout>
        }
      />
      <Route
        path="/book-cart"
        element={
          <MainLayout>
            <Cart />
          </MainLayout>
        }
      />
      <Route
        path="/book-checkout"
        element={
          <MainLayout>
            <Checkout />
          </MainLayout>
        }
      />
      <Route
        path="/terms"
        element={
          <MainLayout>
            <Terms />
          </MainLayout>
        }
      />
      <Route
        path="/terms"
        element={
          <MainLayout>
            <Terms />
          </MainLayout>
        }
      />

    </Routes>

  );
};

export default Router;
