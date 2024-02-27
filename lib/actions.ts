'use server'

import { IMealItem } from '@/interfaces/meal.interface';
import { saveMeal } from '@/lib/meals';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export async function shareMeal(formData: FormData) {
    function isInvalidText(text: string | undefined) {
        return !text || text.trim() === '';
    }

    const meal: IMealItem = {
        title: formData.get('title')?.toString() ?? '',
        summary: formData.get('summary')?.toString() ?? '',
        instructions: formData.get('instructions')?.toString() ?? '',
        image: formData.get('image'),
        creator: formData.get('name')?.toString() ?? '',
        creator_email: formData.get('email')?.toString() ?? '',
    }

    if (
        isInvalidText(meal.title) ||
        isInvalidText(meal.summary) ||
        isInvalidText(meal.instructions) ||
        isInvalidText(meal.creator) ||
        isInvalidText(meal.creator_email) ||
        !meal.creator_email?.includes('@') ||
        !meal.image || meal.image.size === 0
    ) {
        throw new Error('Invalid input.');
    }

    await saveMeal(meal);
    revalidatePath('/meals');
    redirect('/meals');
}