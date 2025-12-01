export interface Product {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  features: string[];
  specifications: { label: string; value: string }[];
  brochureUrl: string;
}

export const products: Product[] = [
  {
    id: "farm-fresh-eggs",
    name: "Farm Fresh Eggs",
    category: "Eggs",
    shortDescription: "Premium organic brown eggs from free-range hens",
    longDescription: "Our farm-fresh eggs come from hens raised in spacious, hygienic environments with access to outdoor areas. Fed with premium organic feed and monitored daily for health and wellness. Each egg meets the highest quality standards for nutrition, taste, and safety.",
    image: "/src/assets/product-eggs.jpg",
    features: [
      "100% Organic Feed",
      "Free-Range Hens",
      "Daily Health Monitoring",
      "Rich in Omega-3",
      "No Hormones or Antibiotics",
      "Certified Quality"
    ],
    specifications: [
      { label: "Size", value: "Large (50-60g)" },
      { label: "Color", value: "Brown" },
      { label: "Packaging", value: "12/24/30 eggs per tray" },
      { label: "Shelf Life", value: "28 days refrigerated" },
  
    ],
    brochureUrl: "#"
  },
  {
    id: "premium-chicken",
    name: "Premium Chicken",
    category: "Poultry Meat",
    shortDescription: "Tender, juicy chicken from ethically raised birds",
    longDescription: "Our premium chickens are raised in stress-free environments with ample space and natural lighting. Fed with nutritious, hormone-free feed and given the best veterinary care. The result is tender, flavorful meat that's both healthy and delicious.",
    image: "/src/assets/product-chicken.jpg",
    features: [
      "Ethically Raised",
      "Hormone-Free",
      "Antibiotic-Free",
      "High Protein Content",
      "Tender & Juicy",
      "Halal Certified"
    ],
    specifications: [
      { label: "Weight Range", value: "1.2-2.5 kg" },
      { label: "Age", value: "42-45 days" },
      { label: "Processing", value: "Fresh/Frozen" },
      { label: "Packaging", value: "Vacuum sealed" },
 
    ],
    brochureUrl: "#"
  },
  {
    id: "organic-feed",
    name: "Organic Poultry Feed",
    category: "Feed & Nutrition",
    shortDescription: "Premium nutritious feed for healthy poultry",
    longDescription: "Specially formulated organic poultry feed made from high-quality grains, minerals, and vitamins. Designed to support optimal growth, egg production, and overall bird health. Contains no synthetic additives, pesticides, or GMO ingredients.",
    image: "/src/assets/product-feed.jpg",
    features: [
      "100% Organic Ingredients",
      "Non-GMO",
      "Rich in Protein & Minerals",
      "Supports Egg Production",
      "Enhances Immunity",
      "Digestible Formula"
    ],
    specifications: [
      { label: "Protein Content", value: "18-22%" },
      { label: "Packaging", value: "25kg/50kg bags" },
      { label: "Form", value: "Pellets/Mash" },
      { label: "Shelf Life", value: "6 months" },
      { label: "Suitable For", value: "All poultry types" },
    ],
    brochureUrl: "#"
  },
  {
    id: "poultry-equipment",
    name: "Poultry Farm Equipment",
    category: "Equipment",
    shortDescription: "Modern, hygienic equipment for efficient farming",
    longDescription: "State-of-the-art poultry farming equipment designed for maximum hygiene, efficiency, and bird comfort. Our systems include automated feeders, waterers, climate control, and waste management solutions. Built with durable, easy-to-clean materials.",
    image: "/src/assets/product-equipment.jpg",
    features: [
      "Automated Systems",
      "Hygienic Design",
      "Easy to Clean",
      "Durable Construction",
      "Energy Efficient",
      "Scalable Solutions"
    ],
    specifications: [
      { label: "Material", value: "Stainless Steel/Plastic" },
      { label: "Capacity", value: "500-10,000 birds" },
      { label: "Warranty", value: "2 years" },
      { label: "Installation", value: "Professional setup included" },
      { label: "Maintenance", value: "Low maintenance" },
    ],
    brochureUrl: "#"
  }
];
