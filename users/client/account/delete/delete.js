import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { TAPi18n } from 'meteor/tap:i18n';

Template.deleteAccount.events({
  'click #delete-account-confirm': function () {
    // Get user ID
    const userId = Meteor.userId();

    // Delete user account
    Meteor.call('deleteAccount', userId, () => {
      // Dismiss the delete account modal
      Modal.hide('deleteAccount');

      // Route to home page
      Router.go('home');

      // Get deletion message success translation
      const message = TAPi18n.__('deleteAccount_success_message');

      // Alert user of successful deletion
      sAlert.success(message);
    });
  },
});
