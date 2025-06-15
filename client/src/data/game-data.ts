export interface Festival {
  name: string;
  description: string;
  frequency: string;
  duration: string;
  icon: string;
  color: string;
}

export interface Career {
  title: string;
  description: string;
  requirements: { stat: string; value: number }[];
  salary: string;
  icon: string;
  color: string;
}

export interface Teacher {
  name: string;
  initials: string;
  subject: string;
  level: string;
  specialty: string;
  salary: string;
  color: string;
}

export interface SpecialClass {
  name: string;
  description: string;
  duration: string;
  prerequisites: string;
  statBoost: string;
  icon: string;
  color: string;
}

export interface StudentType {
  name: string;
  description: string;
  traits: string[];
  icon: string;
  color: string;
}

export interface Club {
  name: string;
  description: string;
  requirements: string[];
  benefits: string[];
  icon: string;
  color: string;
}

export const festivals: Festival[] = [
  {
    name: "Sports Festival",
    description: "Annual sports competition featuring various athletic events.",
    frequency: "Yearly",
    duration: "3 days",
    icon: "fas fa-trophy",
    color: "purple"
  },
  {
    name: "Cultural Festival",
    description: "Celebration of arts, music, and student creativity.",
    frequency: "Yearly",
    duration: "2 days",
    icon: "fas fa-heart",
    color: "pink"
  },
  {
    name: "Science Fair",
    description: "Students showcase their scientific projects and experiments.",
    frequency: "Bi-yearly",
    duration: "1 day",
    icon: "fas fa-flask",
    color: "blue"
  },
  {
    name: "Music Concert",
    description: "Students perform musical pieces for the school community.",
    frequency: "Quarterly",
    duration: "1 evening",
    icon: "fas fa-music",
    color: "yellow"
  },
  {
    name: "Art Exhibition",
    description: "Display of student artwork and creative projects.",
    frequency: "Bi-yearly",
    duration: "1 week",
    icon: "fas fa-palette",
    color: "purple"
  },
  {
    name: "Academic Competition",
    description: "Inter-school academic contests and quiz competitions.",
    frequency: "Yearly",
    duration: "2 days",
    icon: "fas fa-brain",
    color: "green"
  }
];

export const careers: Career[] = [
  {
    title: "Academic Researcher",
    description: "Conduct research in various academic fields and contribute to scientific knowledge.",
    requirements: [
      { stat: "Intelligence", value: 80 },
      { stat: "Focus", value: 70 }
    ],
    salary: "$45,000 - $80,000",
    icon: "fas fa-user-tie",
    color: "green"
  },
  {
    title: "Professional Athlete",
    description: "Compete at the highest levels in sports and athletics.",
    requirements: [
      { stat: "Athletics", value: 90 },
      { stat: "Stamina", value: 85 }
    ],
    salary: "$30,000 - $150,000+",
    icon: "fas fa-running",
    color: "red"
  },
  {
    title: "Artist",
    description: "Create beautiful artworks and express creativity professionally.",
    requirements: [
      { stat: "Creativity", value: 85 },
      { stat: "Technique", value: 75 }
    ],
    salary: "$25,000 - $100,000+",
    icon: "fas fa-paint-brush",
    color: "purple"
  },
  {
    title: "Software Developer",
    description: "Design and build software applications and systems.",
    requirements: [
      { stat: "Logic", value: 85 },
      { stat: "Focus", value: 80 }
    ],
    salary: "$60,000 - $120,000+",
    icon: "fas fa-code",
    color: "indigo"
  },
  {
    title: "Teacher",
    description: "Educate and inspire the next generation of students.",
    requirements: [
      { stat: "Knowledge", value: 75 },
      { stat: "Patience", value: 80 }
    ],
    salary: "$40,000 - $65,000",
    icon: "fas fa-chalkboard-teacher",
    color: "blue"
  },
  {
    title: "Business Executive",
    description: "Lead companies and make important business decisions.",
    requirements: [
      { stat: "Leadership", value: 85 },
      { stat: "Charisma", value: 80 }
    ],
    salary: "$70,000 - $200,000+",
    icon: "fas fa-briefcase",
    color: "orange"
  }
];

export const teachers: Teacher[] = [
  {
    name: "Peaches Orchard",
    initials: "PO",
    subject: "Basic Education",
    level: "191",
    specialty: "Starting Teacher",
    salary: "$70,000",
    color: "green"
  },
  {
    name: "Miles Munn",
    initials: "MM",
    subject: "General Studies",
    level: "202",
    specialty: "Y2 M2 W1",
    salary: "$75,000",
    color: "blue"
  },
  {
    name: "Ling Lyric",
    initials: "LL",
    subject: "Music & Arts",
    level: "265",
    specialty: "Y2 M2 W1",
    salary: "$75,000",
    color: "purple"
  },
  {
    name: "Athena Sage",
    initials: "AS",
    subject: "Philosophy",
    level: "240",
    specialty: "Y2 M2 W1",
    salary: "$75,000",
    color: "indigo"
  },
  {
    name: "Cole Anderson",
    initials: "CA",
    subject: "Advanced Studies",
    level: "340",
    specialty: "Y3 M1 W4",
    salary: "$80,000",
    color: "blue"
  },
  {
    name: "Rosie Underwood",
    initials: "RU",
    subject: "Environmental Studies",
    level: "365",
    specialty: "Water Pump Lv 3",
    salary: "$90,000",
    color: "green"
  },
  {
    name: "Jabb Walker",
    initials: "JW",
    subject: "Maintenance",
    level: "365",
    specialty: "Incinerator Lv 3",
    salary: "$95,000",
    color: "orange"
  },
  {
    name: "Draco Brown",
    initials: "DB",
    subject: "Physical Education",
    level: "390",
    specialty: "Track Lv 3",
    salary: "$100,000",
    color: "red"
  },
  {
    name: "Basil Boggs",
    initials: "BB",
    subject: "Health Sciences",
    level: "390",
    specialty: "Nurse's Rm Lv 3",
    salary: "$105,000",
    color: "pink"
  },
  {
    name: "Victor Head",
    initials: "VH",
    subject: "Business Studies",
    level: "440",
    specialty: "Vending Rm Lv 3",
    salary: "$105,000",
    color: "yellow"
  },
  {
    name: "Cody Rizzo",
    initials: "CR",
    subject: "Social Studies",
    level: "490",
    specialty: "Social Studies Prep Rm Lv 3",
    salary: "$120,000",
    color: "blue"
  },
  {
    name: "Tea Chai",
    initials: "TC",
    subject: "Physical Training",
    level: "515",
    specialty: "Gym Lv 3",
    salary: "$125,000",
    color: "red"
  },
  {
    name: "Maxine Milady",
    initials: "MM",
    subject: "Excellence",
    level: "515",
    specialty: "Premium Teacher",
    salary: "$130,000",
    color: "purple"
  },
  {
    name: "Erea Golden",
    initials: "EG",
    subject: "Economics",
    level: "565",
    specialty: "Tiny Mart Lv 3",
    salary: "$130,000",
    color: "yellow"
  },
  {
    name: "Vlad Sputin",
    initials: "VS",
    subject: "Security Studies",
    level: "515",
    specialty: "Security Rm Lv 3",
    salary: "$135,000",
    color: "indigo"
  },
  {
    name: "James Gold",
    initials: "JG",
    subject: "Calligraphy",
    level: "640",
    specialty: "Handwriting Rm Lv 3",
    salary: "$150,000",
    color: "yellow"
  },
  {
    name: "Alistar Devall",
    initials: "AD",
    subject: "General Excellence",
    level: "640",
    specialty: "Misc Room Lv 3",
    salary: "$160,000",
    color: "purple"
  },
  {
    name: "Vinny Vancil",
    initials: "VV",
    subject: "Archery",
    level: "640",
    specialty: "Archery Range Lv 3",
    salary: "$165,000",
    color: "green"
  },
  {
    name: "Mattchy Rider",
    initials: "MR",
    subject: "Table Tennis",
    level: "665",
    specialty: "Ping Pong Tbl Lv 3",
    salary: "$155,000",
    color: "orange"
  },
  {
    name: "Harley Raven",
    initials: "HR",
    subject: "Leadership",
    level: "740",
    specialty: "Council Rm Lv 3",
    salary: "$190,000",
    color: "indigo"
  },
  {
    name: "Darle Nimble",
    initials: "DN",
    subject: "Media Studies",
    level: "765",
    specialty: "AV Room Lv 3",
    salary: "$180,000",
    color: "blue"
  },
  {
    name: "Mick Tesla",
    initials: "MT",
    subject: "Aquatics",
    level: "765",
    specialty: "Pool Lv 3",
    salary: "$200,000",
    color: "blue"
  },
  {
    name: "Letta Princess Ham",
    initials: "LP",
    subject: "Culinary Arts",
    level: "765",
    specialty: "Lunchroom Lv 3",
    salary: "$210,000",
    color: "pink"
  },
  {
    name: "Bea Scriber",
    initials: "BS",
    subject: "Fine Arts",
    level: "865",
    specialty: "Mini Art Museum Lv 3",
    salary: "$240,000",
    color: "purple"
  },
  {
    name: "King Ackbar",
    initials: "KA",
    subject: "Technology",
    level: "865",
    specialty: "CAI Rm Lv 3",
    salary: "$250,000",
    color: "blue"
  },
  {
    name: "Wrestler Masked",
    initials: "WM",
    subject: "Athletics",
    level: "890",
    specialty: "Baseball Field Lv 3",
    salary: "$260,000",
    color: "red"
  },
  {
    name: "Grizzly Bearington",
    initials: "GB",
    subject: "Engineering",
    level: "890",
    specialty: "Ironworks Lab Lv 3",
    salary: "$270,000",
    color: "orange"
  },
  {
    name: "Z Chimpan",
    initials: "ZC",
    subject: "Photography",
    level: "990",
    specialty: "Photo Studio Lv 3",
    salary: "$280,000",
    color: "purple"
  }
];

export const specialClasses: SpecialClass[] = [
  {
    name: "Advanced Programming",
    description: "Learn advanced programming concepts and software development.",
    duration: "2 semesters",
    prerequisites: "Basic Programming",
    statBoost: "+15 Logic",
    icon: "fas fa-laptop-code",
    color: "indigo"
  },
  {
    name: "Digital Art & Design",
    description: "Master digital art techniques and graphic design principles.",
    duration: "1 semester",
    prerequisites: "Basic Art",
    statBoost: "+12 Creativity",
    icon: "fas fa-palette",
    color: "pink"
  },
  {
    name: "Environmental Science",
    description: "Study ecosystems, conservation, and environmental protection.",
    duration: "1 semester",
    prerequisites: "Biology, Chemistry",
    statBoost: "+10 Knowledge",
    icon: "fas fa-leaf",
    color: "green"
  },
  {
    name: "Drama & Performance",
    description: "Develop acting skills and stage performance techniques.",
    duration: "1 semester",
    prerequisites: "None",
    statBoost: "+8 Charisma",
    icon: "fas fa-theater-masks",
    color: "orange"
  },
  {
    name: "Advanced Athletics",
    description: "Elite athletic training and sports performance optimization.",
    duration: "2 semesters",
    prerequisites: "Physical Education",
    statBoost: "+20 Athletics",
    icon: "fas fa-dumbbell",
    color: "red"
  },
  {
    name: "Robotics Engineering",
    description: "Build and program robots for various applications.",
    duration: "2 semesters",
    prerequisites: "Physics, Mathematics",
    statBoost: "+18 Engineering",
    icon: "fas fa-robot",
    color: "blue"
  }
];

export const studentTypes: StudentType[] = [
  {
    name: "Academic Star",
    description: "High-achieving students who excel in academic subjects.",
    traits: ["High Intelligence", "Strong Focus"],
    icon: "fas fa-user",
    color: "blue"
  },
  {
    name: "Athletic Champion",
    description: "Natural athletes who dominate in sports and physical activities.",
    traits: ["High Athletics", "Strong Stamina"],
    icon: "fas fa-running",
    color: "red"
  },
  {
    name: "Creative Genius",
    description: "Artistic students with exceptional creative abilities.",
    traits: ["High Creativity", "Artistic Vision"],
    icon: "fas fa-palette",
    color: "purple"
  },
  {
    name: "Social Leader",
    description: "Charismatic students who excel in leadership and social situations.",
    traits: ["High Charisma", "Leadership"],
    icon: "fas fa-users",
    color: "green"
  }
];

export const clubs: Club[] = [
  {
    name: "Science Club",
    description: "Explore scientific concepts through experiments and research projects.",
    requirements: ["Science Room"],
    benefits: ["+5 Intelligence"],
    icon: "fas fa-flask",
    color: "blue"
  },
  {
    name: "Basketball Club",
    description: "Train and compete in basketball tournaments.",
    requirements: ["Basketball Court"],
    benefits: ["+8 Athletics"],
    icon: "fas fa-basketball-ball",
    color: "red"
  },
  {
    name: "Art Club",
    description: "Express creativity through various artistic mediums.",
    requirements: ["Art Room"],
    benefits: ["+6 Creativity"],
    icon: "fas fa-paint-brush",
    color: "purple"
  },
  {
    name: "Music Club",
    description: "Learn instruments and perform in school concerts.",
    requirements: ["Music Room"],
    benefits: ["+4 Charisma"],
    icon: "fas fa-music",
    color: "yellow"
  },
  {
    name: "Computer Club",
    description: "Learn programming and computer skills.",
    requirements: ["Computer Lab"],
    benefits: ["+7 Logic"],
    icon: "fas fa-laptop",
    color: "indigo"
  },
  {
    name: "Literature Club",
    description: "Read and discuss classic and contemporary literature.",
    requirements: ["Library"],
    benefits: ["+5 Knowledge"],
    icon: "fas fa-book",
    color: "green"
  }
];
