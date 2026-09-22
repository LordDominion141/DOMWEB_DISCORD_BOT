export const sendMessage = async (message, client, userId) => {
    try {
        const user = await client.users.fetch(userId);
        if (!user) throw new Error("User not found");
        await user.send(message)
        console.log('Message sent')
    } catch (error) {
        console.error(error);
    }
}

