'use server';
/**
 * @fileOverview An AI assistant that helps users generate concise and compelling descriptions for their portfolio projects.
 *
 * - aiProjectDescriptionAssistant - A function that handles the project description generation process.
 * - AIProjectDescriptionAssistantInput - The input type for the aiProjectDescriptionAssistant function.
 * - AIProjectDescriptionAssistantOutput - The return type for the aiProjectDescriptionAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIProjectDescriptionAssistantInputSchema = z.object({
  projectName: z.string().describe('The name of the project.'),
  technologiesUsed: z.string().describe('A comma-separated list of technologies used in the project.'),
  keyFeatures: z.string().describe('A comma-separated list of key features or functionalities of the project.'),
  targetAudience: z.string().optional().describe('The target audience for the description (e.g., potential employers, clients).'),
  existingDescription: z.string().optional().describe('An optional existing description to refine or expand upon.'),
});
export type AIProjectDescriptionAssistantInput = z.infer<typeof AIProjectDescriptionAssistantInputSchema>;

const AIProjectDescriptionAssistantOutputSchema = z.object({
  generatedDescription: z.string().describe('The compelling and concise project description.'),
});
export type AIProjectDescriptionAssistantOutput = z.infer<typeof AIProjectDescriptionAssistantOutputSchema>;

export async function aiProjectDescriptionAssistant(input: AIProjectDescriptionAssistantInput): Promise<AIProjectDescriptionAssistantOutput> {
  return aiProjectDescriptionAssistantFlow(input);
}

const aiProjectDescriptionAssistantPrompt = ai.definePrompt({
  name: 'aiProjectDescriptionAssistantPrompt',
  input: {schema: AIProjectDescriptionAssistantInputSchema},
  output: {schema: AIProjectDescriptionAssistantOutputSchema},
  prompt: `You are an expert copywriter specializing in creating compelling and concise project descriptions for professional portfolios. Your goal is to highlight the project's value, the technologies used, and its key features in an engaging way.

Project Name: {{{projectName}}}
Technologies Used: {{{technologiesUsed}}}
Key Features: {{{keyFeatures}}}
{{#if targetAudience}}Target Audience: {{{targetAudience}}}{{/if}}

{{#if existingDescription}}
Refine the following existing description, making it more compelling, concise, and professional, incorporating the details above:
Existing Description: {{{existingDescription}}}
{{else}}
Generate a compelling and concise description (2-4 sentences) for the project named "{{{projectName}}}", focusing on its purpose, the technologies utilized, and its standout features. Tailor the tone for {{#if targetAudience}}{{{targetAudience}}}{{else}}a professional audience{{/if}}.
{{/if}}

Ensure the description is polished, professional, and directly communicates the project's impact and your skills.`,
});

const aiProjectDescriptionAssistantFlow = ai.defineFlow(
  {
    name: 'aiProjectDescriptionAssistantFlow',
    inputSchema: AIProjectDescriptionAssistantInputSchema,
    outputSchema: AIProjectDescriptionAssistantOutputSchema,
  },
  async (input) => {
    const {output} = await aiProjectDescriptionAssistantPrompt(input);
    if (!output) {
      throw new Error('Failed to generate project description.');
    }
    return output;
  }
);
