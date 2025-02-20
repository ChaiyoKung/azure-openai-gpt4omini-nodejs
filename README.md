# Azure OpenAI GPT-4o Mini Node.js

Application utilizes Azure OpenAI's API to generate text completions based on a given prompt, processing and displaying the results in JSON format.

## Preparation

Login to Azure and create a new resource for OpenAI. Ensure that you assign the "Cognitive Services OpenAI User" role to access the OpenAI API.

```bash
az login
```

## Getting Started

Create a `.env` file and configure the environment variables:

```bash
cp .env.example .env
```

Install dependencies:

```bash
bun install
```

Run the project:

```bash
bun start
```

This project was created using `bun init` in bun v1.2.2. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
