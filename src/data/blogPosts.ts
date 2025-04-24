
export interface BlogPost {
  id: number;
  title: string;
  content: string;
  image: string;
  author: {
    name: string;
    email: string;
    avatar: string;
  };
  date: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Web Development",
    content: "As we venture into 2025, the landscape of web development continues to evolve at an unprecedented pace. From AI-powered development tools to the rise of new frameworks, developers must stay ahead of the curve to remain competitive in this dynamic field...",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    author: {
      name: "Sarah Chen",
      email: "sarah.chen@techblog.com",
      avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    date: "April 24, 2025"
  },
  {
    id: 2,
    title: "Sustainable Living in Urban Spaces",
    content: "Urban living doesn't mean compromising on sustainability. In this article, we explore innovative ways to create eco-friendly living spaces in the heart of busy cities, from vertical gardens to energy-efficient solutions...",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    author: {
      name: "Marcus Rodriguez",
      email: "m.rodriguez@ecoblog.com",
      avatar: "https://images.unsplash.com/photo-1472396961693-142e6e269027"
    },
    date: "April 23, 2025"
  },
  {
    id: 3,
    title: "The Art of Digital Photography",
    content: "Digital photography has revolutionized how we capture and share moments. Learn about the essential techniques, equipment, and post-processing tips that can elevate your photography game to the next level...",
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a",
    author: {
      name: "Emma Thompson",
      email: "emma.t@photoblog.com",
      avatar: "https://images.unsplash.com/photo-1438565434616-3ef039228b15"
    },
    date: "April 22, 2025"
  },
  {
    id: 4,
    title: "Mindfulness in the Digital Age",
    content: "In our hyperconnected world, finding moments of peace can be challenging. Discover practical mindfulness techniques that can help you maintain balance and mental clarity while navigating the digital landscape...",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    author: {
      name: "David Park",
      email: "david.p@mindfulblog.com",
      avatar: "https://images.unsplash.com/photo-1439886183900-e79ec0057170"
    },
    date: "April 21, 2025"
  },
  {
    id: 5,
    title: "The Evolution of Artificial Intelligence",
    content: "AI is no longer just a concept from science fiction. From virtual assistants to autonomous vehicles, artificial intelligence is reshaping our world. Let's explore the current state of AI and what the future holds...",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    author: {
      name: "Lisa Kumar",
      email: "lisa.k@aiblog.com",
      avatar: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1"
    },
    date: "April 20, 2025"
  }
];
