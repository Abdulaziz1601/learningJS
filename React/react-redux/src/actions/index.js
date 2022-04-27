export const increment = (num) => {
    return {
        type: 'INCREMENT',
        payload: num,
    };
};

export const decrement = (num) => ({
    type: "DECREMENT",
    payload: num
});
