'use server';
/**
 * @fileOverview This file implements a Genkit flow for generating a draft of an "About Me" section for a portfolio.
 *
 * - generateAboutMeDraft - A function that handles the generation of the "About Me" draft.
 * - AboutMeDraftInput - The input type for the generateAboutMeDraft function.
 * - AboutMeDraftOutput - The return type for the generateAboutMeDraft function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AboutMeDraftInputSchema = z.object({
  name: z.string().describe('The full name of the portfolio owner.'),
  jobTitle: z.string().describe('The current or desired job title.'),
  yearsExperience: z
    .number()
    .int()
    .min(0)
    .describe('Number of years of professional experience.'),
  skills: z
    .array(z.string())
    .describe(
      'A list of key technical and soft skills (e.g., NextJS, Firebase, leadership, problem-solving).'
    ),
  achievements: z
    .array(z.string())
    .describe('Key professional achievements or contributions (e.g., "Led a team of 3 to launch product X").'),
  desiredTone: z
    .string()
    .describe(
      'The desired tone for the "About Me" section (e.g., professional, friendly, innovative, enthusiastic, confident).'
    ),
  personalInterests: z
    .string()
    .optional()
    .describe('Optional: A brief mention of personal interests or hobbies to add a human touch.'),
  callToAction: z
    .string()
    .optional()
    .describe(
      'Optional: A concluding call to action (e.g., "Let\'s connect on LinkedIn", "View my projects").'
    ),
});
export type AboutMeDraftInput = z.infer<typeof AboutMeDraftInputSchema>;

const AboutMeDraftOutputSchema = z.object({
  draft: z.string().describe('A generated draft for the "About Me" section.'),
});
export type AboutMeDraftOutput = z.infer<typeof AboutMeDraftOutputSchema>;

const generateAboutMePrompt = ai.definePrompt({
  name: 'generateAboutMePrompt',
  input: {schema: AboutMeDraftInputSchema},
  output: {schema: AboutMeDraftOutputSchema},
  prompt: `You are an AI assistant specialized in drafting compelling and concise "About Me" sections for professional portfolios.
Your goal is to create an engaging introduction that highlights the user's expertise, achievements, and unique personality.

Here is the information about the portfolio owner:
Name: {{{name}}}
Job Title: {{{jobTitle}}}
Years of Experience: {{{yearsExperience}}}
Skills: {{#each skills}}- {{{this}}}
{{/each}}
Key Achievements: {{#each achievements}}- {{{this}}}
{{/each}}
Desired Tone: {{{desiredTone}}}
{{#if personalInterests}}Personal Interests: {{{personalInterests}}}
{{/if}}
{{#if callToAction}}Call to Action: {{{callToAction}}}
{{/if}}

Please write an "About Me" section draft that is:
- Engaging and professional.
- Concise, typically between 150-250 words.
- Reflects the specified desired tone.
- Clearly states the name and job title.
- Briefly mentions key skills and experience.
- Highlights significant achievements without going into excessive detail.
- {{#if personalInterests}}Optionally incorporates personal interests to make it more relatable.{{else}}Does not include personal interests.{{/if}}
- {{#if callToAction}}Concludes with the provided call to action.{{else}}Concludes with a general professional closing.{{/if}}

Structure your response directly as the "About Me" draft text, and ensure it is formatted as a single string field named 'draft' in the JSON output.`,
});

const generateAboutMeDraftFlow = ai.defineFlow(
  {
    name: 'generateAboutMeDraftFlow',
    inputSchema: AboutMeDraftInputSchema,
    outputSchema: AboutMeDraftOutputSchema,
  },
  async input => {
    const {output} = await generateAboutMePrompt(input);
    return output!;
  }
);

export async function generateAboutMeDraft(
  input: AboutMeDraftInput
):
  Promise<AboutMeDraftOutput> {
  return generateAboutMeDraftFlow(input);
}
