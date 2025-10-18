// Helper script to add questions to faq.json
// Run this in the browser console to add a question to the JSON file

function addQuestionToJson(questionData) {
	// This is a helper function to format questions for the JSON file
	// Copy the output and add it to faq.json manually

	const jsonEntry = `,
	{
		"id": ${questionData.id},
		"question": "${questionData.question}",
		"answer": "${questionData.answer}",
		"category": "${questionData.category}",
		"date": "${questionData.date}",
		"author": "${questionData.author}"
	}`;

	console.log('Copy this JSON entry and add it to faq.json:');
	console.log(jsonEntry);

	return jsonEntry;
}

// Example usage:
// addQuestionToJson({
//     id: 1234567890,
//     question: "Votre question ici",
//     answer: "Réponse à votre question",
//     category: "horaires",
//     date: "2025-01-15",
//     author: "Nom de l'utilisateur"
// });
