import React, {useState} from 'react'

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
const APIKEY = '1';


export default function Drink() {
    function Dod(e) {
        e.preventDefault();

    const [drink, setDrink] = useState('');

    try{
        const address = URL + APIKEY;
        const response = fetch(address);

        if(response.ok) {
            const json = response.json();
            console.log(json.drinks.idDrink);
            setDrink(json.drinks.idDrink);
        } else {
            alert('error');
            console.log(response);
        }
    }catch(error) {
        alert(error);
    }

    return (
        <div>
            <p>{drink}</p>
            <form onSubmit={Dod}>
            <button>Päivän paukku</button>
            </form>
        </div>
    )
}
}