export default function MealPage({params}: {params: {id: string}}) {

    return (
        <div>
            <h2>Meal {params.id}</h2>
        </div>
    )
}