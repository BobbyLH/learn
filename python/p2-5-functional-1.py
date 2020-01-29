# n = 42
# print(id(n))

# def _is_neap(year):
#     return (year % 4 == 0 and year % 100 != 0) or year % 400 == 0

# print(id(_is_neap))
# is_neap = _is_neap
# print(id(is_neap))
# # print(type(_is_neap))

# print(_is_neap(2018))

# def add(x, y):
#     return x + y

# print(add(3, 5))

# add = lambda x, y: x + y
# print(add(3, 5))

print((lambda x, y: x + y)(3, 5))