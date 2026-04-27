const products = [

  // ── RC TOYS ─────────────────────────────────────────────
  {
    id: "rc-magic-car",
    name: "RC Magic Car",
    price: "RS 3,900",
    category: "rc",
    images: ["rc-magic-car.jpg"],
    badge: null
  },
  {
    id: "rc-flying-car",
    name: "RC Flying Car",
    price: "RS 5,500",
    category: "rc",
    images: ["rc-flying-car.jpg"],
    badge: "Best Seller"
  },
  {
    id: "rc-spray-stunt-car",
    name: "RC Spray Stunt Car",
    price: "RS 4,600",
    category: "rc",
    images: ["rc-spray-stunt-car.jpg"],
    badge: null
  },
  {
    id: "rc-car-speed",
    name: "RC Car Speed",
    price: "RS 5,000",
    category: "rc",
    images: ["rc-car-speed.jpg"],
    badge: null
  },
  {
    id: "rc-fighter-jet",
    name: "RC Fighter Jet",
    price: "RS 3,650",
    category: "rc",
    images: ["rc-fighter-jet.jpg"],
    badge: null
  },
  {
    id: "rc-smart-robot",
    name: "RC Smart Robot",
    price: "RS 4,595",
    category: "rc",
    images: ["rc-smart-robot.jpg"],
    badge: "Popular Gift"
  },
  {
    id: "rc-lamborghini-sian",
    name: "RC Lamborghini Sian",
    price: "RS 7,000",
    category: "rc",
    images: ["rc-lamborghini-sian.jpg", "rc-lamborghini-sian-2.jpg"],
    badge: null
  },
  {
    id: "magic-induction-car",
    name: "Magic Induction Car",
    price: "RS 3,500",
    category: "rc",
    images: ["magic-induction-car.jpg"],
    badge: null
  },
  {
    id: "simulated-driving-car",
    name: "Simulated Driving Car",
    price: "RS 4,800",
    category: "rc",
    images: ["simulated-driving-car.jpg", "simulated-driving-car-2.jpg", "simulated-driving-car-3.jpg"],
    badge: null
  },

  // ── EDUCATIONAL ─────────────────────────────────────────
  {
    id: "blocks-lego",
    name: "Blocks Lego",
    price: "RS 2,780",
    category: "edu",
    images: ["blocks-lego.jpg"],
    badge: null
  },
  {
    id: "die-cast-car",
    name: "Die-Cast Car",
    price: "RS 3,880",
    category: "edu",
    images: ["die-cast-car.jpg"],
    badge: null
  },
  {
    id: "edu-projector",
    name: "Edu Projector",
    price: "RS 2,200",
    category: "edu",
    images: ["edu-projector.jpg"],
    badge: null
  },
  {
    id: "edu-laptop",
    name: "Edu Laptop",
    price: "RS 3,700",
    category: "edu",
    images: ["edu-laptop.jpg"],
    badge: null
  },
  {
    id: "edu-learning-machine",
    name: "Edu Learning Machine",
    price: "RS 2,080",
    category: "edu",
    images: ["edu-learning-machine.jpg"],
    badge: null
  },
  {
    id: "magnetic-drawing-board",
    name: "Magnetic Drawing Board",
    price: "RS 2,500",
    category: "edu",
    images: ["magnetic-drawing-board.jpg", "magnetic-drawing-board-2.jpg"],
    badge: null
  },
  {
    id: "magnetic-train",
    name: "Magnetic Train",
    price: "RS 6,500",
    category: "edu",
    images: ["magnetic-train.jpg", "magnetic-train-2.jpg"],
    badge: null
  },

  // ── FUN & PLAY ───────────────────────────────────────────
  {
    id: "4pcs-catapult-car",
    name: "4-Pcs Catapult Car",
    price: "RS 1,250",
    category: "fun",
    images: ["4pcs-catapult-car.jpg"],
    badge: "Budget Pick"
  },
  {
    id: "8pcs-catapult-car",
    name: "8-Pcs Catapult Car",
    price: "RS 2,500",
    category: "fun",
    images: ["8pcs-catapult-car.jpg"],
    badge: null
  },
  {
    id: "water-gel-blaster",
    name: "Water Gel Blaster",
    price: "RS 3,500",
    category: "fun",
    images: ["water-gel-blaster.jpg"],
    badge: null
  },
  {
    id: "16-inch-lcd-panel",
    name: "16 Inch LCD Panel",
    price: "RS 1,000",
    category: "fun",
    images: ["16-inch-lcd-panel.jpg"],
    badge: null
  },
  {
    id: "dolphin-concert",
    name: "Dolphin Concert",
    price: "RS 2,000",
    category: "fun",
    images: ["dolphin-concert.jpg"],
    badge: null
  },
  {
    id: "bubble-gun",
    name: "Bubble Gun",
    price: "RS 1,550",
    category: "fun",
    images: ["bubble-gun.jpg"],
    badge: null
  },
  {
    id: "white-husky-dog",
    name: "White Husky Dog",
    price: "RS 4,999",
    category: "fun",
    images: ["dog-pet.jpg", "dog-pet-2.jpg", "dog-pet-3.jpg"],
    badge: null
  },
  {
    id: "gun-launcher",
    name: "Gun Launcher",
    price: "RS 4,000",
    category: "fun",
    images: ["gun-launcher.jpg", "gun-launcher-2.jpg"],
    badge: null
  },

  // ── CREATIVE ────────────────────────────────────────────
  {
    id: "dancing-monkey",
    name: "Dancing Monkey",
    price: "RS 1,695",
    category: "creative",
    images: ["dancing-monkey.jpg"],
    badge: null
  },
  {
    id: "dancing-squid",
    name: "Dancing Squid",
    price: "RS 2,000",
    category: "creative",
    images: ["dancing-squid.jpg"],
    badge: null
  },
  {
    id: "dancing-cactus",
    name: "Dancing Cactus",
    price: "RS 1,800",
    category: "creative",
    images: ["dancing-cactus.jpg"],
    badge: "New!"
  },
  {
    id: "dream-kitchen-set",
    name: "Dream Kitchen Set",
    price: "RS 4,000",
    category: "creative",
    images: ["dream-kitchen-set.jpg"],
    badge: "Popular Gift"
  },
  {
    id: "diy-beads-set",
    name: "DIY Beads Set",
    price: "RS 1,300",
    category: "creative",
    images: ["diy-beads-set.jpg"],
    badge: null
  },
  {
    id: "diy-beads-crystal",
    name: "DIY Beads Crystal",
    price: "RS 1,300",
    category: "creative",
    images: ["diy-beads-crystal.jpg"],
    badge: null
  },
  {
    id: "11-inch-lcd-panel",
    name: "11 Inch LCD Panel",
    price: "RS 500",
    category: "creative",
    images: ["11-inch-lcd-panel.jpg"],
    badge: "Budget Pick"
  },
  {
    id: "panda-lamp",
    name: "Panda Lamp",
    price: "RS 2,500",
    category: "creative",
    images: ["panda-lamp.jpg", "panda-lamp-2.jpg", "panda-lamp-3.jpg"],
    badge: null
  },

];
