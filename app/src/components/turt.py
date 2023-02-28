import turtle
import math

points = []
connections = []

t = turtle.Turtle()

# turtle settings
t.shape("circle")
t.shapesize(0.2, 0.2, 0.2)
# t.speed(0)
t._tracer(False)

# draw frame
t.penup()
t.goto(-200,-200)
t.pendown()
for f in range(4):
    t.fd(400)
    t.lt(90)
# t.penup()

# function to draw points along circle perimeter
# takes # of points as input
def drawCircle(x):
    # draw circle
    t.penup()
    t.goto(0, -180)
    t.pendown()
    t.circle(180)
    t.penup()
    
    # add points
    t.goto(int(math.ceil(720/x)),-180)
    
    t.hideturtle()
    for i in range(x):
        t.goto(0,0)
        t.fd(180)
        t.dot()
        points.append(t.pos())
        if (t.heading() >= 0 and t.heading() <= 45) or (t.heading() >= 135 and t.heading() <= 225):
            t.fd(10)
        elif (t.heading() > 45 and t.heading() < 135):
            t.fd(5)
        elif (t.heading() >= 225 and t.heading() <= 360):
            t.fd(15)
        t.color("green")
        t.write(i, False, align="center", font=("Arial", 10, "normal"))
        t.color("black")
        t.left(360/x)

def connectPoints(x, y):
    t.goto(0,0)
    t._tracer(True)
    t.speed(20)
    i = 0
    while i < x:
        t.goto(points[i])
        t.pendown()
        j = (i*y) % x
        t.goto(points[j])
        connections.append((i,j))
        t.penup()
        i+=1

def drawSquare(x):
    t.penup()
    t.goto(-180,-180)
    t.pendown()
    for f in range(4):
        for i in range(math.floor(int(x/4))):
            t.dot()
            points.append(t.pos())
            t.color("blue")
            t.write(i, False, align="center", font=("Arial", 10, "normal"))
            t.color("black")
            t.fd(360/(math.floor(int(x/4))))
        t.lt(90)

drawCircle(72)
# drawSquare(72)
connectPoints(72, 2)

turtle.mainloop()