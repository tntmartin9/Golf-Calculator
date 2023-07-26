const flashcardData = [
  {
    front: 'a',
    back: '1',
  },
  {
    front: 'b',
    back: '2',
  },
  {
    front: 'c',
    back: '3',
  },
  {
    front: 'd',
    back: '4',
  },
  {
    front: 'e',
    back: '5',
  },
  {
    front: 'f',
    back: '6',
  },
  {
    front: 'g',
    back: '7',
  },
  {
    front: 'h',
    back: '8',
  },
  {
    front: 'i',
    back: '9',
  },
  {
    front: 'j',
    back: '10',
  },
];

function createFlashcards() {
  const flashcardContainer = document.querySelector('.flashcard-container');

  flashcardData.forEach((data) => {
    const card = document.createElement('div');
    card.classList.add('flashcard');
    
    const frontSide = document.createElement('div');
    frontSide.classList.add('front');
    frontSide.innerHTML = `
      <h2>${data.front}</h2>
    `;

    const backSide = document.createElement('div');
    backSide.classList.add('back');
    backSide.innerHTML = `
      <h2>${data.back}</h2>
    `;

    card.appendChild(frontSide);
    card.appendChild(backSide);

    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });

    flashcardContainer.appendChild(card);
  });
}

createFlashcards();
/*newDiv.style.backgroundColor = "green";
newDiv.style.height = "80px";*/
