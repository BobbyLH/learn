from math import sqrt

def is_prime(n):
    '''Return a boolean value based upon whether the argument n is a prime number'''
    if n < 2:
        return False

    if n in (2, 3):
        return True

    for i in range(2, int(sqrt(n)) + 1):
        if n % i == 0:
            return False

    return True

# print(is_prime(23))
# help(is_prime)

# print(is_prime.__doc__)

class Vehicle(object):
    '''
    The vehicle object contains lots of vehicle
    :param arg: The arg is used for...
    :type arg: str
    :param `*args`: The variable arguments are used for ...
    :param `**kwargs`: The keyword arguments are used for ...
    :ivar arg: This is where we store arg
    :vartype arg: str
    '''

    def __init__(self, arg, *args, **kwargs):
        self.arg = arg

    def cars(self, distance, destination):
        '''We can't travel a certain distance in vehicles without fuels, so here's the fuels

        :param distance: The amount of distance traveled
        :type amount: int
        :param bool destinationReached: Should the fuels be refilled to cover required distance?
        :raises: :class:`RuntimeError`: Out of fuel

        :returns: A Car mileage
        :rtype: Cars
        '''
        pass

# help(Vehicle)

print(Vehicle.__doc__)