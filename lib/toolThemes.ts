export interface ToolTheme {
  background: string;
  textColor: string;
  accentColor: string;
  bgColor: string;
  textColorClass: string;
  icon?: string;
}

// Color mapping from your React project
const colorMap: Record<string, { bgColor: string; textColor: string; accentColor: string }> = {
  'blue': { bgColor: 'bg-blue-100', textColor: 'text-blue-800', accentColor: '#1d4ed8' },
  'red': { bgColor: 'bg-red-100', textColor: 'text-red-800', accentColor: '#dc2626' },
  'green': { bgColor: 'bg-green-100', textColor: 'text-green-800', accentColor: '#16a34a' },
  'yellow': { bgColor: 'bg-yellow-100', textColor: 'text-yellow-800', accentColor: '#ca8a04' },
  'purple': { bgColor: 'bg-purple-100', textColor: 'text-purple-800', accentColor: '#9333ea' },
  'pink': { bgColor: 'bg-pink-100', textColor: 'text-pink-800', accentColor: '#ec4899' },
  'indigo': { bgColor: 'bg-indigo-100', textColor: 'text-indigo-800', accentColor: '#6366f1' },
  'teal': { bgColor: 'bg-teal-100', textColor: 'text-teal-800', accentColor: '#0d9488' },
  'orange': { bgColor: 'bg-orange-100', textColor: 'text-orange-800', accentColor: '#ea580c' },
  'cyan': { bgColor: 'bg-cyan-100', textColor: 'text-cyan-800', accentColor: '#0891b2' },
  'gray': { bgColor: 'bg-gray-100', textColor: 'text-gray-800', accentColor: '#6b7280' },
  'sky': { bgColor: 'bg-sky-100', textColor: 'text-sky-800', accentColor: '#0284c7' },
  'amber': { bgColor: 'bg-amber-100', textColor: 'text-amber-800', accentColor: '#d97706' },
  'lime': { bgColor: 'bg-lime-100', textColor: 'text-lime-800', accentColor: '#65a30d' },
};

// Fallback themes for tools that don't have frontmatter backgrounds
export const fallbackThemes: Record<string, ToolTheme> = {
  // Essential Tools
  'bash': {
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    textColor: '#1e293b',
    accentColor: '#6366f1',
    bgColor: 'bg-indigo-100',
    textColorClass: 'text-indigo-800',
    icon: '🐚'
  },
  'curl': {
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    textColor: '#1e293b',
    accentColor: '#1d4ed8',
    bgColor: 'bg-blue-100',
    textColorClass: 'text-blue-800',
    icon: '🌐'
  },
  'linux': {
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    textColor: '#1e293b',
    accentColor: '#6b7280',
    bgColor: 'bg-gray-200',
    textColorClass: 'text-gray-800',
    icon: '🐧'
  },
  'ssh': {
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    textColor: '#1e293b',
    accentColor: '#6b7280',
    bgColor: 'bg-gray-200',
    textColorClass: 'text-gray-900',
    icon: '🔐'
  },
  'tmux': {
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    textColor: '#1e293b',
    accentColor: '#ca8a04',
    bgColor: 'bg-yellow-100',
    textColorClass: 'text-yellow-800',
    icon: '🖥️'
  },
  'vim': {
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    textColor: '#1e293b',
    accentColor: '#16a34a',
    bgColor: 'bg-green-100',
    textColorClass: 'text-green-800',
    icon: '📝'
  },

  // Reconnaissance
  'amass': {
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    textColor: '#1e293b',
    accentColor: '#1d4ed8',
    bgColor: 'bg-blue-300',
    textColorClass: 'text-blue-900',
    icon: '🕸️'
  },
  'maltego': {
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    textColor: '#1e293b',
    accentColor: '#0d9488',
    bgColor: 'bg-teal-100',
    textColorClass: 'text-teal-800',
    icon: '🕵️'
  },
  'recon-ng': {
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    textColor: '#1e293b',
    accentColor: '#9333ea',
    bgColor: 'bg-purple-100',
    textColorClass: 'text-purple-800',
    icon: '🔍'
  },
  'shodan': {
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    textColor: '#1e293b',
    accentColor: '#6366f1',
    bgColor: 'bg-indigo-100',
    textColorClass: 'text-indigo-800',
    icon: '🔎'
  },
  'sublist3r': {
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    textColor: '#1e293b',
    accentColor: '#9333ea',
    bgColor: 'bg-purple-300',
    textColorClass: 'text-purple-900',
    icon: '📋'
  },
  'theharvester': {
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    textColor: '#1e293b',
    accentColor: '#9333ea',
    bgColor: 'bg-purple-200',
    textColorClass: 'text-purple-900',
    icon: '🌾'
  },

  // Enumeration
  'dnsenum': {
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    textColor: '#1e293b',
    accentColor: '#1d4ed8',
    bgColor: 'bg-blue-100',
    textColorClass: 'text-blue-800',
    icon: '🔍'
  },
  'ffuf': {
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    textColor: '#1e293b',
    accentColor: '#ca8a04',
    bgColor: 'bg-yellow-100',
    textColorClass: 'text-yellow-800',
    icon: '⚡'
  },
  'gobuster': {
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    textColor: '#1e293b',
    accentColor: '#ca8a04',
    bgColor: 'bg-yellow-100',
    textColorClass: 'text-yellow-800',
    icon: '🔫'
  },
  'joomscan': {
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    textColor: '#1e293b',
    accentColor: '#0d9488',
    bgColor: 'bg-teal-200',
    textColorClass: 'text-teal-900',
    icon: '🔧'
  },
  'masscan': {
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    textColor: '#1e293b',
    accentColor: '#1d4ed8',
    bgColor: 'bg-blue-200',
    textColorClass: 'text-blue-900',
    icon: '🚀'
  },
  'nmap': {
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    textColor: '#1e293b',
    accentColor: '#1d4ed8',
    bgColor: 'bg-blue-100',
    textColorClass: 'text-blue-800',
    icon: '🗺️'
  },
  'nikto': {
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    textColor: '#1e293b',
    accentColor: '#16a34a',
    bgColor: 'bg-green-100',
    textColorClass: 'text-green-800',
    icon: '🛡️'
  },
  'openvas': {
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    textColor: '#1e293b',
    accentColor: '#dc2626',
    bgColor: 'bg-red-100',
    textColorClass: 'text-red-800',
    icon: '🔍'
  },
  'wpscan': {
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    textColor: '#1e293b',
    accentColor: '#ec4899',
    bgColor: 'bg-pink-100',
    textColorClass: 'text-pink-800',
    icon: '📝'
  },

  // Exploitation
  'aircrack-ng': {
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    textColor: '#1e293b',
    accentColor: '#6366f1',
    bgColor: 'bg-indigo-100',
    textColorClass: 'text-indigo-800',
    icon: '📡'
  },
  'bettercap': {
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    textColor: '#1e293b',
    accentColor: '#ca8a04',
    bgColor: 'bg-yellow-100',
    textColorClass: 'text-yellow-800',
    icon: '🎯'
  },
  'burpsuite': {
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    textColor: '#1e293b',
    accentColor: '#ea580c',
    bgColor: 'bg-orange-100',
    textColorClass: 'text-orange-800',
    icon: '🛠️'
  },
  'evilginx2': {
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    textColor: '#1e293b',
    accentColor: '#ea580c',
    bgColor: 'bg-orange-100',
    textColorClass: 'text-orange-800',
    icon: '🎣'
  },
  'file-inclusion': {
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    textColor: '#1e293b',
    accentColor: '#ca8a04',
    bgColor: 'bg-yellow-200',
    textColorClass: 'text-yellow-800',
    icon: '📁'
  },
  'hashcat': {
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    textColor: '#1e293b',
    accentColor: '#9333ea',
    bgColor: 'bg-purple-200',
    textColorClass: 'text-purple-900',
    icon: '🔑'
  },
  'hydra': {
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    textColor: '#1e293b',
    accentColor: '#9333ea',
    bgColor: 'bg-purple-100',
    textColorClass: 'text-purple-800',
    icon: '🐉'
  },
  'john': {
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    textColor: '#1e293b',
    accentColor: '#16a34a',
    bgColor: 'bg-green-100',
    textColorClass: 'text-green-800',
    icon: '🔨'
  },
  'john-the-ripper': {
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    textColor: '#1e293b',
    accentColor: '#16a34a',
    bgColor: 'bg-green-100',
    textColorClass: 'text-green-800',
    icon: '🔨'
  },
  'metasploit': {
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    textColor: '#1e293b',
    accentColor: '#dc2626',
    bgColor: 'bg-red-100',
    textColorClass: 'text-red-800',
    icon: '💣'
  },
  'netcat': {
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    textColor: '#1e293b',
    accentColor: '#6b7280',
    bgColor: 'bg-gray-100',
    textColorClass: 'text-gray-800',
    icon: '🌐'
  },
  'set': {
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    textColor: '#1e293b',
    accentColor: '#ea580c',
    bgColor: 'bg-orange-200',
    textColorClass: 'text-orange-900',
    icon: '🎭'
  },
  'sqlmap': {
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    textColor: '#1e293b',
    accentColor: '#6366f1',
    bgColor: 'bg-indigo-100',
    textColorClass: 'text-indigo-800',
    icon: '🗄️'
  },

  // Cloud Security
  'aws-cli': {
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    textColor: '#1e293b',
    accentColor: '#1d4ed8',
    bgColor: 'bg-blue-200',
    textColorClass: 'text-blue-800',
    icon: '☁️'
  },
  'pacu': {
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    textColor: '#1e293b',
    accentColor: '#0284c7',
    bgColor: 'bg-sky-300',
    textColorClass: 'text-sky-900',
    icon: '🦜'
  },

  // SOC
  'cron': {
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    textColor: '#1e293b',
    accentColor: '#6b7280',
    bgColor: 'bg-gray-100',
    textColorClass: 'text-gray-800',
    icon: '⏰'
  },
  'htop': {
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    textColor: '#1e293b',
    accentColor: '#16a34a',
    bgColor: 'bg-green-200',
    textColorClass: 'text-green-900',
    icon: '📊'
  },
  'snort': {
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    textColor: '#1e293b',
    accentColor: '#1d4ed8',
    bgColor: 'bg-blue-300',
    textColorClass: 'text-blue-900',
    icon: '🐍'
  },
  'wireshark': {
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    textColor: '#1e293b',
    accentColor: '#0891b2',
    bgColor: 'bg-cyan-100',
    textColorClass: 'text-cyan-800',
    icon: '🦈'
  },

  // Active Directory
  'enum4linux': {
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    textColor: '#1e293b',
    accentColor: '#9333ea',
    bgColor: 'bg-purple-100',
    textColorClass: 'text-purple-800',
    icon: '🪟'
  }
};

export function getToolTheme(toolName: string, frontmatterData?: Record<string, string>): ToolTheme {
  // If frontmatter has theme data, use it
  if (frontmatterData?.bgColor) {
    const colorKey = frontmatterData.bgColor.replace('bg-', '').replace('-100', '').replace('-200', '').replace('-300', '').replace('-400', '');
    const colorInfo = colorMap[colorKey] || colorMap['gray'];
    
    return {
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      textColor: '#1e293b',
      accentColor: colorInfo.accentColor,
      bgColor: frontmatterData.bgColor,
      textColorClass: frontmatterData.textColor || colorInfo.textColor,
      icon: frontmatterData.icon || '🔧'
    };
  }

  // Fallback to predefined themes
  const normalizedName = toolName.toLowerCase().replace(/[^a-z0-9-]/g, '');
  
  // Try exact match first
  if (fallbackThemes[normalizedName]) {
    return fallbackThemes[normalizedName];
  }
  
  // Try partial matches
  for (const [key, theme] of Object.entries(fallbackThemes)) {
    if (normalizedName.includes(key) || key.includes(normalizedName)) {
      return theme;
    }
  }
  
  // Default theme
  return {
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    textColor: '#1e293b',
    accentColor: '#6b7280',
    bgColor: 'bg-gray-100',
    textColorClass: 'text-gray-800',
    icon: '🔧'
  };
} 