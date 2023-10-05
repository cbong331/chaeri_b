import tkinter as tk
import random

def draw_fibonacci_spiral(count):
    x, y = canvas.winfo_width() // 2, canvas.winfo_height() // 2
    a, b = 0, 1

    for i in range(count):
        # Calculate the side length of the current square
        side_length = a + b

        # Generate a new random color for each square 
        # Converts RGB into hexadecimal
        #rand_color = "{:02X}{:02X}{:02X}".format(random.randint(0, 255), random.randint(0, 255), random.randint(0, 255))


        # Draw a square with the current side length and random color
        draw_square(x, y, side_length)

        # Update positions for the next square
        a, b = b, a + b
        if i % 4 == 0:
            x -= a
        elif i % 4 == 1:
            y -= a
        elif i % 4 == 2:
            x += a
        elif i % 4 == 3:
            y += a

def draw_square(x, y, side_length, color):
    half_side = side_length // 2
    x1, y1 = x - half_side, y - half_side
    x2, y2 = x + half_side, y + half_side
    canvas.create_rectangle(x1, y1, x2, y2, outline=c"green")

# Create a tkinter window
window = tk.Tk()
window.title("Fibonacci Spiral🌀")

# Create a Canvas widget to draw on
canvas = tk.Canvas(window, width=600, height=600, bg="white")
canvas.pack()

# Create a button to draw the Fibonacci spiral
draw_button = tk.Button(window, text="Draw Fibonacci Spiral", command=lambda: draw_fibonacci_spiral(10))
draw_button.pack()

# Start the tkinter main loop
window.mainloop()
