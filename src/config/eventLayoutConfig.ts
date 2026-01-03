import { EventType } from '../data/events';

export interface CTASectionConfig {
  title: string;
  description: string;
  buttonText: string;
  buttonIcon?: string;
}

export interface EventLayoutConfig {
  type: EventType;
  cta: CTASectionConfig;
  scheduleStyle: {
    showSectionHeaders: boolean;
    showModuleHeaders: boolean;
    showBulletPoints: boolean;
    spacing: 'compact' | 'relaxed' | 'spacious';
  };
  contentStyle: {
    showTitle: boolean;
    showDateRange: boolean;
    linkStyle: 'underline' | 'button' | 'inline';
  };
}

export const eventLayoutConfigs: Record<EventType, EventLayoutConfig> = {
  social: {
    type: 'social',
    cta: {
      title: 'Ready to Join?',
      description: 'Don\'t miss the opportunity to join this amazing event with the PTZouk community!',
      buttonText: 'Contact via Messenger',
    },
    scheduleStyle: {
      showSectionHeaders: false,
      showModuleHeaders: false,
      showBulletPoints: true,
      spacing: 'compact',
    },
    contentStyle: {
      showTitle: false,
      showDateRange: false,
      linkStyle: 'inline',
    },
  },
  workshop: {
    type: 'workshop',
    cta: {
      title: 'Ready to Join?',
      description: 'Don\'t miss the opportunity to join this amazing event with the PTZouk community!',
      buttonText: 'Buy Tickets via Messenger',
    },
    scheduleStyle: {
      showSectionHeaders: true,
      showModuleHeaders: true,
      showBulletPoints: true,
      spacing: 'relaxed',
    },
    contentStyle: {
      showTitle: true,
      showDateRange: true,
      linkStyle: 'underline',
    },
  },
  festival: {
    type: 'festival',
    cta: {
      title: 'Ready to Join?',
      description: 'Don\'t miss the opportunity to join this amazing event with the PTZouk community!',
      buttonText: 'Buy Tickets via Messenger',
    },
    scheduleStyle: {
      showSectionHeaders: true,
      showModuleHeaders: true,
      showBulletPoints: true,
      spacing: 'spacious',
    },
    contentStyle: {
      showTitle: true,
      showDateRange: true,
      linkStyle: 'underline',
    },
  },
};

export const getEventLayoutConfig = (type: EventType): EventLayoutConfig => {
  return eventLayoutConfigs[type] || eventLayoutConfigs.workshop;
};

