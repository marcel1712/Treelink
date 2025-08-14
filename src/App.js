import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Homepage from './components/homePage';
import TreeBuilderPage from './components/treebuilder';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/Tree" element={<TreeBuilderPage/>} />
            </Routes>
        </Router>
    )
}

export default App;