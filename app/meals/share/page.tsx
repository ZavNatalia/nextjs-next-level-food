'use client';
import ImagePicker from '@/components/meals/image-picker/image-picker';
import { shareMeal } from '@/lib/actions';
import classes from './page.module.scss';
import MealsFormSubmit from '@/components/meals/meals-form-submit/meals-form-submit';

export default function ShareMealPage() {

    return (
        <>
            <header className={classes.header}>
                <h1>
                    Share your <span className={classes.highlight}>favorite meal</span>
                </h1>
                <p>Or any other meal you feel needs sharing!</p>
            </header>
            <main className={classes.main}>
                <form className={classes.form} action={shareMeal}>
                    <div className={classes.row}>
                        <div>
                            <label htmlFor="name">Your name</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div>
                            <label htmlFor="email">Your email</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                    </div>
                    <p>
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" name="title" required />
                    </p>
                    <p>
                        <label htmlFor="summary">Short Summary</label>
                        <input type="text" id="summary" name="summary" required />
                    </p>
                    <p>
                        <label htmlFor="instructions">Instructions</label>
                        <textarea
                            id="instructions"
                            name="instructions"
                            rows={10}
                            required
                        ></textarea>
                    </p>
                    <ImagePicker label="Your image" name="image" />
                    <p className={classes.actions}>
                        <MealsFormSubmit/>
                    </p>
                </form>
            </main>
        </>
    );
}