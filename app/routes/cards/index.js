import Route from '@ember/routing/route';

export default Route.extend({
  columnHeader: "To Do",
  model() {
    return this.store.findAll('card')
  }
});