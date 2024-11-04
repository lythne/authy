import { Button } from 'sharedUI';
import { HeroStyles } from 'viewsStyles';

export default function Hero() {
    return (
        <section
            className={HeroStyles.Hero}
            id="hero"
        >
            <div className={HeroStyles.Message}>
                <h1>Authy</h1>
                <h2>Access & Structural Control</h2>
                <p>
                    Learn to implement authentication, authorization and good
                    structure in your Next.js projects.
                </p>
                <Button
                    url="/"
                    name="Learn More"
                />
            </div>
        </section>
    );
}
