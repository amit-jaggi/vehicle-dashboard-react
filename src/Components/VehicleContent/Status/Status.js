import style from './Status.module.css';

const Status = () => {
    return (
        <div className={style.VehicleStatus}>
            <p>Vehicle Status</p>
            <div className={style.Specs}>
                <div className={style.leftSpecs}>
                    <table >
                        <tbody>
                            <tr>
                                <td>Elevation</td>
                                <td className={style.specLight}>200m</td>
                            </tr>
                            <tr>
                                <td>Temperature</td>
                                <td className={style.specLight}>45&deg;C</td>
                            </tr>
                            <tr>
                                <td>Locked</td>
                                <td className={style.specLight}>
                                    <i className="fa-solid fa-circle-check"></i>
                                </td>
                            </tr>
                            <tr>
                                <td>Battery</td>
                                <td className={style.specLight}>75.6%</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <div className={style.rightSpecs}>
                    <table >
                        <tbody>
                            <tr>
                                <td>
                                    <i className="fa-solid fa-circle-check"></i>
                                </td>
                                <td className={style.specBold}>Throttle</td>
                            </tr>
                            <tr>
                                <td>
                                    <i className="fa-solid fa-circle-check"></i>
                                </td>
                                <td className={style.specBold}>Controller</td>
                            </tr>
                            <tr>
                                <td>
                                    <i className="fa-solid fa-circle-check"></i>
                                </td>
                                <td className={style.specBold}>Motor</td>
                            </tr>
                            <tr>
                                <td>
                                    <i className="fa-solid fa-circle-check"></i>
                                </td>
                                <td className={style.specBold}>Overload</td>
                            </tr>
                            <tr>
                                <td>
                                    <i className="fa-solid fa-circle-check"></i>
                                </td>
                                <td className={style.specBold}>Overcurrent</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Status;