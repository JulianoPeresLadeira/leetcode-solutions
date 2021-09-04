export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {

    const isEven = (x: number): boolean => x % 2 == 0;

    const getCurrent = (index: number, arr: number[]): number => {
        return (index < 0) ? -Infinity : arr[index];
    }

    const getNext = (index: number, arr: number[]): number => {
        return ((index + 1) >= arr.length) ? Infinity : arr[index + 1];
    }

    const getTotalMedianElements = (indexA: number, indexB: number): number => {
        return indexA + indexB + 2;
    }
    const newArraySize = nums1.length + nums2.length;
    const newMedianElements = newArraySize / 2;

    let indexA = -1;
    let indexB = -1;

    while (getTotalMedianElements(indexA, indexB) < newMedianElements) {

        const newValA = getNext(indexA, nums1);
        const newValB = getNext(indexB, nums2);

        if (newValA < newValB) {
            indexA++;
        } else {
            indexB++;
        }
    }

    if (isEven(newArraySize)) {
        return (Math.max(getCurrent(indexA, nums1), getCurrent(indexB, nums2)) + Math.min(getNext(indexA, nums1), getNext(indexB, nums2))) / 2;
    } else {
        return Math.max(getCurrent(indexA, nums1), getCurrent(indexB, nums2));
    }
};
