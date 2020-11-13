"""
given a function f(x, y), we can define a function g such that g(x)(y) is equivalent to f(x, y). 
Here, g is a higher-order function that takes in a single argument x 
and returns another function that takes in a single argument y.

Use currying when you do not want to keep giving the same argument many times

"""

# Comparison


def add(a, b):
    return a + b


def curry_add(a):
    def plus(b):
        return a + b
    return plus


x = add(2, 3)
y = curry_add(2)(3)
print(x, y)

# Example 2


def multiply(a, b, c):
    return a*b*c


def curry_mul(a):
    def mul_b(b):
        def mul_c(c):
            return a*b*c
        return mul_c
    return mul_b


ans = curry_mul(1)(2)(3)
print(ans)  # 6

# Breakdown
a = curry_mul(1)
b = a(2)
c = b(3)

print(c)  # 6


# Example: volume of cylinder
def volume(l):
    def mul_b(b):
        def mul_h(h):
            return l * b * h
        return mul_h
    return mul_b


volume_cylinder = volume(10)(20)(1)
print(volume_cylinder)
