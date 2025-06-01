import numpy as np

# concatenation of 2 lists
# list1 = [1,2,3]
# list2 = [4,5,6]
# result = list1 + list2
# print(result)

# concatenate 2 numpy arrays
arr1 = np.array([1,2,3,4])
arr2 = np.array([5,6,7,8])
arr1 = arr1.reshape((2, -1))
arr2 = arr2.reshape((2, -1))

# vertically join 2 arrays
# join = np.concatenate((arr1, arr2), axis=0)

# horizontally join 2 arrays
# join = np.concatenate((arr1, arr2), axis=1)

# join = np.vstack((arr1, arr2))
join = np.hstack((arr1, arr2))
print(join)
