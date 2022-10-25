import { Command, InteractionDataType } from "cloudflare-discord-bot";
import { InteractionResponseType } from "discord-api-types/payloads";

export const hug: Command<InteractionDataType.ChatInput> = [
	{
		name: "hello",
		description: "Ask your bot for a friendly hug!",
	},
	async (interaction) => {
		const userId = interaction?.member?.user.id;
		if (userId === undefined) throw new Error(`User is undefined`);

		return {
			type: InteractionResponseType.ChannelMessageWithSource,
			data: {
				content: `Hello, <@${userId}>! *hugs*`,
				allowed_mentions: {
					users: [userId],
				},
			},
		};
	},
];
