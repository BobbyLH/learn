# l = [1, 2, 'hello', 'world']
# l[3] = 50
# l.append('test')
# print(l)

# tup = ('jason', 32, 555)
# # tup[2] = '123'
# print(tup, type(tup))

# l = [1,2,3]
# t = (1,2,3)

# print(l.__sizeof__())
# print(t.__sizeof__())

l = []
print(l, l.__sizeof__())
l.append(1)
print(l, l.__sizeof__())
l.append(2)
print(l, l.__sizeof__())
l.append(3)
print(l, l.__sizeof__())
l.append(4)
print(l, l.__sizeof__())
l.append(5)
print(l, l.__sizeof__())