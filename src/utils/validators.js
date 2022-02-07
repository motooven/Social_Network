export const required = value => {
    if (value) return undefined

    return "Field is required"
}

export const maxLength15 = value => {
    if (value) return undefined

    return "Field is required"
}