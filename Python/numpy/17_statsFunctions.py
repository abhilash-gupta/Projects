import numpy as np

arr1 = np.random.randint(1, 101, (3,3))
print(f'Original Array = {arr1}')
print(f'Sorted Array = {np.sort(arr1)}')
print(f'Mean of Array = {np.mean(arr1)}')
print(f'Median of Array = {np.median(arr1)}')
print(f'Standard deviation of Array = {np.std(arr1)}')
print(f'Variance of Array = {np.var(arr1)}')
print(f'Minimum element in Array = {np.min(arr1)}')
print(f'Maximum element in Array = {np.max(arr1)}')