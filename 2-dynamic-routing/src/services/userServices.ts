
async function getAllUsers() : Promise<User[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!response.ok) {
        throw new Error('Failed to fetch users');
    }

    return response.json() as Promise<User[]>;
}

async function getUserById(id: number) : Promise<User> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

    if (!response.ok) {
        throw new Error('Failed to fetch user');
    }

    return response.json() as Promise<User>;
}

export { getAllUsers, getUserById };