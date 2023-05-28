import { useState, useContext } from "react";
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency } = useContext(AppContext);
    const [Currency, setCurrency] = useState('');
    return (
        <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
            <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setCurrency(event.target.value)}>
                <option defaultValue={currency}>Currency (£ Pound)</option>
                <option value="$" name="Dollar">$ Dollar</option>
                <option value="£" name="Pound">£ Pound</option>
                <option value="€" name="Euro">€ Euro</option>
                <option value="₹" name="hr">₹ Rupees</option>
            </select>
        </div>
    )
}

export default Currency;