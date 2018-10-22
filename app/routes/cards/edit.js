import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.findRecord('card', params.card_id);
  },
  actions: {
    saveCard(card) {
      card.save().then(() => this.transitionTo('cards'));
    },
    willTransition(transition) {
      let model = this.controller.get('model');
      if (model.get("hasDirtyAttributes")) {
        let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this page?"); //This triggers an alert and waits for user's input
        if (confirmation) {
          model.rollbackAttributes();
        } else {
          transition.abort();
        }
      }
    }
  }
});
