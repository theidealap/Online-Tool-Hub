import { z } from 'zod';

export type Category = 'Calculators' | 'Text Tools' | 'Converters' | 'Other';

export interface ToolEntry {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription?: string;
  category: Category;
  component: React.LazyExoticComponent<React.ComponentType<any>>;
}

import { lazy } from 'react';

export const toolsRegistry: ToolEntry[] = [
  {
    slug: 'age-calculator',
    name: 'Age Calculator',
    shortDescription: 'Calculate exact age in years, months, and days from a birth date.',
    longDescription: 'Find out exactly how old you are down to the day. You can also calculate your age on a specific date in the past or future.',
    category: 'Calculators',
    component: lazy(() => import('@/tools/age-calculator'))
  },
  {
    slug: 'percentage-calculator',
    name: 'Percentage Calculator',
    shortDescription: 'Quickly calculate percentages, increases, decreases, and ratios.',
    longDescription: 'A versatile calculator for working out percentages. Figure out X% of Y, what percentage X is of Y, or the percentage change between two numbers.',
    category: 'Calculators',
    component: lazy(() => import('@/tools/percentage-calculator'))
  },
  {
    slug: 'word-counter',
    name: 'Word Counter',
    shortDescription: 'Count words, characters, sentences, and paragraphs in real-time.',
    longDescription: 'Paste or type your text to instantly see the number of words, characters (with and without spaces), sentences, and paragraphs.',
    category: 'Text Tools',
    component: lazy(() => import('@/tools/word-counter'))
  },
  {
    slug: 'bmi-calculator',
    name: 'BMI Calculator',
    shortDescription: 'Calculate your Body Mass Index from height and weight.',
    longDescription: 'Enter your height and weight in metric or imperial units to find your BMI and see which weight category it falls into.',
    category: 'Calculators',
    component: lazy(() => import('@/tools/bmi-calculator'))
  }
];
