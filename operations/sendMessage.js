export const sendMessage = async (message, client, userId) => {
    try {
        const user = await client.users.fetch(userId);
        await user.send(message)
        console.log('Message sent')
    } catch (error) {
        console.error(error);
    }
}

