import React from 'react';
import { EventLayoutConfig } from '../config/eventLayoutConfig';

interface ScheduleItemProps {
  item: string;
  index: number;
  config: EventLayoutConfig['scheduleStyle'];
}

export const renderScheduleItem = ({ item, index, config }: ScheduleItemProps): React.ReactNode => {
  if (!item.trim()) {
    const spacingClass = config.spacing === 'compact' ? 'h-2' : config.spacing === 'relaxed' ? 'h-3' : 'h-5';
    return <div key={`spacer-${index}`} className={spacingClass}></div>;
  }

  const isSectionHeader = /^Part [IVX]+/.test(item);
  const isModuleHeader = /^Module \d+:/.test(item);
  const isSubsectionHeader = /^(Modules \d+ & \d+|Technique|Daily|Workshops|Guest|Social)/.test(item);

  if (isSectionHeader && config.showSectionHeaders) {
    return (
      <div key={`${item}-${index}`} className={index > 0 ? 'mt-8 pt-6' : 'pt-0'}>
        <h3 className="text-2xl font-zelda text-logo-purple-2 mb-5 border-b-2 border-logo-purple-2/40 pb-3">
          {item}
        </h3>
      </div>
    );
  }

  if (isModuleHeader && config.showModuleHeaders) {
    return (
      <div key={`${item}-${index}`} className="mt-3 mb-2 ml-2">
        <h4 className="text-base font-sans font-semibold text-gray-800">
          {item}
        </h4>
      </div>
    );
  }

  if (isSubsectionHeader && config.showModuleHeaders) {
    return (
      <div key={`${item}-${index}`} className="mt-4 mb-3">
        <h4 className="text-lg font-sans font-semibold text-gray-800 tracking-wide">
          {item}
        </h4>
      </div>
    );
  }

  if (config.showBulletPoints) {
    return (
      <div key={`${item}-${index}`} className="flex items-start text-gray-700 font-light mb-2.5">
        <span className="w-2 h-2 bg-logo-purple-2 rounded-full mr-3 mt-2.5 flex-shrink-0"></span>
        <p className="leading-relaxed text-base flex-1">{item}</p>
      </div>
    );
  }

  return (
    <p key={`${item}-${index}`} className="text-gray-700 font-light leading-relaxed text-base mb-2.5">
      {item}
    </p>
  );
};

interface ContentLineProps {
  line: string;
  index: number;
  content: string;
  config: EventLayoutConfig['contentStyle'];
}

export const renderContentLine = ({ line, index, content, config }: ContentLineProps): React.ReactNode => {
  if (!line.trim() && index === 0) return null;

  const lines = content.split('\n');
  const isFirstNonEmpty = index === 0 || (index === 1 && !lines[0].trim());

  if (isFirstNonEmpty && config.showTitle) {
    const isTitle = line === line.toUpperCase() && line.length > 20;
    if (isTitle) {
      return (
        <h3 key={`line-${index}`} className="text-2xl font-zelda text-logo-purple-2 mb-2">
          {line}
        </h3>
      );
    }
  }

  if (index <= 2 && config.showDateRange && /\d{1,2}\s+(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i.test(line)) {
    return (
      <p key={`line-${index}`} className="text-lg font-sans text-gray-700 mb-3">
        {line}
      </p>
    );
  }

  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const hasUrl = urlRegex.test(line);
  if (hasUrl) {
    urlRegex.lastIndex = 0;
    const parts = line.split(urlRegex);
    
    const linkClassName = config.linkStyle === 'button' 
      ? 'text-logo-purple-2 hover:text-logo-purple-1 font-medium px-4 py-2 bg-logo-purple-2/10 rounded hover:bg-logo-purple-2/20 inline-block'
      : config.linkStyle === 'underline'
      ? 'text-logo-purple-2 hover:text-logo-purple-1 underline font-medium'
      : 'text-logo-purple-2 hover:text-logo-purple-1 font-medium';

    return (
      <p key={`line-${index}`} className="text-base leading-relaxed">
        {parts.map((part, partIndex) => {
          const isUrl = /^https?:\/\//.test(part);
          if (isUrl) {
            return (
              <a
                key={partIndex}
                href={part}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClassName}
              >
                {part}
              </a>
            );
          }
          return <span key={partIndex}>{part}</span>;
        })}
      </p>
    );
  }

  if (line.trim()) {
    return (
      <p key={`line-${index}`} className="text-base leading-relaxed">
        {line}
      </p>
    );
  }

  return <div key={`line-${index}`} className="h-2"></div>;
};

