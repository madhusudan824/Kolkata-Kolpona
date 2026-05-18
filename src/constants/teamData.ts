export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  contributions: string[];
  socials: {
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export const teamData: TeamMember[] = [
  {
    id: 'madhusudan-das',
    name: 'Madhusudan Das',
    role: 'CEO & Founder',
    image: 'https://picsum.photos/seed/madhusudan/400/400',
    bio: 'কলকাতা কল্পনার স্বপ্নদ্রষ্টা এবং নিবেদিতপ্রাণ সংগঠক। সৃজনশীল ভাবনাকে বাস্তবরূপ দিতে তিনি নিরন্তর কাজ করে চলেছেন।',
    contributions: ['Founder', 'Creative Direction', 'Audio Post-Production'],
    socials: {
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com'
    }
  },
  {
    id: 'jayanta-basu',
    name: 'Jayanta Basu',
    role: 'CEO & Founder',
    image: 'https://picsum.photos/seed/jayanta/400/400',
    bio: 'সহ-প্রতিষ্ঠাতা হিসেবে তিনি ব্র্যান্ডের মার্কেটিং এবং কৌশলগত পরিকল্পনা তদারকি করেন।',
    contributions: ['Strategy', 'Co-Founder', 'Brand Management'],
    socials: {
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 'kausitoki-dey',
    name: 'Kausitoki Dey',
    role: 'PR Management',
    image: 'https://picsum.photos/seed/kausitoki/400/400',
    bio: 'জনসংযোগ এবং প্রচারের দায়িত্বে থাকা কৌশিতকী আমাদের কাজের ব্যাপ্তি বাড়াতে মুখ্য ভূমিকা পালন করেন।',
    contributions: ['Public Relations', 'Content Strategy'],
    socials: {
      instagram: 'https://instagram.com'
    }
  },
  {
    id: 'sarindhri',
    name: 'Sarindhri',
    role: 'Voice Actor & Director',
    image: 'https://picsum.photos/seed/sarindhri/400/400',
    bio: 'একজন নিপুণ কণ্ঠশিল্পী এবং পরিচালক। চরিত্রগুলোকে রক্তমাংসের মানুষ করে তোলাই তার বিশেষত্ব।',
    contributions: ['Direction', 'Voice Acting', 'Script Editing'],
    socials: {
      instagram: 'https://instagram.com'
    }
  },
  {
    id: 'deep',
    name: 'Deep',
    role: 'Voice Actor',
    image: 'https://picsum.photos/seed/deep/400/400',
    bio: 'গভীর এবং শক্তিশালী কণ্ঠের অধিকারী দীপ আমাদের অনেক গম্ভীর চরিত্রে প্রাণ সঞ্চার করেছেন।',
    contributions: ['Voice Acting', 'Narration'],
    socials: {}
  },
  {
    id: 'indro',
    name: 'Indro',
    role: 'Voice Actor',
    image: 'https://picsum.photos/seed/indro/400/400',
    bio: 'রহস্যময় এবং থ্রিলার গল্পে ইন্দ্রের কণ্ঠের সাবলীলতা আলাদা মাত্রা যোগ করে।',
    contributions: ['Voice Acting', 'Sound Mixing'],
    socials: {}
  },
  {
    id: 'samadrita',
    name: 'Samadrita',
    role: 'Voice Actor',
    image: 'https://picsum.photos/seed/samadrita/400/400',
    bio: 'আবেগপ্রবণ এবং সূক্ষ্ম অভিনয়ের মাধ্যমে সমাদৃতা দর্শকদের মনে দাগ কাটতে ওস্তাদ।',
    contributions: ['Voice Acting', 'Creative Content'],
    socials: {}
  },
  {
    id: 'anwesha',
    name: 'Anwesha',
    role: 'Voice Actor',
    image: 'https://picsum.photos/seed/anwesha/400/400',
    bio: 'তার মোহময়ী কণ্ঠ এবং বাচনভঙ্গি আমাদের ন্যারেশন বা বর্ণনামূলক কাজে প্রাণের সঞ্চার করে।',
    contributions: ['Voice Acting', 'Storytelling'],
    socials: {}
  },
  {
    id: 'srijan',
    name: 'Srijan',
    role: 'Voice Actor',
    image: 'https://picsum.photos/seed/srijan/400/400',
    bio: 'টিমের কনিষ্ঠতম সদস্য হলেও তার অভিনয়ের গভীরতা সত্যিই প্রশংসনীয়।',
    contributions: ['Voice Acting'],
    socials: {}
  }
];
