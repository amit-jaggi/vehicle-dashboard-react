import { createContext, useState } from 'react';

export const DatabaseContext = createContext();

const DatabaseProvider = ({ children }) => {
    const [data, setData] = useState([
        {
            id : 1,
            vehicle: `Vehicle 1`,
            vehicleTrips: [
                {
                    startTime: `May 26, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `May 27, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `May 28, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `May 29, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `May 30, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `May 31, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `June 1, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `June 2, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `June 3, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `June 4, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
            ]

        },
        {
            id: 2,
            vehicle: `Vehicle 2`,
            vehicleTrips: [
                {
                    startTime: `May 26, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `May 27, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `May 28, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `May 29, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `May 30, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `May 31, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `June 1, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `June 2, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `June 3, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `June 4, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
            ]
        },
        {
            id: 3,
            vehicle: `Vehicle 3`,
            vehicleTrips: [
                {
                    startTime: `May 26, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `May 27, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `May 28, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `May 29, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `May 30, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `May 31, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `June 1, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `June 2, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `June 3, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `June 4, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
            ]
        },
        {
            id: 4,
            vehicle: `Vehicle 4`,
            vehicleTrips: [
                {
                    startTime: `May 26, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `May 27, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `May 28, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `May 29, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `May 30, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `May 31, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `June 1, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `June 2, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `June 3, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `June 4, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
            ]
        },
        {
            id: 5,
            vehicle: `Vehicle 5`,
            vehicleTrips: [
                {
                    startTime: `May 26, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `May 27, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `May 28, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `May 29, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `May 30, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `May 31, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `June 1, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `June 2, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `June 3, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `June 4, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
            ]
        },
        {
            id: 6,
            vehicle: `Vehicle 6`,
            vehicleTrips: [
                {
                    startTime: `May 26, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `May 27, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `May 28, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `May 29, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `May 30, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `May 31, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `June 1, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `June 2, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `June 3, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `June 4, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
            ]
        },
        {
            id: 7,
            vehicle: `Vehicle 7`,
            vehicleTrips: [
                {
                    startTime: `May 26, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `May 27, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `May 28, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `May 29, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `May 30, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `May 31, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `June 1, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `June 2, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `June 3, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `June 4, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
            ]
        },
        {
            id: 8,
            vehicle: `Vehicle 8`,
            vehicleTrips: [
                {
                    startTime: `May 26, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `May 27, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `May 28, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `May 29, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `May 30, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `May 31, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `June 1, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `June 2, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `June 3, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `June 4, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
            ]
        },
        {
            id: 9,
            vehicle: `Vehicle 9`,
            vehicleTrips: [
                {
                    startTime: `May 26, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `May 27, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `May 28, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `May 29, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `May 30, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `May 31, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `June 1, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `June 2, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `June 3, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `June 4, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
            ]
        },
        {
            id: 10,
            vehicle: `Vehicle 10`,
            vehicleTrips: [
                {
                    startTime: `May 26, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `May 27, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `May 28, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `May 29, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `May 30, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `May 31, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `June 1, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `June 2, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `June 3, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
                {
                    startTime: `June 4, 5:18 pm `,
                    duration: `24 min`,
                    maxSpeed: `91 kmph`,
                    averageSpeed: `54 kmph`,
                    startingVoltage: `70.04V`,
                    endingVoltage: `69.42V`,
                    distance: `5.45 km`,
                    driverScore: `96.5`
                },
            ]
        }
    ]);

    return (
        <DatabaseContext.Provider value={[data, setData]} >
            {children}
        </DatabaseContext.Provider>
    );
}

export default DatabaseProvider;