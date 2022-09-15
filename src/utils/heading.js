import { useEffect } from 'react';

const Heading = ({ headingRef }) => {
  useEffect(() => {
    const heading = "Hi,-I'm Kyrillos,-Frontend Developer";
    const headingLetters = heading.split('');

    headingRef.current.innerHTML = '';

    headingLetters.forEach((letter, ind) => {
      if (letter === '-') {
        headingRef.current.innerHTML += '<br>';
        letter = '';
      }
      if (letter === 'K') {
        headingRef.current.innerHTML
          += '<span class="letter_one">K</span><span class="letter_two">K</span>';
        letter = '';
      }
      if (
        (letter === 'y' && headingLetters[ind + 1] === 'r')
        || (letter === 'r' && headingLetters[ind + 1] === 'i')
        || (letter === 'i' && headingLetters[ind + 1] === 'l')
        || (letter === 'l' && headingLetters[ind + 1] === 'l')
        || (letter === 'l' && headingLetters[ind - 1] === 'l')
        || (letter === 'o' && headingLetters[ind + 1] === 's')
        || (letter === 's' && headingLetters[ind - 1] === 'o')
        || (letter === ',' && headingLetters[ind - 1] === 's')
      ) {
        headingRef.current.innerHTML += `<span class="others letter">${letter}</span>`;
        letter = '';
      }

      const span = document.createElement('span');
      span.textContent = letter;
      span.classList.add('letter');
      headingRef.current.appendChild(span);
    });
  }, [headingRef]);

  return null;
};

export default Heading;
