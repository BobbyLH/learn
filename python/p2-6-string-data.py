n = 44032
f = 3.141592

s1 = f'{n}'
s2 = f'{f}'

# print(type(s1))
# print(type(s2))

# print(int(s1))
# print(float(s1))

# print(float(s2))
# print(int(float(s2)))

# s3 = '440abc312'
# s4 = '3.14dwawd2232'

# print(float(s4))

def is_float(s):
    try:
        float(s)
        return True
    except ValueError:
        return False

def is_int(s):
    try:
        int(s)
        return True
    except ValueError:
        return False

def parse_str(s):
    if is_int(s):
        print(f'值是整数，为{int(s)}')
    elif is_float(s):
        print(f'值是浮点数，为{float(s)}')
    else:
        print(f'值{s}不是数值类型')

# val = input()
# parse_str(val)

# from fastnumbers import fast_float

# print(fast_float('56.08'))
# print(fast_float('test'))
# print(fast_float('test123'))
# print(fast_float('test', default=2))
# print(fast_float('abbc', 0))
# print(fast_float('54'))
# print(fast_float('\u2164'))
# print(fast_float('⑦'))
# print(fast_float('\u2466'))

from datetime import datetime

t = datetime.now()

# print(t)
# print(t.year)
# print(t.month)
# print(t.day)
# print(t.hour)
# print(t.minute)
# print(t.second)
# print(t.microsecond)
# print(t.tzinfo)

# t1 = datetime.now().astimezone()
# print(t1)
# print(t1.tzinfo)

# print(type(t))
# print(type(t1))

# print('年：', t.strftime('%Y'))
# print('月：', t.strftime('%m'))
# print('日：', t.strftime('%d'))
# print('年-月-日：', t.strftime('%Y-%m-%d'))
# print('压缩版 年-月-日：', t.strftime('%Y-%-m-%-d'))
# print('24小时制时间：', t.strftime('%H:%M:%S'))
# print('12小时制时间：', t.strftime('%I:%M:%S %p'))
# print('日期加时间：', t.strftime('%Y-%m-%d %H:%M:%S'))
# print('日期星期加时间：', t.strftime('%Y-%m-%d %a %H:%M:%S'))

# s1 = '2020-01-29 Wed 12:46:40'
# t1 = datetime.strptime(s1, '%Y-%m-%d %a %H:%M:%S')
# print(t1, type(t1))

# s2 = "2019年07月17日 12时9分"
# t2 = datetime.strptime(s2, "%Y年%m月%d日 %H时%M分")
# print(type(t2), t2)

# t = datetime.now().astimezone()

# iso_str = t.isoformat()

# print(iso_str)

# t_from_iso_str = datetime.fromisoformat(iso_str)

# print(type(t_from_iso_str), t_from_iso_str)

import re

def is_valid_cellphone(s):
    pattern = re.compile(r'^[1]([3-9])[0-9]{9}$')
    if pattern.match(s):
        return True

    return False


# print(is_valid_cellphone('13912345678'))
# print(is_valid_cellphone('139123456'))

def is_valid_email(s):
    pattern = re.compile(r'(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)')
    if pattern.match(s):
        return True

    return False

# print(is_valid_email('bobby.lhan@gmail.com'))
# print(is_valid_email('test+12-.3213@99-2.2.c'))

while True:
    email = input('Please enter your email!')
    if is_valid_email(email):
        break
    else:
        print('It\' not a valid email address, please try again!')

print(f'Your email address is {email}')

bobby = {
  'career': '前端工程师',
  'location': '上海',
  'favor': ['跑步', '游泳', '瑜伽', '读书', '写代码', '吉他'],
  'label': '长期主义者'
}