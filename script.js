const questions = document.querySelectorAll('.accordion-question');

questions.forEach(button => {
  button.addEventListener('click', () => {
    const answerId = button.getAttribute('aria-controls');
    const answer = document.getElementById(answerId);
    const isExpanded = button.getAttribute('aria-expanded') === 'true';

    // Optionally close all other answers first
    questions.forEach(q => {
      const aId = q.getAttribute('aria-controls');
      const a = document.getElementById(aId);
      q.setAttribute('aria-expanded', 'false');
      a.hidden = true;
    });

    // Toggle the clicked one
    button.setAttribute('aria-expanded', String(!isExpanded));
    answer.hidden = isExpanded;
  });
});


