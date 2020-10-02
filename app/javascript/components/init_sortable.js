import Sortable from 'sortablejs';

const initSortable = () => {
  const list = document.querySelector('#cocktail-cards');
  Sortable.create(list, {
    ghostClass: "ghost",
    animation: 150
  });
}

export { initSortable };
