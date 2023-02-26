let users = []

export const listUsers = () => {
    return users
}

export const createUser = (user) => {
    users.push(user)
}

export const deleteUser = async (id) => {
    await User.findByIdAndDeleta(id)
}

export const updateUse = async (id, newBody) => {
    await User.findByIdAndUpdate(id, newBody)
}


