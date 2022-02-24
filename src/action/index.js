export const plusNumber = (num) =>
{
    return{
        type: "INCREMENT",
        times: num
    }
}

export const minusNumber = () =>
{
    return{
        type: "DECREMENT"
    }
}
