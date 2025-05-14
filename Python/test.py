import numpy as np
import random
import time

start = time.perf_counter()
arr1 = np.random.random_integers(1, 10, (1000000))
print(f'random integers time = {(time.perf_counter() - start) * 1000:.2f} milliseconds')

start = time.perf_counter()
arr2 = np.random.randint(1, 10, (1000000))
print(f'randint time = {(time.perf_counter() - start) * 1000:.2f} milliseconds')



