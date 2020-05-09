# class Dog:

#     kind = ''

#     def __init__(self, name):
#         self.name = name
        
#     def bark(self):
#         return 'woof-woof'

# a = Dog('Fido')
# b = Dog('Buddy')

# Dog.kind = 'canidae'
# print(a.kind)
# print(b.kind)
# print(a.name)
# print(b.name)

# print(a.bark())

# class Cat:

#     kind = 'felidae'

#     def __init__(self, name):
#         self.name = name
        
#     def mew(self):
#         return 'meow-meow'

# c = Cat('Garfield')

# print(Cat.kind)
# print(c.name)
# print(c.mew())

class Animal:

    kind = ''

    def __init__(self, name):
        self.name = name
        
    def voice(self):
        return '...'

class Dog(Animal):
    
    kind = 'canidae'
    
    def voice(self):
        return 'woof-woof'
    
    bark = voice


class Cat(Animal):
    
    kind = 'felidae'
    
    def voice(self):
        return 'meow-meow'
    
    mew = voice

a = Animal('キュゥべえ')
c = Cat('Garfield')
d = Dog('Snoopy')

for animal in [a, c, d]:
    print(animal.name, ':', animal.voice())