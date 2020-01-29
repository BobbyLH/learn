
from random import randrange
n = randrange(1, 100)
# if n % 2 == 0:
#     print(n, '是偶数')
# else:
#     print(n, '是奇数')

# def abs(x):
#     if x >= 0:
#         return x
#     return -x

# print(abs(42))
# print(abs(-142))


# def type_0(x):
#     if isinstance(x, bool):
#         return 'bool'
#     elif isinstance(x, int):
#         return 'int'
#     elif isinstance(x, float):
#         return 'float'
#     elif isinstance(x, str):
#         return 'str'
#     else:
#         return 'unknown'

# print(type_0(42))
# print(type_0('42'))
# print(type_0(False))
# print(type_0(4.12))
# print(type_0([1]))

print(bool(42))
print(bool(0))
print(bool(0.0))
print(bool(''))
print(bool('231232'))
print(bool('0'))
print(bool([1,2,3]))
print(bool([]))


# a = 42
# if n != 0:
#     a = a / n

# if n:
#     a = a / n

# s = input('请输入您的姓名')
# if s == '':
#     print('姓名不可为空，请重新输入')

s = input('请输入您的姓名')
if not s:
    print('姓名不可为空，请重新输入')