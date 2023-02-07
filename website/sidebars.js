/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  guideSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      link: {type: 'doc', id: 'user-guides/getting-started'},
      items: ['user-guides/octoprint-plugin-setup', 'user-guides/klipper-setup',],
    },
    {
      type: 'category',
      label: 'Obico App (Mobile & Web)',
      items: ['user-guides/detection-print-job-settings', 'user-guides/printer-feed-sharing', 'user-guides/notification-settings'],
    },
    {
      type: 'category',
      label: 'Failure Detection',
      items: ['user-guides/how-to-test-failure-detection', 'user-guides/failure-detection-false-alarms', 'user-guides/optimal-camera-setup', 'user-guides/how-does-credits-work', 'user-guides/help-the-detective-improve', 'user-guides/detective-not-watching',],
    },
    {
      type: 'category',
      label: 'Webcam Streaming',
      items: [
        'user-guides/webcam-streaming-for-human-eyes',
        'user-guides/more-about-webcam-streaming',
        'user-guides/optimal-camera-setup',
        'user-guides/webcam-streaming-resolution-framerate',
        {
          type: 'category',
          label: 'More... ',
          items: [
            'user-guides/streaming-compatibility-mode',
            'user-guides/adjust-webcam-settings-premium-streaming',
            'user-guides/check-webcam-streaming-mode',
            'user-guides/internet-speed-requirement-premium-streaming',
            'user-guides/premium-streaming-raspberry-pi-connection-speed',
            'user-guides/premium-streaming-computer-phone-connection-speed',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Account & Subscription',
      items: ['user-guides/upgrade-to-pro', 'user-guides/free-trial-pro-plan', 'user-guides/check-type-of-your-account', 'user-guides/how-does-detective-hour-work', 'user-guides/unarchive-printer',],
    },
    {
      type: 'category',
      label: 'Troubleshooting Guides',
      items: [
        'user-guides/troubleshoot-server-connection-issues',
        {
          type: 'category',
          label: 'Webcam Streaming Troubleshooting',
          items: [
            'user-guides/webcam-feed-is-not-showing',
            'user-guides/webcam-feed-is-laggy',
            'user-guides/webcam-stream-stuck-at-1-10-fps',
            'user-guides/octoprint-webcam-not-streaming',
          ],
        },
        'user-guides/connectivity-error-report',
        'user-guides/turn-on-debug-logging',
        'user-guides/send-mobile-app-log-files',
      ],
    },
    {
      type: 'category',
      label: 'Obico for OctoPrint',
      items: [
        'user-guides/octoprint-plugin-setup-manual-link',
        'user-guides/octoprint-tunneling',
        {
          type: 'category',
          label: 'Webcam Settings',
          items: [
            'user-guides/webcam-streaming-resolution-framerate-octoprint',
            'user-guides/check-webcam-streaming-mode',
            'user-guides/octoprint-webcam-not-streaming',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Obico for Klipper',
      link: {type: 'doc', id: 'user-guides/moonraker-obico/overview'},
      items: ['user-guides/moonraker-obico/config', 'user-guides/webcam-streaming-resolution-framerate-klipper', 'user-guides/moonraker-obico/logging-file', 'user-guides/moonraker-obico/update-manager', 'user-guides/moonraker-obico/uninstall'],
    },
    'user-guides/contact-us-for-support',
  ],
  developerSidebar: [
    {
      type: 'category',
      label: 'Self-hosted Obico Server',
      link: {type: 'doc', id: 'server-guides/index'},
      items: [
        'server-guides/hardware-requirements',
        'server-guides/install',
        'server-guides/configure',
        {
          type: 'category',
          label: 'Platform-Specific Guides',
          items: [
            {
              type: 'autogenerated',
              dirName: 'server-guides/platform-specific',
            },
          ],
        },
        {
          type: 'category',
          label: 'Advanced Configurations',
          link: {type: 'doc', id: 'server-guides/advanced/index'},
          items: [
            'server-guides/advanced/firewall-guides',
            'server-guides/advanced/reverse-proxy',
            'server-guides/advanced/nvidia-gpu',
            'server-guides/advanced/gmail_smtp_setup_guide',
            'server-guides/advanced/email_guide',
            'server-guides/advanced/telegram_guide',
            'server-guides/advanced/pushover_guide',
          ],
        },
        {
          type: 'category',
          label: 'Obico Clients',
          items: [
            'server-guides/configure-octoprint-plugin',
            'server-guides/configure-mobile-app',
          ],
        },
        'server-guides/tunnel',
        'server-guides/faqs',
        'server-guides/ops',
      ],
    },
    {
      type: 'category',
      label: 'Tutorials',
      link: {type: 'doc', id: 'tutorials/index'},
      items: [
        'tutorials/pushover-notification-plugin',
      ],
    },
    {
      type: 'category',
      label: 'Client API',
      link: {type: 'doc', id: 'api/index'},
      items: [
        {
          type: 'autogenerated',
          dirName: 'api',
        },
      ],
    },
    {
      type: 'category',
      label: 'Obico Server Plugins',
      link: {type: 'doc', id: 'developer-guides/plugins/index'},
      items: [
        'developer-guides/plugins/notification-plugin',
      ],
    },
    'developer-guides/contribute',
  ],
};
