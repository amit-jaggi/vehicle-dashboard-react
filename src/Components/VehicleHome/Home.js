import style from './Home.module.css';

const Home = () => {
    return (
        <div className={style.HomeContainer}>
            <div className={style.HomeContent}>
                <h1>Welcome to the Vehicle Dashboard</h1>
                <p>To view the details of any vehicle click on Add Vehicle button from the Vehicle Viewer Dashboard.</p>
            </div>
        </div>
    );
}


export default Home;