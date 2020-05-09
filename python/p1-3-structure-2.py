a = 6
b = 30
f = 3.14
g = 0.7

# print(a + b)
# print(a - b)
# print(a * b)
# print(b / a)
# print(a * g)
# print(g / f)
# print(b ** 2)
# print(b ** a)
# print(f ** a)
# print(g ** f)
# print(b // a)
# print(b % a)
# print(b // 4)
# print(b % 4)
# print(f // 2)
# print(f % 2)
# print(g // f)
# print(g % f)

# print(a < b)
# print(a >= b)
# print(a <= f)
# print(a + b == 36)
# print(a + b != 36)
# print('aaa' < 'aab')
# print(a * g == 4.2)
# print(a * g)


# s = 4.2
# r = 0.001

# print(abs(a * g - s) < r)

# c = a + b
# print(c)

# c += 2

# print(c)

# t = True
# f = False

# print(t and f)
# print(t or f)
# print(not t)
# print(t and (not f))
# print((not t) or f)

# print(isinstance(a, int))
# print(isinstance(a, float))
# print(isinstance(g, float))
# print(isinstance(False, str))
# print(isinstance(True, bool))
# print(isinstance('a', str))
# print(isinstance(True, bool) and not isinstance('abracadabra', float))

# import math
# print(math.sqrt(16))
# print(math.sqrt(40))

from math import sqrt

def f1(a, b):
    return sqrt(a**2 + b**2)

result = f1(3, 4)
print(result)