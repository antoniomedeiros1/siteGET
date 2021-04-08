import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/index';
import Atividades from './pages/atividades';

function App() {
	return (
			<Router>
				<ScrollToTop>
					<Route path='/' exact component={Home} />
					<Route path='/activities' exact component={Atividades} />
				</ScrollToTop>	
			</Router>
	);
}

export default App;
