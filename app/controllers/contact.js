import Controller from '@ember/controller';
import {not, match, gte, and} from '@ember/object/computed';

export default Controller.extend({
  emailAddress: '',
  messageBody: '',
  isDisabled: not('isFormValid'),
  isEmailValid: match('emailAddress', /^.+@.+\..+$/),
  isMessageValid: gte('messageBody.length', 20),
  isFormValid: and('isEmailValid', 'isMessageValid'),
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
