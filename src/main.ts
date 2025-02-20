import "dotenv/config";
import { DefaultAzureCredential, getBearerTokenProvider } from "@azure/identity";
import { AzureOpenAI } from "openai";

const modelInstrcutionsAndContext =
  "You are an AI specialized in creating mock data. You can generate any data perfectly and make it look like real-world data. Always respond in JSON format.";

const prompt = "Create a mock JSON data for a user profile with fields: id, name, email, and age.";

async function main() {
  const scope: string | string[] = "https://cognitiveservices.azure.com/.default";
  const azureADTokenProvider = getBearerTokenProvider(new DefaultAzureCredential(), scope);

  const deployment: string = "gpt-4o-mini";
  const apiVersion: string = "2024-08-01-preview";
  const client = new AzureOpenAI({ azureADTokenProvider, deployment, apiVersion });

  const result = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: modelInstrcutionsAndContext },
      { role: "user", content: prompt },
    ],
    response_format: { type: "json_object" },
  });

  if (!result.choices[0].message.content) {
    throw new Error("No response from the model");
  }

  const resultJson = JSON.parse(result.choices[0].message.content);
  console.log(resultJson);
}

main().catch(console.error);
