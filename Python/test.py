import numpy as np

arr1 = np.arange(1, 11)
arr2 = np.arange(10, 15)

arr1 = arr1.reshape(2, -1)
arr2 = arr2.reshape(5, -1)

print(f'arr1 = {arr1}')
print(f'arr2 = {arr2}')

print(f'{np.setdiff1d(arr1, arr2)}')