const validateIdType = (id) => {
    if (!String(id)) {
        throw { status: 422, message: 'Unprocessable Entity: ID deve ser uma string' }
    }
}

export {
    validateIdType
}