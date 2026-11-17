export interface System {
  id: string;
  title: string;
  problem: string;
  built: string;
  stack: string[];
  status: string;
  link?: { label: string; href: string };
  image?: string;
}

export const systems: System[] = [
  {
    id: '01',
    title: 'SignalCut — an ad-creative engine for DTC brands',
    problem:
      'DTC brands burn through ad creative fast. Every product needs fresh vertical video, and producing it by hand does not scale.',
    built:
      'An automated pipeline: a product photo goes in, and a finished vertical ad comes out — script, AI voice, music and render, no manual editing. I built it as the engine for an AI UGC service, so the product and its own marketing machine live in one system.',
    stack: ['TypeScript', 'Remotion', 'Kokoro TTS', 'faster-whisper', 'ACE-Step'],
    status: 'Live — open source',
    link: { label: 'github.com/IrrhammCode/signalcut', href: 'https://github.com/IrrhammCode/signalcut' },
    image: '/projects/signalcut.png',
  },
  {
    id: '02',
    title: 'Social listening for a city tourism office',
    problem:
      "Bandung's tourism office needed to hear what the public was actually saying — across thousands of posts, not anecdotes.",
    built:
      'A scraping and sentiment-analysis pipeline over tourism data, built during my internship at Dinas Kebudayaan dan Pariwisata Kota Bandung — alongside internal web systems, responsive public-service interfaces and automated record synchronisation.',
    stack: ['Python', 'Web scraping', 'Sentiment analysis', 'Relational databases'],
    status: 'Internship completed — highest grade: Sangat Baik',
  },
  {
    id: '03',
    title: 'The outbound lab — my GTM training stack',
    problem:
      'Most marketing work is manual glue: research in one tab, data in a spreadsheet, CRM in a third. GTM engineering replaces that with one wired system.',
    built:
      'The stack I train on daily: define the ICP, source accounts in Apollo, enrich them in Clay, run the pipeline in HubSpot, automate the glue with n8n, and measure everything with UTMs and GA4. This is the exact workflow GTM teams hire for — I am building reps on it now.',
    stack: ['Clay', 'Apollo', 'HubSpot', 'n8n', 'GA4'],
    status: 'In training — live accounts, daily reps',
  },
  {
    id: '04',
    title: 'Agents that win hackathons',
    problem:
      'Four international hackathons, four agent and onchain builds — each one a lesson in shipping a working system under deadline, with a story judges can repeat.',
    built:
      'Agent-7715 & ChainLens (MetaMask Dev Cook-off), WatcherForte (Forte Hacks), StorySeal (Surreal World Assets) and a Grand Winner build at Arbitrum APAC. The pattern I took from all four: the demo is the product, and the narrative is the distribution.',
    stack: ['AI agents', 'Onchain protocols', 'Rapid prototyping'],
    status: '4× international winner',
    link: { label: 'github.com/IrrhammCode', href: 'https://github.com/IrrhammCode' },
  },
];

export const processSteps = [
  {
    id: '01',
    title: 'Define the ICP',
    text: 'Who exactly buys, what do they struggle with, and what signal says they are ready now? Everything downstream depends on this answer.',
  },
  {
    id: '02',
    title: 'Build the list',
    text: 'Source accounts and contacts, then enrich them in Clay and Apollo until every row is reachable, relevant and scored.',
  },
  {
    id: '03',
    title: 'Wire the system',
    text: 'CRM pipeline, outbound sequences and n8n automation — the machine runs without manual copy-paste between tools.',
  },
  {
    id: '04',
    title: 'Measure & iterate',
    text: 'UTMs, GA4 and reply data feed the next round. What converts gets scaled; what does not pay back gets killed.',
  },
];

export const wins = [
  { event: 'Forte Hacks · Flow', result: 'Triple Track Winner', work: 'WatcherForte', year: '2025' },
  { event: 'Arbitrum APAC', result: 'Grand Winner', work: 'Onchain agent build', year: '2025' },
  { event: 'Surreal World Assets', result: 'GenAI IP Registration Winner', work: 'StorySeal', year: '2025' },
  { event: 'MetaMask Dev Cook-off', result: 'Best Feedback', work: 'Agent-7715 & ChainLens', year: '2025' },
  { event: 'Disbudpar Kota Bandung', result: 'Sangat Baik — highest internship grade', work: 'Developer Intern', year: '2026' },
];

export const timeline = [
  { role: 'Creator', org: 'SignalCut', period: '2025 — Present', note: 'AI pipeline that turns product photos into vertical ad videos for DTC brands.' },
  { role: 'Developer Intern', org: 'Dinas Kebudayaan dan Pariwisata Kota Bandung', period: 'Jun — Aug 2026', note: 'Internal web systems, scraping and sentiment analysis. Completed with the highest grade, Sangat Baik.' },
  { role: 'Backend Developer', org: 'Morvis Dev · Freelance', period: '2025', note: 'REST APIs, database optimisation, authentication and webhooks for client projects.' },
  { role: 'Advocate', org: 'HackQuest', period: '2025', note: 'Community advocacy for Web3 developer education.' },
];
