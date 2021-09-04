export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {

    const isEven = (x: number): boolean => x % 2 == 0;

    const newArray = nums1.concat(nums2);
    newArray.sort((a, b) => a - b);

    let targetIndexA = 0;
    let targetIndexB = 0;

    if (isEven(newArray.length)) {
        targetIndexA = (newArray.length / 2);
        targetIndexB = targetIndexA - 1;
    } else {
        targetIndexA = Math.floor(newArray.length / 2);
        targetIndexB = targetIndexA;
    }

    return (newArray[targetIndexA] + newArray[targetIndexB]) / 2;
};
