"use client"
export default function Error({
                                  error,
                                  reset,
                              }: {
    error: Error;
    reset: () => void;
}) {
    return <main className='error'>
        <h1>An error occurred!</h1>
        <p>Failed to fetch meal data. Please try again later.</p>
        <p>{error.message}</p>
    </main>
}