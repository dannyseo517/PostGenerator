let headline = ""
export const addHeadLine = (text) => {
    return {
        type: 'ADD_HEADLINE',
        headline: headline,
        text
    }
}