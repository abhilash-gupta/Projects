import numpy as np

arr1 = np.random.randint(1, 11, 10).reshape((2, 5))
arr2 = np.random.randint(1, 11, 10).reshape((2, 5))

print(f'Original array1 = {arr1}')
print(f'Original array2 = {arr2}')

intersect = np.intersect1d(arr1, arr2)
print(f'Common elements in both arrays = {intersect}')