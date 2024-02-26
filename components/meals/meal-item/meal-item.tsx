import Link from 'next/link';
import Image from 'next/image';

import classes from './meal-item.module.scss';
import { IMealItem } from '@/interfaces/meal.interface';

interface MealItemProps {
    meal: IMealItem
}

export default function MealItem({ meal }: MealItemProps) {
    const { title, slug, image, summary, creator} = meal;
    return (
        <article className={classes.meal}>
            <header>
                <div className={classes.image}>
                    <Image src={image} alt='Meal image' fill />
                </div>
                <div className={classes.headerText}>
                    <h2>{title}</h2>
                    <p>by {creator}</p>
                </div>
            </header>
            <div className={classes.content}>
                <p className={classes.summary}>{summary}</p>
                <div className={classes.actions}>
                    <Link href={`/meals/${slug}`}>View Details</Link>
                </div>
            </div>
        </article>
    );
}