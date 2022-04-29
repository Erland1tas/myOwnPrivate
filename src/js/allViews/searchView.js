class SearchView {
  parentEl = document.querySelector('.search');

  searchEntry() {
    const searchField = this.parentEl.querySelector('.search__field').value;
    this.clearInput();
    return searchField;
  }
  clearInput() {
    this.parentEl.querySelector('.search__field').value = '';
  }
  btnPressSearch(handler) {
    const btnItself = this.parentEl.querySelector('.search__btn');
    const clickEvents = ['click', 'submit'];

    clickEvents.forEach(function (events) {
      btnItself.addEventListener(events, function (e) {
        e.preventDefault();
        handler();
      });
    });
  }
}
export default new SearchView();
