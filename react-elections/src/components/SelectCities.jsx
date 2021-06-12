import { useEffect, useState } from 'react';
import { apiGetAllCities } from '../services/apiServices';

const SelectCities = ({ onSelectChange = null }) => {
  const [cities, setCities] = useState([]);
  const [selectValue, setSelectValue] = useState('');

  useEffect(() => {
    async function getAllCities() {
      const allCities = await apiGetAllCities();
      onSelectChange(allCities[0]);
      setCities(allCities);
    }
    getAllCities();
  }, [onSelectChange]);

  function handleSelectChange({ currentTarget }) {
    setSelectValue(currentTarget.value);
    if (onSelectChange) {
      onSelectChange(getSelectedCity(currentTarget.value));
    }
  }

  function getSelectedCity(cityName) {
    const currentCity = [...cities];
    const selectedCity = currentCity.filter(city => city.name === cityName);
    return selectedCity[0];
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <label htmlFor="select">Escolha um município</label>
      <select
        id="select"
        className="border shadow-md my-3"
        value={selectValue}
        onChange={handleSelectChange}
      >
        {cities.map(({ id, name }) => (
          <option key={id} value={name}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectCities;
