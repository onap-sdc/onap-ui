import { experimentOn } from '@islavi/ng-component-lab';

export default experimentOn('Notification')
    .group("Default Notification",[
        {
            id: 'notificationContainer',
            showSource: true,
            title: 'Notification Container',
            description: 'container example ...',
            template: `<notifications-example></notifications-example>`,
        }]);
