const counters = document.querySelectorAll('.counter');
const h = counters;
counters.forEach((counter) => {
  h.innerText = '0';

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const c = +counter.innerText;

    const increment = target / 150;

    if (c < target) {
      h.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      h.innerText = target;
    }
  };
  updateCounter();
  console.log(counters); // Check if counters are selected correctly
});
