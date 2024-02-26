import classes from './page.module.scss';
import Image from 'next/image';
import { getMeal } from '@/lib/meals';
import { notFound } from 'next/navigation';
import { IMealItem } from '@/interfaces/meal.interface';

export default function MealPage({params}: { params: { mealSlug: string } }) {
    const meal: IMealItem = getMeal(params.mealSlug);

    if (!meal) {
        notFound();
    }

    meal.instructions = meal?.instructions?.replace(/\n/g, '<br />');

    return (
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image src={meal.image} fill alt='Meal image'/>
                </div>
                <div className={classes.headerText}>
                    <h1>{meal.title}</h1>
                    <p className={classes.creator}>
                        by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
                    </p>
                    <p className={classes.summary}>
                        {meal.summary}
                    </p>
                </div>
            </header>
            <main>
                <p
                    className={classes.instructions}
                    dangerouslySetInnerHTML={{
                        __html: meal.instructions ?? '',
                    }}>
                </p>
            </main>
        </>
    )
}