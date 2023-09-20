import { createClient } from '$lib/prismicio';

export const prerender = true

const bearerToken = import.meta.env.VITE_BEARER_TOKEN
const prismicToken = import.meta.env.VITE_PRISMIC_TOKEN

const botChannelMsg = 'https://discord.com/api/channels/1017100388324880465/messages?limit=10'
const inspoChannelMsg = 'https://discord.com/api/channels/1149701698504368180/messages?limit=10'
const forumQuestions = 'https://discord.com/api/guilds/1017099203882782750/threads/active'

export async function load({ fetch, request }) {

    // Prismic.io link
	const client = createClient('Wum',
    {
        fetch,
        request,
        accesToken: prismicToken
    })

	const page = await client.getByUID('nieuws', 'nieuws');

    // Get Discord messages general channel
    const messagesData = await fetch(botChannelMsg, {
        method: "GET",
        headers:{
            Authorization: `Bot ${bearerToken}`
        }
    })

    // Get Discord messages inspo channel
    const inspoData = await fetch(inspoChannelMsg, {
        method: "GET",
        headers:{
            Authorization: `Bot ${bearerToken}`
        }
    })

    // Get Discord forum questions
    const forumData = await fetch(forumQuestions, {
        method: "GET",
        headers: {
            Authorization: `Bot ${bearerToken}`
        }
    })


    const msgs = await messagesData.json()
    const inspoMsgs = await inspoData.json()
    const questions = await forumData.json()

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

    // Create new object with all desired datafields from inspo messages
    const allInspo = inspoMsgs.map(msg => {
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
    const allThreads = questions.threads.map(thread => {
        const d = new Date(thread.thread_metadata.create_timestamp)

        // Get difference between current time and thread creation time
        const diff = Math.abs(new Date() - d)
        const hours = Math.floor(diff / 3600000)
        // console.log(hours)

        // If more than 24 hours ago created
        if (hours > 24) {
            const days = Math.floor(hours / 24)

            // If multiple days ago created, else if 1 day ago created
            if (days > 1) {
                return {
                    id: thread.id,
                    title: thread.name,
                    author: thread.owner_id,
                    responses: thread.message_count,
                    time: days + ' dagen geleden'
                }
            } else {
                return {
                    id: thread.id,
                    title: thread.name,
                    author: thread.owner_id,
                    responses: thread.message_count,
                    time: days + ' dag geleden'
                }
            }
         // If less than 24 hours ago created
        } else {
            const minutes = Math.floor(diff / 60000)

            // If less than 1 hour ago created
            if (hours < 1) {
                return {
                    id: thread.id,
                    title: thread.name,
                    author: thread.owner_id,
                    responses: thread.message_count,
                    time: minutes + ' minuten geleden'
                }
            // If 1 or more hours ago created
            } else {
                return {
                    id: thread.id,
                    title: thread.name,
                    author: thread.owner_id,
                    responses: thread.message_count,
                    time: hours + ' uur geleden'
                }
            }
        }
    })

	return { page, allMessages, allThreads, allInspo }
}