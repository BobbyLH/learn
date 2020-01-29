# print('Hi, what is your name?')
# name = input()
# print(f'Hello, {name}!')

import time
from termcolor import colored

class Bot:
    wait = 1
    
    def __init__(self):
        self.q = ''
        self.a = ''
        
    def _think(self, s):
        return s
    
    def _format(self, s):
        return colored(s, 'blue')

    def run(self):
        time.sleep(Bot.wait)
        print(self._format(self.q))
        self.a = input()
        time.sleep(Bot.wait)
        print(self._format(self._think(self.a)))

class HelloBot(Bot):
    def __init__(self):
        self.q = 'Hi, what is your name'

    def _think(self, s):
        return f'Hello, {s}'

class GreetBot(Bot):
    def __init__(self):
        self.q = 'How are you today'

    def _think(self, s):
        if 'good' in s.lower() or 'fine' in s.lower():
            return "I'm feeling good too!"
        else:
            return 'Sorry to hear that'

import random

class FavoriteColorBot(Bot):
    def __init__(self):
        self.q = 'What your favorite color?'

    def _think(self, s):
        colors = ['red', 'green', 'gray', 'blue', 'yellow', 'black', 'pink', 'white', 'purple', 'indigo']
        return f'You like {s.lower()}? My favorite color is {random.choice(colors)}'

from simpleeval import simple_eval

class CalcBot(Bot):
    def __init__(self):
        self.q = 'Through recent upgrade I can do calculation now. Input some arithmetic expression to try:'

    def _think(self, s):
        result = simple_eval(s)
        return f'Done. Result = {result}'

    def run(self):
        time.sleep(Bot.wait)
        print(self._format(self.q))
        exitlist = ['x', 'q', 'quit', 'exit']
        #try:
            #exitlist.index(self.a.lower())
        #except ValueError:
            #time.sleep(Bot.wait)
            #print(self._format(self._think(self.a)))
            #self.run()
        #else:
            #pass

        while True:
            self.a = input()
            if (self.a.lower() in exitlist):
                break
            time.sleep(Bot.wait)
            print(self._format(self._think(self.a)))

class Garfield:
    def __init__(self, wait = 1):
        Bot.wait = wait
        self.bots = []

    def add(self, bot):
        self.bots.append(bot)

    def _prompt(self, s):
        print(s)
        print()

    def run(self):
        self._prompt('This is Garfield dialog system. Let\'s talk')
        for bot in self.bots:
            bot.run()


garfield = Garfield(1)
garfield.add(HelloBot())
garfield.add(CalcBot())
garfield.add(GreetBot())
garfield.add(FavoriteColorBot())

garfield.run()

