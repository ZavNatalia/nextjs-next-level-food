'use server'

import { IMealItem } from '@/interfaces/meal.interface';
import { saveMeal } from '@/lib/meals';
import { redirect } from 'next/navigation';

export async function shareMeal(formData: FormData) {
    const meal: IMealItem = {
        title: formData.get('title')?.toString() ?? '',
        summary: formData.get('summary')?.toString(),
        instructions: formData.get('instructions')?.toString() ?? '',
        image: formData.get('image'),
        creator: formData.get('name')?.toString(),
        creator_email: formData.get('email')?.toString(),
    }

    await saveMeal(meal);
    redirect('/meals');
}