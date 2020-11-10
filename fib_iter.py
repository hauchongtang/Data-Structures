def fib(n):
    prev, curr = 0, 1
    k = 2
    while (k < n):
        prev, curr = curr, prev + curr
        k += 1

    return curr


fib(8)
assert fib(8) == 13, 'The 8th fibonacci number should be 13'
