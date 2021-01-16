import { Search } from './components/Search';
import { Results } from './components/Results';
import { NomineesList } from './components/NomineesList';
import { Banner } from './components/Banner';
import { AppState } from './context/AppState';
import './App.css';

const App = () => {
  return (
    <AppState>
      <div className='container'>
        <h1 className='mb-20' id='main-header'>
          The Shoppies
        </h1>
        <hr className='mb-20' />
        <Banner />
        <div id='flex-container'>
          <div id='left-side'>
            <Search />
            <Results />
          </div>
          <NomineesList />
        </div>
      </div>
    </AppState>
  );
};

export default App;
