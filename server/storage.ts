import { users, dancePoses, timelineEvents, culturalElements, type User, type InsertUser, type DancePose, type InsertDancePose, type TimelineEvent, type InsertTimelineEvent, type CulturalElement, type InsertCulturalElement } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getDancePoses(): Promise<DancePose[]>;
  getDancePoseById(id: number): Promise<DancePose | undefined>;
  getDancePosesByCategory(category: string): Promise<DancePose[]>;
  createDancePose(pose: InsertDancePose): Promise<DancePose>;
  
  getTimelineEvents(): Promise<TimelineEvent[]>;
  getTimelineEventsByEra(era: string): Promise<TimelineEvent[]>;
  createTimelineEvent(event: InsertTimelineEvent): Promise<TimelineEvent>;
  
  getCulturalElements(): Promise<CulturalElement[]>;
  getCulturalElementsByType(type: string): Promise<CulturalElement[]>;
  createCulturalElement(element: InsertCulturalElement): Promise<CulturalElement>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private dancePoses: Map<number, DancePose>;
  private timelineEvents: Map<number, TimelineEvent>;
  private culturalElements: Map<number, CulturalElement>;
  private currentUserId: number;
  private currentPoseId: number;
  private currentTimelineId: number;
  private currentCulturalId: number;

  constructor() {
    this.users = new Map();
    this.dancePoses = new Map();
    this.timelineEvents = new Map();
    this.culturalElements = new Map();
    this.currentUserId = 1;
    this.currentPoseId = 1;
    this.currentTimelineId = 1;
    this.currentCulturalId = 1;
    
    this.seedData();
  }

  private seedData() {
    // Timeline Events
    const timelineData: InsertTimelineEvent[] = [
      {
        year: 1000,
        era: "past",
        title: "Origins in Temple Worship",
        description: "Bharatanatyam emerged from the sacred halls of South Indian temples, where devadasis (temple dancers) performed as offerings to the divine.",
        imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        significance: "Established the spiritual foundation and sacred geometry of classical Indian dance",
        innovations: ["Sacred mudras development", "Temple architecture integration", "Ritualistic choreography"],
        keyFigures: ["Ancient temple dancers", "Sage Bharata", "Tamil poets"]
      },
      {
        year: 1930,
        era: "past",
        title: "Revival Movement",
        description: "Rukmini Devi Arundale's revolutionary efforts to revive and refine Bharatanatyam, transforming it from temple tradition to concert stage.",
        imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        significance: "Brought respectability and artistic recognition to the dance form",
        innovations: ["Costume standardization", "Concert format development", "International exposure"],
        keyFigures: ["Rukmini Devi Arundale", "Balasaraswati", "Kamala Lachhman"]
      },
      {
        year: 2000,
        era: "present",
        title: "Global Recognition",
        description: "Bharatanatyam achieves worldwide recognition as premier classical dance form, with practitioners and academies established globally.",
        imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        significance: "Established as a global cultural ambassador for Indian heritage",
        innovations: ["International academies", "Cultural diplomacy", "Cross-cultural collaborations"],
        keyFigures: ["Alarmel Valli", "Leela Samson", "Shobana Chandrakumar"]
      },
      {
        year: 2024,
        era: "future",
        title: "Digital Heritage Platform",
        description: "Revolutionary AI-powered platform for preserving, teaching, and evolving Bharatanatyam through interactive digital experiences.",
        imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        significance: "Bridging ancient wisdom with cutting-edge technology for future generations",
        innovations: ["AI choreography assistance", "Virtual reality training", "Digital pose recognition"],
        keyFigures: ["Contemporary innovators", "Tech artists", "Cultural preservationists"]
      }
    ];

    // Dance Poses
    const poseData: InsertDancePose[] = [
      {
        name: "Namaskaram",
        description: "The traditional greeting pose, with palms joined in prayer position",
        category: "fundamental",
        poseNumber: 1,
        imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
        symbolism: "Reverence to the divine and respect for tradition",
        difficulty: 1,
        bodyParts: ["hands", "arms", "torso"],
        mudraType: "Anjali"
      },
      {
        name: "Araimandi",
        description: "The fundamental half-sitting position, foundation of all Bharatanatyam poses",
        category: "fundamental",
        poseNumber: 2,
        imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
        symbolism: "Stability and grounding in classical technique",
        difficulty: 2,
        bodyParts: ["legs", "hips", "spine"],
        mudraType: "Pataka"
      },
      {
        name: "Tribhanga",
        description: "The graceful three-bend posture representing the cosmic dance",
        category: "intermediate",
        poseNumber: 3,
        imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
        symbolism: "Divine grace and cosmic harmony",
        difficulty: 3,
        bodyParts: ["neck", "torso", "hips"],
        mudraType: "Alapadma"
      },
      {
        name: "Bharatanatyam Hasta",
        description: "Classical hand gesture expressing various emotions and stories",
        category: "fundamental",
        poseNumber: 4,
        imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
        symbolism: "Communication through divine language of hands",
        difficulty: 2,
        bodyParts: ["hands", "fingers", "wrists"],
        mudraType: "Hamsa"
      },
      {
        name: "Utplavana",
        description: "Dynamic jumping movement with precise landing in araimandi",
        category: "advanced",
        poseNumber: 5,
        imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
        symbolism: "Liberation and transcendence of earthly bounds",
        difficulty: 5,
        bodyParts: ["legs", "feet", "core"],
        mudraType: "Tripataka"
      },
      {
        name: "Chakkars",
        description: "Spinning movements that demonstrate control and grace",
        category: "advanced",
        poseNumber: 6,
        imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
        symbolism: "Cosmic cycles and eternal movement",
        difficulty: 4,
        bodyParts: ["full body", "balance", "coordination"],
        mudraType: "Kartarimukha"
      },
      {
        name: "Bhramari",
        description: "Bee-like movements with intricate footwork patterns",
        category: "intermediate",
        poseNumber: 7,
        imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
        symbolism: "Connection with nature and divine nectar",
        difficulty: 3,
        bodyParts: ["feet", "ankles", "rhythm"],
        mudraType: "Bhramara"
      },
      {
        name: "Natanam Adinar",
        description: "The iconic pose depicting Lord Shiva as the cosmic dancer",
        category: "advanced",
        poseNumber: 8,
        imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
        symbolism: "Universal creation, preservation, and destruction",
        difficulty: 5,
        bodyParts: ["full body", "expression", "spiritual"],
        mudraType: "Abhaya"
      }
    ];

    // Cultural Elements
    const culturalData: InsertCulturalElement[] = [
      {
        name: "Bharatanatyam Costume",
        type: "costume",
        description: "Traditional silk saree with intricate pleats and temple jewelry",
        origin: "South Indian temple traditions",
        significance: "Represents the divine feminine and cultural heritage",
        modernAdaptation: "Contemporary cuts while maintaining traditional essence",
        imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600"
      },
      {
        name: "Carnatic Music",
        type: "music",
        description: "Traditional South Indian classical music accompanying dance",
        origin: "Ancient Tamil and Sanskrit compositions",
        significance: "Provides rhythmic and melodic foundation for expression",
        modernAdaptation: "Fusion with contemporary instruments and compositions",
        imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600"
      },
      {
        name: "Temple Architecture",
        type: "temple",
        description: "Sacred geometric spaces where Bharatanatyam originated",
        origin: "Dravidian architectural traditions",
        significance: "Provides spatial and spiritual context for dance",
        modernAdaptation: "Contemporary stage design inspired by temple aesthetics",
        imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600"
      }
    ];

    // Seed the data
    timelineData.forEach(event => {
      const timelineEvent: TimelineEvent = {
        ...event,
        id: this.currentTimelineId++
      };
      this.timelineEvents.set(timelineEvent.id, timelineEvent);
    });

    poseData.forEach(pose => {
      const dancePose: DancePose = {
        ...pose,
        id: this.currentPoseId++,
        isActive: true
      };
      this.dancePoses.set(dancePose.id, dancePose);
    });

    culturalData.forEach(element => {
      const culturalElement: CulturalElement = {
        ...element,
        id: this.currentCulturalId++
      };
      this.culturalElements.set(culturalElement.id, culturalElement);
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getDancePoses(): Promise<DancePose[]> {
    return Array.from(this.dancePoses.values()).filter(pose => pose.isActive);
  }

  async getDancePoseById(id: number): Promise<DancePose | undefined> {
    return this.dancePoses.get(id);
  }

  async getDancePosesByCategory(category: string): Promise<DancePose[]> {
    return Array.from(this.dancePoses.values()).filter(pose => 
      pose.category === category && pose.isActive
    );
  }

  async createDancePose(insertPose: InsertDancePose): Promise<DancePose> {
    const id = this.currentPoseId++;
    const pose: DancePose = { ...insertPose, id, isActive: true };
    this.dancePoses.set(id, pose);
    return pose;
  }

  async getTimelineEvents(): Promise<TimelineEvent[]> {
    return Array.from(this.timelineEvents.values()).sort((a, b) => a.year - b.year);
  }

  async getTimelineEventsByEra(era: string): Promise<TimelineEvent[]> {
    return Array.from(this.timelineEvents.values()).filter(event => event.era === era);
  }

  async createTimelineEvent(insertEvent: InsertTimelineEvent): Promise<TimelineEvent> {
    const id = this.currentTimelineId++;
    const event: TimelineEvent = { ...insertEvent, id };
    this.timelineEvents.set(id, event);
    return event;
  }

  async getCulturalElements(): Promise<CulturalElement[]> {
    return Array.from(this.culturalElements.values());
  }

  async getCulturalElementsByType(type: string): Promise<CulturalElement[]> {
    return Array.from(this.culturalElements.values()).filter(element => element.type === type);
  }

  async createCulturalElement(insertElement: InsertCulturalElement): Promise<CulturalElement> {
    const id = this.currentCulturalId++;
    const element: CulturalElement = { ...insertElement, id };
    this.culturalElements.set(id, element);
    return element;
  }
}

export const storage = new MemStorage();
