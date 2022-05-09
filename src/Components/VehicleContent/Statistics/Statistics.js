import style from './Statistics.module.css';
import { LineChart } from './LineChart';

const Statistics = () => {
    return (
        <div className={style.StatisContainer} >
            <div className={style.StaticsHeading}>
                <div className={style.LeftHeading}>
                    <span>Statistics</span>
                    <span className={style.bgGrey}>Booking</span>
                    <span className={style.bgGrey}>Earning</span>
                </div>
                <div className={style.RightHeading}>
                    <span className={style.bgGrey}>D</span>
                    <span className={style.bgGrey}>W</span>
                    <span className={style.bgGrey}>M</span>
                    <span className={style.bgGrey}>Y</span>
                    <span className={style.bgGrey}>Max</span>
                </div>
            </div>
            <div className={style.StaticsBody}>
                <LineChart />
            </div>
        </div>
    );
}

export default Statistics;