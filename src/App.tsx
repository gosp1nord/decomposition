import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BlockNews } from './components/WidgetsNews';
import { WidgetNewsRight } from './components/WidgetsNews';
import { BlockSearch } from './components/WidgetsSearch';
import { BlockColumn } from './components/WidgetsColumns';

function App() {
  return (
    <div className="App">
      
      <div>
        <BlockNews />
        <WidgetNewsRight />
      </div>

      <div>
        <div>Яндекс</div>
        <BlockSearch />
      </div>

      <div>Реклама</div>
      <div>
        <BlockColumn />
      </div>

    </div>
  );
}

export default App;
