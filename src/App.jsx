import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login'
import Signin from './pages/Signin'
import Reset_pass from './pages/Reset_pass';
import After_reset from './pages/After_reset';
import Home from './pages/Home';
import Navbar from './components/Navbar';


import Lahore_info from './components/Cities/Lahore_info';
import Lahore_general from './components/Cities/Lahore_general';
import Lahore_attractions from './components/Cities/Lahore_attractions';



import Islamabad_info from './components/Cities/Islamabad_info';
import Islamabad_general from './components/Cities/Islamabad_general';
import Islamabad_attractions from './components/Cities/Islamabad_attractions';



import Faisalabad_info from './components/Cities/Faisalabad_info';
import Faisalabad_general from './components/Cities/Faisalabad_general';
import Faisalabad_attractions from './components/Cities/Faisalabad_attractions';



import Nathiagali_info from './components/Cities/Nathiagali_info';
import Nathiagali_general from './components/Cities/Nathiagali_general';
import Nathiagali_attractions from './components/Cities/Nathiagali_attractions';



import Naran_info from './components/Cities/Naran_info';
import Naran_general from './components/Cities/Naran_general';
import Naran_attractions from './components/Cities/Naran_attractions';


import Skardu_info from './components/Cities/Skardu_info';
import Skardu_general from './components/Cities/Skardu_general';
import Skardu_attractions from './components/Cities/Skardu_attractions';


import Hunza_info from './components/Cities/Hunza_info';
import Hunza_general from './components/Cities/Hunza_general';
import Hunza_attractions from './components/Cities/Hunza_attractions';


import Gilgit_info from './components/Cities/Gilgit_info';
import Gilgit_general from './components/Cities/Gilgit_general';
import Gilgit_attractions from './components/Cities/Gilgit_attractions';


import Jhelum_info from './components/Cities/Jhelum_info';
import Jhelum_general from './components/Cities/Jhelum_general';
import Jhelum_attractions from './components/Cities/Jhelum_attractions';


import Hyderabad_info from './components/Cities/Hyderabad_info';
import Hyderabad_general from './components/Cities/Hyderabad_general';
import Hyderabad_attractions from './components/Cities/Hyderabad_attractions';


import Multan_info from './components/Cities/Multan_info';
import Multan_general from './components/Cities/Multan_general';
import Multan_attractions from './components/Cities/Multan_attractions';


import CitiesPage from './components/cities';




import Booking_foam from './pages/Booking_foam';
import Special_deal from './pages/Special_deal';

import Faisalabad_comp from './components/Hotels/Faisalabad_comp';
import Lahore_comp from './components/Hotels/Lahore_comp';
import Islamabad_cmp from './components/Hotels/Islamabad_cmp';
import Nathiagali_cmp from './components/Hotels/Nathiagali_cmp';
import Naran_comp from './components/Hotels/Naran_comp';
import Skardu_comp from './components/Hotels/Skardu_comp';
import Hunza_comp from './components/Hotels/Hunza_comp';
import Gilgit_comp from './components/Hotels/Gilgit_comp';
import Jhelum_comp from './components/Hotels/Jhelum_comp';
import Hydrabad_comp from './components/Hotels/Hydrabad_comp';
import Multan_comp from './components/Hotels/Multan_comp';
import Buses_info from './pages/Buses/Buses_info';
import Booking_info from './pages/Booking_info';
import Whatsapp_info from './pages/Whatsapp_info';
import Footer from './components/Footer';
import Buses_foam from './pages/Buses_foam';
// import Islamabad_info from './components/Cities/Islamabad_info';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Signup" element={<Signin />}></Route>
          <Route path="/Reset_pass" element={<Reset_pass />}></Route>
          <Route path="/After_reset" element={<After_reset />}></Route>
          <Route path="/" element={<Home />}></Route>

          <Route path="/Booking_foam" element={<Booking_foam />}></Route>
          <Route path="/Special_deal" element={<Special_deal />}></Route>


          <Route path="/Lahore_info" element={<Lahore_info />}></Route>
          <Route path="/Lahore_general" element={<Lahore_general />}></Route>
          <Route path="/Lahore_attractions" element={<Lahore_attractions />}></Route>



          <Route path="/Islamabad_info" element={<Islamabad_info />}></Route>
          <Route path="/Islamabad_general" element={<Islamabad_general />}></Route>
          <Route path="/Islamabad_attractions" element={<Islamabad_attractions />}></Route>



          <Route path="/Faisalabad_info" element={<Faisalabad_info />}></Route>
          <Route path="/Faisalabad_general" element={<Faisalabad_general />}></Route>
          <Route path="/Faisalabad_attractions" element={<Faisalabad_attractions />}></Route>



          <Route path="/Nathiagali_info" element={<Nathiagali_info />}></Route>
          <Route path="/Nathiagali_general" element={<Nathiagali_general />}></Route>
          <Route path="/Nathiagali_attractions" element={<Nathiagali_attractions />}></Route>



          <Route path="/Naran_info" element={<Naran_info />}></Route>
          <Route path="/Naran_general" element={<Naran_general />}></Route>
          <Route path="/Naran_attractions" element={<Naran_attractions />}></Route>



          <Route path="/Skardu_info" element={<Skardu_info />}></Route>
          <Route path="/Skardu_general" element={<Skardu_general />}></Route>
          <Route path="/Skardu_attractions" element={<Skardu_attractions />}></Route>



          <Route path="/Hunza_info" element={<Hunza_info />} />
          <Route path="/Hunza_general" element={<Hunza_general />} />
          <Route path="/Hunza_attractions" element={<Hunza_attractions />} />

          <Route path="/Gilgit_info" element={<Gilgit_info />} />
          <Route path="/Gilgit_general" element={<Gilgit_general />} />
          <Route path="/Gilgit_attractions" element={<Gilgit_attractions />} />

          <Route path="/Jhelum_info" element={<Jhelum_info />} />
          <Route path="/Jhelum_general" element={<Jhelum_general />} />
          <Route path="/Jhelum_attractions" element={<Jhelum_attractions />} />

          <Route path="/Hyderabad_info" element={<Hyderabad_info />} />
          <Route path="/Hyderabad_general" element={<Hyderabad_general />} />
          <Route path="/Hyderabad_attractions" element={<Hyderabad_attractions />} />

          <Route path="/Multan_info" element={<Multan_info />} />
          <Route path="/Multan_general" element={<Multan_general />} />
          <Route path="/Multan_attractions" element={<Multan_attractions />} />

          <Route path="/all_cities" element={<CitiesPage />} />



          <Route path="/Faisalabad_comp" element={<Faisalabad_comp />}></Route>
          <Route path="/Lahore_comp" element={<Lahore_comp />}></Route>
          <Route path="/Islamabad_comp" element={<Islamabad_cmp />}></Route>
          <Route path="/Nathiagali_comp" element={<Nathiagali_cmp />}></Route>
          <Route path="/Naran_comp" element={<Naran_comp />}></Route>
          <Route path="/Skardu_comp" element={<Skardu_comp />}></Route>
          <Route path="/Hunza_comp" element={<Hunza_comp />}></Route>
          <Route path="/Gilgit_comp" element={<Gilgit_comp />}></Route>
          <Route path="/Jhelum_comp" element={<Jhelum_comp />}></Route>
          <Route path="/Hydrabad_comp" element={<Hydrabad_comp />}></Route>
          <Route path="/Multan_comp" element={<Multan_comp />}></Route>

          <Route path="/Buses_info" element={<Buses_info />}></Route>
          <Route path="/Booking_info" element={<Booking_info />}></Route>
          <Route path="/Whatsapp_info" element={<Whatsapp_info />}></Route>

          <Route path="/Buses_foam" element={<Buses_foam />}></Route>

        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
