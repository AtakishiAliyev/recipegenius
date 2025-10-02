import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { generateSimplePrompt } from "../utils/helper";

const useRecipeGenerator = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [recipe, setRecipe] = useState(null);

  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

  const handleGenerateRecipe = async (formData) => {
    setIsLoading(true);
    setError(null);

    try {
      if (!API_KEY) {
        throw new Error("API KEY TAPILMADI: .ENV FALYLINI YOXLAYIN!!!");
      }

      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash-latest",
      });

      const prompt = generateSimplePrompt(formData);
      const result = await model.generateContent(prompt);
      let reponseText = result.response.text();

      reponseText = reponseText.replace(/```json\n?/g, "");
      reponseText = reponseText.replace(/```\n?/g, "");
      reponseText = reponseText.trim();

      const recipe = JSON.parse(reponseText);
      setRecipe(recipe);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { recipe, isLoading, error, handleGenerateRecipe };
};

export default useRecipeGenerator;
