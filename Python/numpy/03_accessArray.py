import numpy as np

#  one dimenasional array
# arr1 = np.array([1,2,3,4,5])
# print(f'the 2nd element is {arr1[1]}')

# two dimensional array
# arr2 = np.array([
#     [1,2,3],
#     [4,5,6]
# ])
# print(arr2[1, 1])
# print(arr2[0, 2])

# three dimensional array
arr3 = np.array([
    [
        [1,2,3],
        [4,5,6]
    ],
    [
        [7,8,9],
        [10,11,12]
    ]
])
# print(arr3[1, 0, 2])
# print(arr3[0, 1, 2])

# accessing the row
# print(arr3[1, 1])

# accessing the column
# print(arr3[1, :, 2])

# access row in reverse order
# print(arr3[1, 1, ::-1])

# advanced accessing techniques
arr4 = np.array([1,2,3,4,5,6])
# indices = np.array([1, 4])
# print(arr4[indices])

# using condition
condition = arr4 % 2 == 0
print(arr4[condition])