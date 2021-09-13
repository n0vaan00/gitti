import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [weight,setWeight] = useState(0);
  const [bottles,setBottles] = useState(0);
  const [time,setTime] = useState(0);
  const [alco,setAlco] = useState(0);
  const [gender,setGender] = useState(0);

    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burn = weight / 10;
    let left = grams - (burn * time);
  
  function handleSubmit(e) {
    e.preventDefault();  

    if(gender === "Female") {
      let result = left / (weight * 0.6);
      setAlco(Math.max(0, result));
    }
    if(gender === "Male")
    {
      let result = left / (weight * 0.7);
      setAlco(Math.max(0, result));
    }
  }
  return (
    <div>
      <h1>Calculating alcohol blood level</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Weight </label>
        <input type="number" placeholder="Weight(kg)" onChange={e => setWeight(e.target.value)} value={weight}></input>
      </div>
      <div>
        <label>Bottles </label>
        <select id="bottles" onChange={e => setBottles(e.target.value)} value={bottles}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>

        </select>
      </div>
      <div>
        <label>Time </label>
        <select id="time" onChange={e => setTime(e.target.value)} value={time}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
      </div>
      <div>
        <label>Gender</label>
        <input type="radio" name="gender" onChange={e => setGender(e.target.value)} value="Female"></input>Female
        <input type="radio" name="gender" onChange={e => setGender(e.target.value)} value="Male"></input>Male
      </div>
      <div>
        <output>{alco.toFixed(2)}</output>
      </div>
        <button>Calculate</button>
    </form>
    </div>
  );
}

export default App;
