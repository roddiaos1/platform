import { Branding } from '/branding/collection';
import { ProjectLogo } from '/branding/logo/collection';

Template.masterLayout.created = function () {
  // Subscription to branding collection
  this.subscribe('branding');
  // Subscribe to project logo
  this.subscribe('projectLogo');
};

Template.masterLayout.helpers({
  branding () {
    // Check for branding document
    const branding = Branding.findOne();

    if (branding) {
      // If branding is available, return it
      return branding;
    }
  },
});
