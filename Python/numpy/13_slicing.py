import numpy as np

arr1 = np.arange(10, 100, 10)
print(f'Original Array = {arr1}')

slice1 = arr1[2:6]
print(f'Slice 1 = {slice1}')

slice2 = arr1[4:]
print(f'Slice 2 = {slice2}')

slice3 = arr1[:6]
print(f'Slice 3 = {slice3}')

slice4 = arr1[2:8:2]
print(f'Slice 4 = {slice4}')

reverse = arr1[::-1]
print(f'Reversed = {reverse}')