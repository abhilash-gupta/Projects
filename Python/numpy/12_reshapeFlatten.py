import numpy as np

arr = np.array([10,20,30,40,50,60,70,80,90,100])
print(f'Original Array = {arr}')

# reshape of array
reshapedArray = np.reshape(arr, (5,2))
print(f'Reshaped Array = {reshapedArray}')

# flattenning of the array
flattenedArray = reshapedArray.flatten()
print(f'Flattened Array = {flattenedArray}')

# ravel of array
ravel = reshapedArray.ravel()
print(f'Ravel Array = {ravel}')

# transpose of matrix
transpose = reshapedArray.T
print(f'Transpose Array = {transpose}')