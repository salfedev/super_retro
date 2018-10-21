import Controller from '@ember/controller';
import {computed} from '@ember/object';
import {not, match} from '@ember/object/computed';

export default Controller.extend({
  emailAddress: '',
  messageBody: '',
  isDisabled: not('isFormValid'),
  isEmailValid: match('emailAddress', /^.+@.+\..+$/),
  isFormValid: computed('isEmailValid', 'messageBody', function() {
    return this.get('isEmailValid') && this.get('messageBody').length > 20;
  }),
  actions: {
    sendMessage() {
      // alert(`Creating issue now using username: ${this.get('emailAddress')}`);
      this.set('responseMessage', `Issue created successfully! Thanks!`)
      this.set('emailAddress', '');
      this.set('messageBody', '');
    },
    dismissAlert() {
      this.set('responseMessage', false)
    }
  }
});
