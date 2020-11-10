def sum_cubes(n):
    total, k = 0, 1
    while (k <= n):
        total, k = total + k * k * k, k + 1
    return total


def sum_natural(n):
    total, k = 0, 1
    while (k <= n):
        total, k = total + k, k + 1
    return total

# Spot the pattern and create an abstraction: summation function.


def summation(n, f):
    total, k = 0, 1
    while (k <= n):
        total, k = total + f(k), k + 1
    return total


def cube(x):
    return x * x * x


# Test the abstracted function
ans = summation(4, cube)
correct = sum_cubes(4)
if (ans == correct):
    print(str(ans) + ' is correct')
