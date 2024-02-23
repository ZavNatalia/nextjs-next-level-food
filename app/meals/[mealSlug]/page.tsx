export default function MealPage({params}: {params: {mealSlug: string}}) {

    return (
        <div>
            <h2>Meal {params.mealSlug}</h2>
        </div>
    )
}