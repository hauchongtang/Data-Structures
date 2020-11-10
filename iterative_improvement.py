def improve(update, close, guess=1):
    while not (close(guess)):
        guess = update(guess)
    return guess

# Case Study: Golden Ratio
# Update


def golden_update(guess):
    return 1+1/guess

# Determine closeness and define our required tolerance


def approx(x, y, tolerance=1e-3):
    return abs(x-y) < tolerance


def golden_close(guess):
    return approx(guess*guess, guess+1)


golden_ratio = improve(golden_update, golden_close)
print(golden_ratio)  # 1.6176470588235294


# Case Study for nested functions: SQRT Function

def average(x, y):
    return (x+y)/2


def sqrt(a):
    def update(x):
        return average(x, a/x)

    def close(x):
        return approx(a, x*x)
    return improve(update, close)


test_ans = sqrt(144)
print(test_ans)

# Functions as returned values
# Case Study: Squaring successor


def compose1(f, g):
    def h(x):
        return f(g(x))
    return h


def square(x):
    return x*x


def successor(x):
    return x+1


square_successor = compose1(square, successor)
print(square_successor(12))  # 13^2 = 169

# Case Study: Newton's Method
