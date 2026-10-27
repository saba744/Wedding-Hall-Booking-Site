
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./home";
import Story from "./Story";
import Services from "./Services";
import Catering from "./Catering";
import Transport from "./Transport";
import Bridal from "./Bridal";
import Photo from "./Photo";
import Banquet from "./Banquet";
import Royal from "./Royal";
import Elegant from "./Elegant";
import Heritage from "./Heritage";
import Paradise from "./Paradise";
import BookingSuccess from "./BookingSuccess";
import DreamVenue from "./DreamVenues";
import VenueDetail from "./VenueDetail ";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
         <Route path="/story" element={<Story />} />
         <Route path="/services" element={<Services />} />
         
         
        <Route path="/catering" element={<Catering />} />
        <Route path="/transport" element={<Transport />} />
        <Route path="/bridal" element={<Bridal />} />
        <Route path="/photo" element={<Photo />} />
        <Route path="/banquet" element={<Banquet/>} />
       <Route path="/royal" element={<Royal />} />
       <Route path="/elegant" element={<Elegant />} />
       <Route path="/heritage" element={<Heritage />} />
       <Route path="/paradise" element={<Paradise />} />
       <Route path="/booking-success" element={<BookingSuccess />} />
        <Route path="/dreamvenues" element={<DreamVenue />} />
        <Route path="/dreamvenues" element={<DreamVenue />} />
        <Route path="/dreamvenues/:id" element={<VenueDetail/>} />

      </Routes>
    </Router>
  );
}

export default App;
