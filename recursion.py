"""
A function is called recursive if the body of the function calls the function itself, 
either directly or indirectly. That is, the process of executing the body of a recursive 
function may in turn require applying that function again. Recursive functions do not use 
any special syntax in Python, but they do require some effort to understand and create.
"""

# Recursive function that sums the digits of a natural number
# Breakdown
# print(11187 % 10)  # 7
# print(11187 // 10)  # 1118


def sum_of_digits(x):
    if x < 10:
        return x
    else:
        last, not_last = x % 10, x // 10
        return sum_of_digits(not_last) + last

# Factorial


def factorial_iter(x):
    total, k = 1, 1
    while k <= x:
        total, k = total * k, x + 1
    return total


def factorial_recursive(x):
    if x == 1:
        return 1
    else:
        return x * factorial_recursive(x - 1)


# Mutually recursive functions
"""
When a recursive procedure is divided among two functions 
that call each other, the functions are said to be mutually recursive.
"""
# Function to determine odd / even number


def even(x):
    if x == 0:
        return True
    else:
        return odd(x - 1)


def odd(x):
    if x == 0:
        return False
    else:
        return even(x - 1)

# Turning it into a singly recursive function


def is_even(x):
    if x == 0:
        return True
    else:
        if (x - 1) == 0:
            return False
        else:
            return is_even((x - 1) - 1)


"""
Using print() to illustrate how recursion works
"""

""" 
In this recursive case, a base case is a single digit number which is printed.
Else, the a recursive call is placed between two calls to print.
"""


# def cascade(n):
#     if n < 10:
#         print(n)
#     else:
#         print(n)
#         cascade(n // 10)
#         print(n)

# Not a rigid requirement that a base case must be expressed as shown below.
def cascade(n):
    print(n)
    if n >= 10:
        cascade(n // 10)
        print(n)


x = cascade(12345)
print(x)

# Another example of mutual recursion
"""
Alice always removes a single pebble
Bob removes two pebbles if an even number of pebbles is on the table, and one otherwise
Given n initial pebbles and Alice starting, who wins the game? 
(Player that removes the final pebble wins)
"""
# Alice Strategy


def play_alice(n):
    if n == 0:
        print("Bob wins!")
    else:
        return play_bob(n - 1)


def play_bob(n):
    if n == 0:
        print("Alice wins")
    elif n % 2 == 0:
        return play_alice(n - 2)
    else:
        return play_alice(n - 1)


play_alice(20)
"""
Tree Recursion where a function calls itself more than once
"""
# Example: Computing fibonacci numbers where the number is the sum of the preceeding two


def fibonacci(n):
    if n == 1:
        return 0
    elif n == 2:
        return 1
    else:
        return fibonacci(n - 1) + fibonacci(n - 2)


result = fibonacci(6)
print(result)

# Counting partitions


def count_partitations(n, m):
