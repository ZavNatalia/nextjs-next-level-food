import classes from './meals-grid.module.scss';
import MealItem, { MealItemType } from '@/components/meals/meal-item';

interface MealsGridProps {
    meals: MealItemType[];
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