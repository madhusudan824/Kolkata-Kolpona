export interface CastMember {
  name: string;
  role: string;
}

export interface Project {
  id: string;
  title: string;
  bengali: string;
  description: string;
  fullSynopsis: string;
  type: string;
  image: string;
  director: string;
  cast: CastMember[];
  crew: { role: string; name: string }[];
}

export const projectsData: Project[] = [
  {
    id: 'cheledhora',
    title: 'ছেলেধরা',
    bengali: 'Cheledhora',
    description: 'বাংলার ভৌতিক পরিবেশ নিয়ে আমাদের ফ্ল্যাগশিপ হরর সিরিজ। এটি একটি উচ্চমানের অডিও অভিজ্ঞতা।',
    fullSynopsis: 'ছেলেধরা একটি ভৌতিক রহস্য সিরিজ যা বাংলার অলিতে গলিতে লুকিয়ে থাকা ভয়ংকর জনশ্রুতিগুলোকে কেন্দ্র করে আবর্তিত হয়েছে। এটি কেবল একটি ভূতের গল্প নয়, এটি মানুষের অবচেতন মনের ভয় এবং সামাজিক কুসংস্কারের এক অন্ধকার প্রতিফলন।',
    type: 'পডকাস্ট সিরিজ',
    image: 'https://picsum.photos/seed/horror-kid-shadow/800/600',
    director: 'Sarindhri',
    cast: [
      { name: 'Sarindhri', role: 'Main Lead' },
      { name: 'Deep', role: 'Supporting' },
      { name: 'Indro', role: 'Antagonist' },
      { name: 'Anwesha', role: 'Narrator' },
    ],
    crew: [
      { role: 'Scriptwriter', name: 'Sarindhri' },
      { role: 'Sound Editor', name: 'Indro' },
      { role: 'Producer', name: 'Madhusudan Das' },
    ]
  },
  {
    id: 'system-fail',
    title: 'সিস্টেম ফেইল',
    bengali: 'System Fail',
    description: 'ভবিষ্যতের পটভূমিতে মানুষের আবেগ এবং কৃত্রিম বুদ্ধিমত্তার দ্বন্দ্ব নিয়ে আবর্তিত একটি থ্রিলার।',
    fullSynopsis: '২০৫০ সালের এক ধোঁয়াশাপূর্ণ কলকাতা। যেখানে এআই বা কৃত্রিম বুদ্ধিমত্তা মানুষের জীবনের প্রতিটি ক্ষেত্র নিয়ন্ত্রণ করছে। কিন্তু যখন একটি এআই সিস্টেম মানুষের আবেগ বুঝতে শুরু করে, তখন শুরু হয় এক চরম সংঘাত। "সিস্টেম ফেইল" প্রযুক্তি এবং মানবতার মধ্যকার ধূসর রেখাটিকে অন্বেষণ করে।',
    type: 'অডিও গল্প',
    image: 'https://picsum.photos/seed/cyber-glitch-dark/800/600',
    director: 'Indro',
    cast: [
      { name: 'Srijan', role: 'Lead' },
      { name: 'Samadrita', role: 'AI Voice' },
      { name: 'Sarindhri', role: 'Supporting' },
    ],
    crew: [
      { role: 'Concepts', name: 'Indro' },
      { role: 'Sound Design', name: 'Madhusudan Das' },
      { role: 'Voice Direction', name: 'Sarindhri' },
    ]
  },
  {
    id: 'ontorale',
    title: 'অন্তরালে',
    bengali: 'Ontorale',
    description: 'হারিয়ে যাওয়া স্মৃতি এবং লুকানো পারিবারিক গোপনীয়তা নিয়ে পরিচালিত একটি মনস্তাত্ত্বিক রহস্য সিরিজ।',
    fullSynopsis: 'একটি পুরানো জমিদার বাড়ি, অনেকগুলো বন্ধ দরজা এবং দশর্কদের পিছু নেওয়া এক অজানা অতীত। "অন্তরালে" আমাদের মস্তিষ্কের আড়ালে লুকিয়ে থাকা সেইসব স্মৃতি খুঁজে বের করার চেষ্টা করে যা আমরা স্বেচ্ছায় ভুলে যেতে চেয়েছিলাম। এটি একটি মনস্তাত্ত্বিক সফর যা প্রতিটি মোড়ে নতুন প্রশ্নের উদ্ভব ঘটায়।',
    type: 'ভয়েস অ্যাক্টিং প্রজেক্ট',
    image: 'https://picsum.photos/seed/mansion-mystery-shadow/800/600',
    director: 'Sarindhri',
    cast: [
      { name: 'Anwesha', role: 'Protagonist' },
      { name: 'Samadrita', role: 'Lead' },
      { name: 'Indro', role: 'Supporting' },
      { name: 'Deep', role: 'Narrator' },
    ],
    crew: [
      { role: 'Story', name: 'Madhusudan Das' },
      { role: 'Production', name: 'Sarindhri' },
      { role: 'Audio Mastery', name: 'Indro' },
    ]
  },
];
