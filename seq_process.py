# List Comprehensions
odds = [1, 3, 5, 7, 9]
plus_one = [x+1 for x in odds]
print(plus_one)

# Select a subset of values that satisfy this condition
condition = [x for x in odds if 25 % x == 0]
print(condition)
# [ < map expression > for < name > in < sequence expression > if < filter expression > ]

"""
Aggregation: Aggregate all values in a sequence into a single value.
The built in function sum, min, max are all examples of aggregation.
"""

# Divisors: A perfect number is a positive integer that is equal
# to the sum of its divisors. The divisors of n are positive integers
# less than n that divide evenly into n.
# Listing the divisors of n can be expressed wuth a list comprehension


def divisors(n):
    return [1] + [x for x in range(2, n) if n % x == 0]


ans = divisors(4)
print(ans)

# Application: Finding the minimum perimeter of a rectangle with integer side lengths given its area


def width(area, height):
    assert area % height == 0
    return area // height


def perimeter(width, height):
    return 2 * width + 2 * height


def minimum_perimeter(area):
    heights = divisors(area)
    perimeters = [perimeter(width(area, h)) for h in heights]
    return min(perimeters)
