import Route from '@ember/routing/route';

export default Route.extend({
  columnHeader: "To Do",
  model() {
    return this.store.findAll('card');
  },
  actions: {
    deleteCard(card) {
      let confirmation = confirm('Are you sure you want to delete this card?')
      if (confirmation) {
        card.destroyRecord();
      }
    }
  }
});