import sql from 'better-sqlite3';
import { MealItemType } from '@/components/meals/meal-item';

const db = sql('meals.db');

export async function getMeals(): Promise<MealItemType[]> {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // @ts-ignore
    return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug: string): MealItemType {
    // @ts-ignore
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}