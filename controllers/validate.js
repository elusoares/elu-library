const validateIdType = (id) => {
    if (isNaN(Number(id))) {
        throw { status: 422, message: 'Unprocessable Entity: ID must be a number' }
    }
}

module.exports = {
    validateIdType
}