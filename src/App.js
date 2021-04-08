import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/index';
import Atividades from './pages/atividades';
import Ensino from './pages/ensino';

function App() {
	return (
			<Router>
				<ScrollToTop>
					<Route path='/' exact component={HomePage} />
					<Route path='/activities' exact component={Atividades} />
					<Route path='/ensino' exact component={Ensino} />
				</ScrollToTop>	
			</Router>
	);
}

export default App;
