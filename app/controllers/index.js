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
    console.log('ActualEmailAddress function is called: ', this.get('emailAddress'));
    
  }),
  emailAddressChanged: observer('emailAddress', function() {
    //will always be called when the value of the emailAddress changes
    // eslint-disable-next-line
    console.log('observer is called', this.get('emailAddress'));
  }),
  actions: {
    saveInvitation() {
      alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
      this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
      this.set('emailAddress', '');
    }
  }
});
