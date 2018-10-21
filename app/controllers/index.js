import Controller from '@ember/controller';
import {computed, observer} from '@ember/object';
import { not, match } from '@ember/object/computed';
export default Controller.extend({
  headerMessage: "Welcome to Super Retro.",

  isDisabled: not('isValid'),
  isValid: match('emailAddress', /^.+@.+\..+$/),

  emailAddress: '',

  actualEmailAddress: computed('emailAddress', function() {
    // Called only when you go and use that property
    // eslint-disable-next-line
    // console.log('ActualEmailAddress function is called: ', this.get('emailAddress'));
    
  }),

  emailAddressChanged: observer('emailAddress', function() {
    //will always be called when the value of the emailAddress changes
    // eslint-disable-next-line
    // console.log('observer is called', this.get('emailAddress'));
  }),

  actions: {
    saveInvitation() {
      const email = this.get('emailAddress');
      const invitationRequest = this.store.createRecord('invitation', {email: email});
      invitationRequest.save()
        .then(response => {
          //eslint-disable-next-line
          console.log('Invitation saved: ', response)
          this.set('responseMessage', `Thank you! We have just saved your email address: ${this.get('emailAddress')}`);
          this.set('emailAddress', '');
        })
        .catch(error => {
          //eslint-disable-next-line
          console.log("Error saving invitation: ", error);
        });
    }
  }
});
