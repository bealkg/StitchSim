import { Mafs, Coordinates, Circle, Point } from "mafs";
import React from "react";
import { cos, sin, pi } from "mathjs";
let points = [Point]
findpoints()

function findpoints() {
    //x=#of points
    //y=deg apart
    let x = 72
    let y = 5
    for (let i = 0; i < x; ++i) {
        points.push(
            <Point 
                x={3 * cos(pi * y * i / 180)}
                y={3 * sin(pi * y * i / 180)}
            />);
            // ((3*cos(pi*y*i/180)), (3*sin(pi*y*i/180))));
    }
}

function Display() {
    return (
        <Mafs 
            pan={false} 
            zoom={false}>
            <Coordinates.Cartesian 
                xAxis={false}
                yAxis={false}/>
            <Circle 
                center={[0,0]} 
                radius={3}/>
            <Point 
               x={3 * cos(pi * 5  / 180)}
               y={3 * sin(pi * 5  / 180)}
            />
        </Mafs>
    )
}

export default Display;
