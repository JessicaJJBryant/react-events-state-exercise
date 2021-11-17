// REACT EVENTS STATE EXERCISE
// 3a.
import { useState } from 'react';

// 3b.
function Bonus() {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const [letter, setLetter] = useState(0);
    // we should maybe call letter and setLetter "index" and "setIndex" because that's actually what we're selecting here. Jamie Flynt worked through this for us in class. Beautiful in its simplicity and I'm jealous because I could not figure it out. I definitely need to review.
    return (
        // 3e.
        <section>
            {/* 3f. */}
            <h1>{letters[letter]}</h1>
            <button onClick={() => setLetter(letter + 1)}>NEXT LETTER</button>
        </section>
    );
}
// 3c.
export default Bonus;
// 3f. Using State as well as an onClick Event, have the letter A display in the h1 when the page loads and change to the next letter in the alphabet each time the button is pressed.