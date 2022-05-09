import style from './VehicleContent.module.css';
import { useParams } from 'react-router-dom';
import Status from './Status/Status';
import Statistics from './Statistics/Statistics';
import RecentTrips from './RecentTrips/RecentTrips';

const VehicleContent = () => {
    const { vehicle } = useParams();

    return (
        <div className={style.ContentContainer}>
            <p>Vehicle &nbsp;
                <span className={style.symbol}>&rsaquo;</span> &nbsp;
                <span className={style.vehicleName}>{vehicle}</span>
            </p>
            <div className={style.StatusStatistics}>
                <Status />
                <Statistics />
            </div>
            <RecentTrips vehicle={vehicle}/>
        </div>
    );
}

export default VehicleContent;