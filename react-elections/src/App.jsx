import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import SelectCities from './components/SelectCities';
import ShowElections from './components/ShowElections';

export default function App() {
  const [selectedCity, setSelectedCity] = useState([]);

  return (
    <div>
      <Header>React Elections</Header>

      <Main>
        <SelectCities onSelectChange={setSelectedCity} />
        <ShowElections
          id={selectedCity?.id}
          name={selectedCity?.name}
          votingPopulation={selectedCity?.votingPopulation}
          absence={selectedCity?.absence}
          presence={selectedCity?.presence}
        />
      </Main>
    </div>
  );
}
