import style from './VehicleNavbar.module.css';
import { useState, useContext } from 'react';
import { DatabaseContext } from '../VehicleDatabase/Database';
import SearchBox from './SearchBox/SearchBox';
import AddVehicle from './AddVehicle/AddVehicle';
import {Link} from 'react-router-dom';


export const VehicleNavbar = () => {

    const [data] = useContext(DatabaseContext); // fetching all data elements
    const [load, setLoad] = useState(false);    // toggle between search & add-vehicle
    const [activeVehicle, setActiveVehicle] = useState([]); 

    const toggle = () => setLoad(!load);

    const removeActiveVehicle = (id) => {
        let temp = []
        activeVehicle.map( n => n === Number(id) ? '' : temp.push(n) )
        setActiveVehicle(temp)
    }

    return (
        <div className={style.NavbarContainer}>
            <h1>Vehicle Viewer</h1>

            {   
                // Toggle Add/Search Button
                load ? 
                <SearchBox 
                    toggle={toggle}
                    data={data}
                    setLoad={setLoad}
                    activeVehicle={activeVehicle}
                    setActiveVehicle={setActiveVehicle}
                />
                : 
                <AddVehicle toggle={toggle} />
            }

            {
                // Display active links
                activeVehicle.length ? 
                data.filter(
                    val => activeVehicle.includes(val.id)
                ).map(
                    ({id, vehicle}, index) => 
                    <div className={style.btnContainer} key={index}>
                        <i className="fa-solid fa-circle-xmark" id={style.iBTN} onClick={() => removeActiveVehicle(`${id}`)}></i>
                        <Link  to={`/${vehicle}`} className={style.vehicleBtn}> {vehicle} </Link>
                    </div>

                )
                : null
            }

        </div>
    );

}