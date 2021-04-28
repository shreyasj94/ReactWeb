import React from 'react';
import './App.css';
import Campaign from "./components/Campaign";
import { useFetch } from './hooks/useFetch';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuIcon from '@material-ui/icons/Menu';

function App() {
      const {data: campaigns, isLoading, error} = useFetch('https://www.plugco.in/public/take_home_sample_feed')
      return (
        <div className="App">

            {
                isLoading && <p>Data is Loading...</p>
            }

            <div className="nav">
                <MenuIcon/>
            </div>
            {campaigns && campaigns["campaigns"].map((x)=> <Campaign data={x} key={x.id}/>) }

            {
                error && <p>{error}</p>
            }

        </div>
      );
}

export default App;
