import React, { Component } from "react";
import { Card, CardMedia } from "@mui/material";
import Circle10 from './images/circle10.jpg'
import Circle102 from './images/circle102.mov'
import Circle102add from './images/circle102add.mov'

class About extends Component {
    
    render() {
        return (
            <div class="about">
                <h2>What is Curve Stitching?</h2>
                <p>
                    Curve Stitching is a type of geometric modeling that uses straight lines to create complex diagrams. 
                    It is commonly used for needlepoint and cross stitching patterns. </p>
                    
                <p>
                    To understand how curve stitching works, first imagine you have a circle with 10 points. The points
                    around the circle are numbered 0 - 9. </p>

                    <Card raised={false} sx={{ maxWidth: 345 }} class="image">
                    <CardMedia
                        sx={{ height: 345, width: 345, marginLeft: "auto", marginRight: "auto" }} component="image"
                        image={Circle10} autoPlay loop
                        title="Circle with 10 points"
                    />      
                    </Card> 

                <p>
                    First, you need to understand what the mod function is. The mod (modulous) function divides 
                    two numbers and returns the remainder. For example, 15 % 10 = 5 because 15 / 10 = 1 with a remainder of 5,
                    21 % 10 = 1, and 57 % 10 = 7. Now lets imagine you input 2 on the multiply function. 
                    The program will start at point 0, multiply 0 by 2, and mod the function by 10. 
                    The result is 0, so no line will be drawn. Then it will move to point 1. (1 * 2) % 10 = 2, 
                    so it will connect point 1 to point 2. It will connect point 2 to point 4, point 3 to point 6, 
                    and so on until all of the points have been plugged into the function. 
                    This function option doesn't work for spokes.</p>

                    <Card sx={{ maxWidth: 345, marginLeft: "auto", marginRight: "auto" }} >
                    <CardMedia
                        sx={{ height: 345, width: 345 }} component="video"
                        image={Circle102} autoPlay loop 
                        title="Circle with 10 points and multiply function of 2"
                    />      
                    </Card> 
                
                <p>
                    The add function works very similarly. The program will start at point 0, add 2, and mod the function by 10.
                    The result is 2, so it connects point 0 to point 2. (1 + 2) % 10 = 3, so point 1 is connected to point 3.
                    Point 2 connects to point 4, point 3 to point 5, and so on. 
                </p>

                    <Card sx={{ maxWidth: 345, marginLeft: "auto", marginRight: "auto" }} >
                    <CardMedia
                        sx={{ height: 345, width: 345 }} component="video"
                        image={Circle102add} autoPlay loop
                        title="Circle with 10 points and add function of 2"
                    />      
                    </Card> 
                
                <br /><br />

                <h2>Tutorial</h2>
                <h3>Step One: Shape</h3>
                <p>Select the shape you want. Your options are Circle, Edges, and Spokes. Edges and Spokes both take input from 3 to 50.
                    Edges creates a shape with the amount of edges you select. For example, 3 edges is a triangle, 4 is a square, and so on.
                    Spokes draws the amount of lines input radiating from the center, similar to the spokes on a bike wheel. The multiply function
                    doesn't work for spokes. If spokes are chosen, both function buttons will default to the add function. 
                </p>
                <h3>Step Two: Points</h3>
                <p>Select the amount of points you want. If you have chosen Edges or Spokes as your shape, the amount of points
                    you input will be the number for each edge. You can have at most 200 points per shape. Remember, the amount you
                    input is the points per edge, so if you have a 4 sided shape, the most points you can input is 50. 
                </p>
                <h3>Step Three: Function</h3>
                <p>Select the function you want to use. The difference between the add and the multiply functions are shown above.
                    The biggest function you can input is 200, the same as the max amount of points per shape. The patterns will 
                    repeat themselves once you get a function bigger than the amount of points, so a max of 200 guarantees all 
                    possible patterns will be available, even with 200 points.
                </p>

                <br /><br />

                <h2>How to Recreate</h2>
                <h3>
                    Find the perfect pattern? Follow these steps to recreate it yourself.
                </h3>
                <h3>Step One: Outline the shape</h3>
                <p>
                    First, you must draw the shape's perimeter. You can remove the outline later, if desired.
                </p>
                <h3>Step Two: Draw the points</h3>
                <p>
                    Now, you have to draw the points around the perimeter. The simulator starts numbering the points
                    0 - n at the rightmost point from the center, then continues around the shape counter-clockwise. 
                    It is very important that the points are evenly spaced around the shape. If the shape is a circle,
                    place all the points m degrees apart, where m = 360 / the total amount of points. If you have 10 points
                    on a circle, all the points should be 36 degrees apart (360 / 10 = 36). For a shape other than a circle,
                    space the points evenly based on the length of each edge. If the shape is spokes, start numbering
                    on the right most branch. Number with the smallest number at the center of the shape for each branch.
                </p>
                <h3>Step Three: Connect the points</h3>
                <p>
                    Now that the shape is set up, it is time to connect the points. Start at point 0, and apply whatever
                    function you have chosen. The functions are explained above in the 'What is Curve Stitching?' section.
                    Continue around the shape until you have connected each point. 
                </p>
            </div>
        );
    }
}

export default About;