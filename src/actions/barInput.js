export const DRAW_MANUAL = "DRAW_MANUAL"


export const drawChart = (input) => ({
        type: DRAW_MANUAL,
        payload: input
})