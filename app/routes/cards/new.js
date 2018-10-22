import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.createRecord('card')
  },
  actions: {
    saveCard(newCard) {
      newCard.save().then(() => this.transitionTo('cards'));
    },
    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});