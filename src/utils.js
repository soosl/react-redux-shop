export const getNumBetween = (min, max, num) => {
    return Math.max(min, Math.min(max, getValidInt(num)));
};

export const getValidInt = (num, defaultValue = 0) => {
    const intNum = parseInt(num);
    const validNumber = !isNaN(intNum) ? intNum : defaultValue;

    return validNumber;
};
