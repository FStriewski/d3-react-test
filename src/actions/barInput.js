export const DRAW_MANUAL = "DRAW_MANUAL"
export const RESET = "RESET"

// Action creator (function)
export const drawChart = (input) => ({
// Action (object)
        type: DRAW_MANUAL,
        payload: input
})

export const resetChart = () => ({
        type: RESET,
        payload: "resetting..."
})