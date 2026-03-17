import OpenAI from "openai";
const openai = new OpenAI({
  apiKey:
    "",
});

const runPrompt = async () => {
    try {
      const prompt = "Tell me a joke about a cat eating pasta.";
      const response = await openai.completions.create({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 100,
        temperature: 1,
      });
      console.log("AI Response:", response.choices[0].text.trim());
    } catch (error) {
      console.error("Error:", error);
    }
  };


runPrompt();
