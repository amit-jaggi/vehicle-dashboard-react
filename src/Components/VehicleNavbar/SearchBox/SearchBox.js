import style from './SearchBox.module.css';
import { useState } from 'react';


const SearchBox = ({toggle, data, setLoad, activeVehicle, setActiveVehicle}) => {
    const [searchItem, setSearchItem] = useState('');

    const addActiveVehicle = (id) => {
        
        if (activeVehicle.length === 0) {
            setActiveVehicle([...activeVehicle, Number(id)])  
        } else if (activeVehicle.length !== 0) {
            if (activeVehicle.includes(Number(id))) {
                alert(`Vehicle ${id} already exists in the Dashborad.`);
            } else {
                setActiveVehicle([...activeVehicle, Number(id)])
            }
        }

        setLoad(false)
    }

    return (
        <div className={style.searchBoxContainer} onMouseLeave={toggle}>
            <input type="search" placeholder="Search..." onChange={e => setSearchItem(e.target.value)} />
            <i className="fa-solid fa-magnifying-glass"></i>
            <ul>
                {
                    data.length && data.filter(val => {
                        if(searchItem === "") {
                            return val
                        } else if (val.vehicle.toLowerCase().includes(searchItem.toLocaleLowerCase())) {
                            return val
                        }
                    }).map(
                        ({ id, vehicle }, index) => <li key={index} onClick={() => addActiveVehicle(`${id}`)}>{vehicle}</li>
                    )
                }
            </ul>
        </div>
    );
}

export default SearchBox;