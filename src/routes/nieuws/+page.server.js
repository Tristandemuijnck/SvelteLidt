import { createClient } from '$lib/prismicio';

export const prerender = true;

const bearerToken = import.meta.env.VITE_BEARER_TOKEN

const botChannelMsg = 'https://discord.com/api/channels/1017100388324880465/messages?limit=10'
// const forumQuestions = 'https://discord.com/api/guilds/830885998962540544/threads/active'

export async function load({ fetch, request }) {

    // Prismic.io link
	const client = createClient({ fetch, request });
	const page = await client.getByUID('nieuws', 'nieuws');

    // Get Discord messages
    const messagesData = await fetch(botChannelMsg, {
        method: "GET",
        headers:{
            Authorization: `Bot ${bearerToken}`
        }
    })

    // Get Discord forum questions
    // const forumData = await fetch(forumQuestions, {
    //     method: "GET",
    //     headers: {
    //         Authorization: `Bot ${bearerToken}`
    //     }
    // })

    const msgs = await messagesData.json()
    // console.log(msgs)
    // const questions = await forumData.json()

    // Create new object with all desired datafields from messages
    const allMessages = msgs.map(msg => {
        const d = new Date(msg.timestamp)
        let date =  d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear() + ' ' + d.getHours() + ':' + d.getMinutes()

        return {
            id: msg.id,
            content: msg.content,
            author: msg.author.username,
            name: msg.author.global_name,
            time: date
        }
    })

    // Create new object with all desired datafields from forum questions
    // const allThreads = questions.threads.map(question => {
    //     return {
    //         id: question.id,
    //         title: question.name,
    //         author: question.owner_id,
    //         responses: question.message_count,
    //         time: question.thread_metadata.create_timestamp
    //     }
    // })

	return { page, allMessages }

    // allThreads
}