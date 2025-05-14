import numpy as np
import time

start = time.perf_counter()
list = [i * 2 for i in range(1000000)]
print(list[9])
print(f'List Operation time = {(time.perf_counter() - start) * 1000:.2f} milliseconds')

start = time.perf_counter()
arr1 = np.arange(1000000) * 2
print(arr1[9])
print(f'NumPy Array Operation time = {(time.perf_counter() - start) * 1000:.2f} milliseconds')