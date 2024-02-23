export const metadata = {
    title: 'Meals',
    description: 'Delicious meals, shared by a food-loving community.',
};

export default function MealsLayout({ children }) {
    return (
        <div style={{
            padding: '20px',
            backgroundColor: 'rgba(120,119,121,0.32)',
            borderRadius: '32px',
        }}>
            {children}
        </div>
    );
}