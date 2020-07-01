import React, {useState} from 'react';
import './App.css';
import NavBar from './Components/NavBar'
import InfoPanel from './Components/InfoPanel';
import FootNav from './Components/FootNav'

function App() {
	const screenConfig = useState(0);

  return (
	<div>
		<NavBar />
		<InfoPanel currentScreen={screenConfig[0]}/>
		<FootNav screenConfig={screenConfig}/>
	</div>
  );
}

export default App;
