import numpy as np

arr1 = np.array([1,2,3,4,5])
# print(f'Dimension  = {arr1.ndim}')
# print(f'Shape  = {arr1.shape}')

arr2 = np.array([
    [1,2,3],
    [4,5,6]
])
# print(f'Dimension  = {arr2.ndim}')
# print(f'Shape  = {arr2.shape}')

arr4 = np.array([
    [
        [
            [1,2,3],
            [4,5,6]
        ],
        [
            [7,8,9],
            [10,11,12]
        ]
    ]
])
print(f'Dimension  = {arr4.ndim}')
print(f'Shape  = {arr4.shape}')