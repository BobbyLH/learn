
# primes = [2, 3, 5, 7]
# for prime in primes:
#     print(prime)

# print(list(range(6)))
# print(list(range(2, 10)))
# print(list(range(6, 10, 1)))
# print(list(range(2, 10 ,3)))


# s = 'abracadabra'
# for c in s:
#     print(c)

# count = 0
# while count < 5:
#     print(count)
#     count += 1
    
# print('Loop ends.')

# for x in range(10):
#     if x % 2 == 0:
#         continue
#     print(x)


from random import randrange

while True:
    n = randrange(-2, 5)
    if n < 0:
        break
    elif n % 2 == 0:
        print(n, 'is even')
    else:
        print(n, 'is odd')