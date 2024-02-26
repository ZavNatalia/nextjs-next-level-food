import classes from './meals-grid.module.scss';
import MealItem from '@/components/meals/meal-item/meal-item';
import { IMealItem } from '@/interfaces/meal.interface';

interface MealsGridProps {
    meals: IMealItem[];
}

export default function MealsGrid({meals}: MealsGridProps) {
    return <ul className={classes.meals}>
        {meals?.map(meal => {
            return (
                <li key={meal.id}>
                    <MealItem meal={meal} />
                </li>
            )
        })}
    </ul>
}