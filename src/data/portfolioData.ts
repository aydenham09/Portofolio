export interface Project {
  id: string;
  name: string;
  description: string;
  tags: string[];
  link: string;
  badge?: string;
  icon: string;
  image?: string;
  media?: 'shot' | 'logo';
}

export const projects: Project[] = [
  {
    id: 'signalcut',
    name: 'SignalCut',
    description: 'AI pipeline that turns product photos into ready-to-post vertical ad videos (script → voice → render) for DTC brands — the engine behind my AI UGC offer for foreign sellers.',
    tags: ['AI Video', 'MarTech', 'Automation'],
    link: 'https://github.com/IrrhammCode/signalcut',
    badge: 'Live Product',
    icon: 'bot',
    image: '/projects/signalcut.png',
    media: 'shot'
  },
  {
    id: 'watcherforte',
    name: 'WatcherForte',
    description: 'Automated NFT/token monitoring platform on Flow blockchain, utilizing Forte\'s scheduled transactions and Find Labs API.',
    tags: ['Flow', 'Cadence', 'Blockchain'],
    link: 'https://github.com/IrrhammCode/WatcherForte',
    badge: '3x Winner',
    icon: 'eye'
  },
  {
    id: 'stylusarena',
    name: 'StylusArena',
    description: 'Competitive on-chain gaming platform built on Arbitrum Stylus with high-performance Rust smart contracts.',
    tags: ['Arbitrum Stylus', 'Rust', 'Web3 Gaming'],
    link: 'https://github.com/IrrhammCode/StylusArena',
    badge: 'Winner',
    icon: 'gamepad'
  },
  {
    id: 'storyseal',
    name: 'StorySeal',
    description: 'Decentralized AI-driven platform for Intellectual Property (IP) registration and digital asset preservation.',
    tags: ['TypeScript', 'Smart Contracts', 'GenAI'],
    link: 'https://github.com/IrrhammCode/StorySeal',
    badge: 'Winner',
    icon: 'stamp'
  },
  {
    id: 'agent7715',
    name: 'Agent-7715',
    description: 'Autonomous AI Agent leveraging MetaMask\'s Advanced Permissions system for secure wallet interactions.',
    tags: ['AI Agent', 'MetaMask', 'TypeScript'],
    link: 'https://github.com/IrrhammCode/Agent-7715',
    badge: 'Winner',
    icon: 'bot'
  },
  {
    id: 'chainlens',
    name: 'ChainLens',
    description: 'Multi-chain analytics platform combining Tatum API on-chain data with Gemini AI for hallucination-free portfolio summaries.',
    tags: ['Gemini AI', 'Tatum API', 'JavaScript'],
    link: 'https://github.com/IrrhammCode/chainlens',
    badge: 'Winner',
    icon: 'search-code'
  },
  {
    id: 'tatum-chainlens-ai',
    name: 'tatum-chainlens-ai',
    description: 'Backend integration of Tatum services and AI layer for the ChainLens analytics platform.',
    tags: ['JavaScript', 'Backend', 'API'],
    link: 'https://github.com/IrrhammCode/tatum-chainlens-ai',
    icon: 'link'
  },
  {
    id: 'moodsync',
    name: 'MoodSync Jukebox',
    description: 'Intelligent application that curates and adjusts audio playback dynamically based on the user\'s current mood.',
    tags: ['TypeScript', 'Audio', 'App'],
    link: 'https://github.com/IrrhammCode/moodsync-jukebox',
    icon: 'music'
  },
  {
    id: 'bloom',
    name: 'Bloom Family Budget',
    description: 'Smart financial management application specifically designed to streamline home renovation planning and family budgeting.',
    tags: ['TypeScript', 'Fintech', 'Mobile'],
    link: 'https://github.com/IrrhammCode/Bloom-Family-Budget',
    icon: 'wallet'
  },
  {
    id: 'aegis',
    name: 'AegisAgent',
    description: 'Autonomous cybersecurity pipeline utilizing AI technology. Features an intelligent backend agent and a React frontend.',
    tags: ['TypeScript', 'Cybersecurity', 'AI Pipeline'],
    link: 'https://github.com/IrrhammCode/AegisAgent',
    badge: 'Hackathon',
    icon: 'shield'
  },
  {
    id: 'flowtalos',
    name: 'FlowTalos',
    description: 'Smart contract implementations using Cadence programming language for the Flow blockchain ecosystem.',
    tags: ['Cadence', 'Flow Blockchain', 'Smart Contracts'],
    link: 'https://github.com/IrrhammCode/FlowTalos',
    icon: 'waves'
  },
  {
    id: 'dealwhisperer',
    name: 'DealWhisperer',
    description: 'Experimental application repository (currently in development phase).',
    tags: ['Development'],
    link: 'https://github.com/IrrhammCode/DealWhisperer',
    icon: 'message-square'
  },
  {
    id: 'autonome',
    name: 'AUTONOME Yield Subnet',
    description: 'Dedicated subnet network for optimization and automation of yield management in DeFi protocols.',
    tags: ['DeFi', 'Subnet', 'Web3'],
    link: 'https://github.com/IrrhammCode/AUTONOME-Yield-Subnet',
    icon: 'network'
  },
  {
    id: 'commit',
    name: 'CommitTogether',
    description: 'Development collaboration tool to help teams synchronize commits and streamline software development workflows.',
    tags: ['TypeScript', 'DevTools'],
    link: 'https://github.com/IrrhammCode/CommitTogether',
    icon: 'users'
  },
  {
    id: 'veritas',
    name: 'VeritasDAO',
    description: 'Decentralized Autonomous Organization (DAO) governance system with on-chain voting features.',
    tags: ['JavaScript', 'DAO', 'Web3'],
    link: 'https://github.com/IrrhammCode/VeritasDAO',
    icon: 'gavel'
  },
  {
    id: 'laundry',
    name: 'Laundry-Online',
    description: 'Online booking management system for laundry services featuring order status tracking.',
    tags: ['JavaScript', 'Web App', 'System'],
    link: 'https://github.com/IrrhammCode/Laundry-Online',
    icon: 'shirt'
  },
  {
    id: 'portfolio',
    name: 'irhamhamzah.dev',
    description: 'Source code for this portfolio website. Designed and built with React, Vite and Tailwind CSS, deployed on Vercel.',
    tags: ['React', 'Vite', 'Tailwind'],
    link: 'https://github.com/aydenham09/Portofolio',
    icon: 'code'
  }
];
