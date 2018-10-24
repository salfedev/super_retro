import Route from '@ember/routing/route';

export default Route.extend({
  invitationMessage: false,
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
    revokeInvitation(invitation) {
      let confirmation = confirm(`Are you sure you want to revoke invitation for ${invitation.email}`)
      if (confirmation) {
        invitation.set('allowed', false)
        invitation.save()
          .then(response => {
            //eslint-disable-next-line
            console.log('Invitation updated: ', response)
            this.controller.set('invitationMessage', `Invitation for ${invitation.email} revoked!`);
          });
      }
    },
    allowUser(invitation) {
      invitation.set('allowed', true);
      invitation.save()
        .then(response => {
            //eslint-disable-next-line
            console.log('Invitation saved: ', response)
            this.controller.set('invitationMessage', `User ${invitation.email} was added to the board`);
          })
          .catch(error => {
            //eslint-disable-next-line
            console.log("Error saving invitation: ", error);
          });
    },
    dismissMessage() {
      this.set('invitationMessage', false);
    }
  }
});
