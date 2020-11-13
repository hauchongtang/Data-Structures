"""
Write quick throw away functions without naming them.
"""

# Example: Addition function


def add(x):
    return lambda y: x + y


add_one = add(1)
add_two = add_one(2)
print(add_two)

# Example: With reference to currying.py multiply function
# Use case for 3 arguments but best use case with 2 arguments as stated
# in python docs


def multiply(a):
    def mul_b(b):
        return lambda c: a * b * c
    return mul_b


print(multiply(10)(2)(3))
