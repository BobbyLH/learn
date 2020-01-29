# while True:
#     try:
#         x = int(input('Please enter a number: '))
#         break
#     except ValueError:
#         print('Not a valid number. Try again...')

# print('Your number is:', x)

x = 30
def this_fails():
    x = 1/0

try:
    this_fails()
except ZeroDivisionError as err:
    print('Handling run-time error:', err)