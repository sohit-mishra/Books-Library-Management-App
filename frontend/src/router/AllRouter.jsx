import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import MyBooks from "@/pages/MyBooks";
import NotFound from "@/router/NotFound";
import PrivateRoute from "@/router/PrivateRoute";

export default function AllRouter() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<PrivateRoute />}>
          <Route path="/mybooks" element={<MyBooks />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
