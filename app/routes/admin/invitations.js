import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.findAll('invitation');
  },
  actions: {
    deleteInvitation(invitation) {
      let confirmation = confirm(`Are you sure you want to delete invitation for ${invitation.email}`)
      if (confirmation) {
        invitation.destroyRecord();
      }
    },
    allowUser(invitation) {
      invitation.set('allowed', true);
      invitation.save()
        .then(response => {
            //eslint-disable-next-line
            console.log('Invitation saved: ', response)
            this.set('responseMessage', `User <strong>${this.get('emailAddress')}</strong> was added to the board`);
          })
          .catch(error => {
            //eslint-disable-next-line
            console.log("Error saving invitation: ", error);
          });
    },
    dismissAlert() {
      this.set('responseMessage', false);
    }
  }
});
