import numpy as np

# scaler value
scaler = 10
print(scaler)

# vector
vector = np.array([10,20,30,40])
print(vector)

# matrix
matrix = np.array([
    [1,2,3],
    [4,5,6],
    [7,8,9]
])
print(matrix)

# tensor
tensor = np.array([
    [
        [1,2,3],
        [4,5,6]
    ],
    [
        [7,8,9],
        [10,11,12]
    ],
])
print(tensor)
print(tensor.ndim)