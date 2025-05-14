import numpy as np

arr1 = np.array([1,2,3,4,5])
# copy = arr1.copy()
# print(f'Original Array = {arr1}')
# print(f'Copy Array = {copy}')

# # making changes in original array
# arr1[0] = 50
# print(f'Original Array = {arr1}')
# print(f'Copy Array = {copy}')

# view = arr1.view()
# print(f'Original Array = {arr1}')
# print(f'View Array = {view}')
# # making changes in original array
# arr1[0] = 100
# print(f'Original Array = {arr1}')
# print(f'View Array = {view}')
copy1 = arr1.copy()
view1 = arr1.view()
print(arr1.base)
print(copy1.base)
print(view1.base)