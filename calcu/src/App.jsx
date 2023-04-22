import React from 'react';
import './App.css';
import Navbar from './componets/Navbar';
import EventForm from './componets/EventForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CarbonFootprintCalculator from './componets/CarbonFootprintCalculator';

export default function App() { 
  return ( 
    <div>
        <Navbar   />
      <Routes>
      <Route path="/" element={<EventForm/>}>
     
      <Route path="/" element={<EventForm />} />
          <Route path="/CarbonFootprintCalculator" element={<CarbonFootprintCalculator />} />
         
      </Route>
      </Routes>
  
    </div>
  );
}
// import React from 'react';
// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './componets/Navbar';
// import EventForm from './componets/EventForm';
// import CarbonFootprintCalculator from './componets/CarbonFootprintCalculator';

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<EventForm />} />
//           <Route path="/CarbonFootprintCalculator" element={<CarbonFootprintCalculator />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

