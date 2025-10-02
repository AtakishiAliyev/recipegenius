function generateSimplePrompt(data) {
    const ingredientsText = data.ingredients;
    const dietaryText = data.dietary.length > 0 ? data.dietary.join(', ') : 'none';
    const prepTimeText = data.preparation.length > 0 ? data.preparation[0] : 'any';

    return `
            You must respond ONLY with a valid JSON object. No additional text before or after.

            Create a recipe with these requirements:
            - Ingredients: ${ingredientsText}
            - Dietary: ${dietaryText}
            - Time: ${prepTimeText}

            Respond with this exact JSON structure:
            {
            "title": "recipe name",
            "description": "brief description",
            "ingredients": [
                "1 cup rice",
                "2 chicken breasts"
            ],
            "steps": [
                "Step 1 instructions",
                "Step 2 instructions"
            ]
            }`;
}

export { generateSimplePrompt };