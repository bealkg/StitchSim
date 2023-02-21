import turtle
import math

t = turtle.Turtle()

# turtle settings
t.shape("circle")
t.shapesize(0.2, 0.2, 0.2)
t.speed(50)

# draw frame
# t.penup()
# t.goto(200,200)
# t.pendown()
# t.goto(200,-200)
# t.goto(-200,-200)
# t.goto(-200,200)
# t.goto(200,200)
# t.penup()

# function to draw points along circle perimeter
# takes # of points as input
def drawCircle(x):
    # draw circle
    t.penup()
    t.goto(0, -200)
    t.pendown()
    t.color("blue")
    t.circle(200)
    t.penup()
    
    # add points
    t.color("red")
    t.goto(int(math.ceil(720/x)),-200)
    for i in range(x):
        t.stamp()
        t.lt(360/x)
        t.fd((400*math.pi)/x)

# drawCircle(72)

def drawSquare(x):
    t.goto(-200,-200)
    t.pendown()
    for f in range(4):
        if x % 4 != 0:
            y = x + 1
        for i in range(math.ceil(int(x/4))):
            t.stamp()
            t.fd(1600/x)
        t.lt(90)
        
# t.color("red")        
drawSquare(50)
# t.color("blue")
# drawSquare(25)
# t.color("green")
# drawSquare(20)
# t.color("yellow")
# drawSquare(12)
# t.color("black")
# drawSquare(10)
turtle.mainloop()