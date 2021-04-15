import './App.css';
import React from "react";
import {
	Switch,
	HashRouter as Router,
	Route,
} from "react-router-dom";
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/index';
import Atividades from './pages/atividades';
import Ensino from './pages/ensino';
import Extensao from './pages/extensao';
import Pesquisa from './pages/pesquisa';
import Seminarios from './pages/seminarios';
import About from './pages/about';
import Projects from './pages/projects';
import Curso from './pages/curso';
import TrabalhosCurso from './pages/trabalhoscurso';
import Tutoriais from './pages/tutoriais';

function App() {
	return (
		<Router>
			<Switch>
				<ScrollToTop>
					<Route path='/' exact component={HomePage} />
					<Route path='/activities' exact component={Atividades} />
					<Route path='/activities/ensino' exact component={Ensino} />
					<Route path='/activities/extensao' exact component={Extensao} />
					<Route path='/activities/pesquisa' exact component={Pesquisa} />
					<Route path='/activities/seminarios' exact component={Seminarios} />
					<Route path='/about' exact component={About} />
					<Route path='/about/projects' exact component={Projects} />
					<Route path='/curso' exact component={Curso} />
					<Route path='/curso/trabalhos' exact component={TrabalhosCurso} />
					<Route path='/tutorial' exact component={Tutoriais} />
				</ScrollToTop>
			</Switch>
		</Router>
	);
}

export default App;
