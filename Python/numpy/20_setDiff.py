import numpy as np

arr1 = np.random.randint(1, 11, 6).reshape((2,3))
arr2 = np.random.randint(1, 11, 6).reshape((2,3))
print(f'Original Array 1 = {arr1}')
print(f'Original Array 2 = {arr2}')

setDiff = np.setdiff1d(arr1, arr2)
print(f'set difference = {setDiff}')