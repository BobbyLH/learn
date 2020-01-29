# def a_monk_telling_story(n):
#     print('从前有座山，山里有座庙，庙里有个老和尚，正在给小和尚讲故事呢！故事是这样的：')
#     if n <= 0:
#         return print('结束')
#     return a_monk_telling_story(n-1)

# a_monk_telling_story(5)

# result = 1
# for i in range(5):
#     result = result * (i+1)

# print(result)

def f(n):
    if n == 1:
        return 1
    else:
        return n * f(n-1)

print(f(5))