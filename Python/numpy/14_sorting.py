import numpy as np

# randomly generated array
arr1 = np.random.randint(1, 100, 10)
print(f'Original Array = {arr1}')

# sort above array
sortedArray = np.sort(arr1)
print(f'Sorted Array = {sortedArray}')

# sort in descending order
print(f'Desecnding Order of Array = {sortedArray[::-1]}')

arr2 = np.random.randint(1, 100, (3, 3))
print(f'Original 2D Array = {arr2}')

sortedArray2D = np.sort(arr2)
print(f'Sorted Array 2D = {sortedArray2D}')

sortedArray2DAxis0 = np.sort(arr2, axis=0)
print(f'Sorted Array 2D Axis 0 = {sortedArray2DAxis0}')

sortedArray2DAxis1 = np.sort(arr2, axis=1)
print(f'Sorted Array 2D Axis 1 = {sortedArray2DAxis1}')