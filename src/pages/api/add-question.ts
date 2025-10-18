import { writeFileSync, readFileSync } from 'fs';
import { join } from 'path';

export async function POST({ request }: { request: Request }) {
	try {
		const data = await request.json();

		// Read current FAQ data
		const faqPath = join(process.cwd(), 'public', 'data', 'faq.json');
		const currentData = JSON.parse(readFileSync(faqPath, 'utf-8'));

		// Add new question
		const newQuestion = {
			id: Date.now(),
			question: data.question,
			answer: data.answer || 'Merci pour votre question ! Nous y répondrons bientôt.',
			category: data.category,
			date: new Date().toISOString().split('T')[0],
			author: data.author || 'Anonyme',
		};

		currentData.push(newQuestion);

		// Write back to file
		writeFileSync(faqPath, JSON.stringify(currentData, null, 2));

		return new Response(JSON.stringify({ success: true, question: newQuestion }), {
			status: 200,
			headers: {
				'Content-Type': 'application/json',
			},
		});
	} catch (error) {
		return new Response(JSON.stringify({ success: false, error: 'Failed to add question' }), {
			status: 500,
			headers: {
				'Content-Type': 'application/json',
			},
		});
	}
}
