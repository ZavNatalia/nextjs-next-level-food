import Link from 'next/link';

export default function MealsPage() {

    return (
        <div>
            <h2>Meals Page</h2>
                <div style={{
                    border: '2px solid white',
                    borderRadius: '32px',
                    padding: '0 24px',
                    display: 'inline-flex',
                    gap: '12px',
                    backgroundColor: 'rgba(76,41,96,0.72)'
                }}>
                    <p><Link href='/meals/1'>Meal 1</Link></p>
                    <p><Link href='/meals/2'>Meal 2</Link></p>
                    <p><Link href='/meals/3'>Meal 3</Link></p>
                </div>
        </div>
    );
}