import Controller from '@ember/controller';
import {computed, observer} from '@ember/object';
export default Controller.extend({
  isDisabled: computed('emailAddress', function() {
    return this.get('emailAddress') === '';
  }),
  emailAddress: '',
  actualEmailAddress: computed('emailAddress', function() {
    // Called only when you go and use that property
    console.log('ActualEmailAddress function is called: ', this.get('emailAddress'));
    
  }),
  emailAddressChanged: observer('emailAddress', function() {
    //will always be called when the value of the emailAddress changes
    console.log('observer is called', this.get('emailAddress'));
  })
});
