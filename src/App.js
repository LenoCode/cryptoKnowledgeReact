import './App.css';
import initEnvironment from "./environment/Env"
import RouterController from "./utilz/router/RouterController";
import AppIndex from "./pages/index"
import {Provider} from "react-redux";



function App() {
    return (
        <AppIndex/>
    );
}

export default App;
