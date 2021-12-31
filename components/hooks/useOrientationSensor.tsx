import { useState, useEffect } from 'react';

interface AngularVelocity {
    x: number;
    y: number;
    z: number;
}
export default function useOrientationSensor(): AngularVelocity {
    const [angularVelocity, setAngularVelocity] = useState<AngularVelocity>({ x: 0, y: 0, z: 0 });
    useEffect(() => {

        try {
            const sensor = new window.AbsoluteOrientationSensor({ frequency: 30, referenceFrame: 'device' });
            function readHandler() {
                const [x, y, z, w] = sensor.quaternion;
                setAngularVelocity({
                    x: Math.atan2(2.0 * x * w + 2.0 * y * z, 1 - 2 * (z * z + w * w)) * 57.2958 / 360 * 25,
                    y: Math.asin(2.0 * (x * z - w * y)) * 57.2958 / 360 * 180,
                    z: Math.atan2(2.0 * x * y + 2.0 * z * w, 1 - 2 * (y * y + z * z)) * 57.2958 / 360 * 100,
                })
            }
            sensor.onreading = readHandler;
            sensor.start();
        } catch (e) {
            console.log(e);
        }
    }, [])
    return angularVelocity;
}