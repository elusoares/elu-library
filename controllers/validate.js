const validateIdType = (id) => {
    if (isNaN(Number(id))) {
        throw { status: 422, message: 'Unprocessable Entity: ID deve ser um número' }
    }
}

export {
    validateIdType
}