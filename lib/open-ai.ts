import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function generateProjectIdeas(materials: string[]) {
  const prompt = `Sugiere proyectos creativos que se pueden hacer con los siguientes materiales reciclables: ${materials.join(", ")}.`;

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    max_tokens: 150,
  });

  return response.data.choices[0].text.trim();
}