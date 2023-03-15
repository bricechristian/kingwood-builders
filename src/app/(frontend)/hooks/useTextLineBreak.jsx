export const useTextLineBreak = (str) => {
    return str.replace(/\n/g, "<br />")
}