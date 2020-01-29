# def do_something():
#     pass

# do_something()

import keyword

# for kw in keyword.kwlist:
#     print(kw + '\n')
# print(keyword.kwlist)

# print(keyword.iskeyword('test'))
# print(keyword.iskeyword('try'))

# def exit_info():
#     print('Program exits. Bye!')

# exit_info()

# def leap_year(begin, end):
#     year = begin
#     while year < end:
#         if (year % 4 == 0 and year % 100 != 0) or year % 400 == 0:
#             print(year)
#         year += 1

# leap_year(2000, 2020)

# print(bool(None))

# def idiv(a, b):
#     quotient = a // b
#     remainder = a % b
#     return quotient, remainder

# q, r = idiv(50, 6)

# print(q, r)

# def increase_one(n):
#     n += 1
#     return n

# n = 1
# print(increase_one(n))
# print(n)

# def greeting(name, msg = 'Hi'):
#     print(f'{msg}, {name}')

# greeting('Neo')
# greeting('Neo', 'Good morning')

# def greeting(name, msg = 'Hi', punc = '!'):
#     print(f'{msg}, {name}{punc}')

# greeting('Neo', punc='~')

# greeting('Neo', punc='~', msg='Good nite')

# def say_hi(*names):
#     for name in names:
#         print('Hi', name)

# say_hi('Neo', 'bobby', 'doris')

def say_hi(*names, msg='Hi', punc='!'):
    for name in names:
        print(f'{msg}, {name}{punc}')

say_hi('Neo', 'bobby', 'doris', punc='~')