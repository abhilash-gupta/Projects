import numpy as np

arr1 = np.array([1,2,3,4,5,6,7,8,9,10])
print(f'Original Array = {arr1}')

# using where method find even numbers in array
condition = np.where(arr1 % 2 == 0)
print(f'Where method = {arr1[condition]}')

# output for true and false conditions
condition1 = np.where(arr1 > 5, arr1, arr1 * 10)
print(f'Where method with true and false conditions = {condition1}')

# integer indexing
index = np.array([2, 9])
print(f'Integer Indexing = {arr1[index]}')