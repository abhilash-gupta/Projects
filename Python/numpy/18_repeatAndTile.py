import numpy as np

arr1 = np.array([1,2,3])
repeat = np.repeat(arr1, 3)
print(f'Repeat function = {repeat}')

tile = np.tile(arr1, 3)
print(f'Tile function = {tile}')