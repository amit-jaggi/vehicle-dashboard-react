import style from './AddVehicle.module.css';

const AddVehicle = ({toggle}) => {
    
    return (
        <button className={style.addBtn} onClick={toggle} >
            <i className="fa-solid fa-plus"></i>Add Vehicle
        </button>
    );
}

export default AddVehicle;