export interface Masjid {
  id: number;
  name: string;
  area: string;
  address: string;
  timing: string;
  foodType: string;
  biriyaniMood?: {
    rating: number;
    comment: string;
  };
}

export const masjidData: Masjid[] = [
  {
    id: 1,
    name: "Mishkal Mosque",
    area: "Kozhikode",
    address: "Kuttichira, Thekkepuram, Kozhikode, Kerala 673001",
    timing: "Iftar: 6:45 PM - 8:30 PM",
    foodType: "Traditional Malabar Cuisine",
    biriyaniMood: {
      rating: 9.5,
      comment: "The biriyani here is so good, even the cats are food critics! 😺"
    }
  },
  {
    id: 2,
    name: "Makkham Thangal Juma Masjid",
    area: "Malappuram",
    address: "Down Hill Road, Malappuram, Kerala 676505",
    timing: "Iftar: 6:40 PM - 8:15 PM",
    foodType: "Kerala Muslim Cuisine",
    biriyaniMood: {
      rating: 8.5,
      comment: "Legend says their secret spice blend is guarded by ninja chefs 🥷"
    }
  },
  {
    id: 3,
    name: "Palayam Juma Masjid",
    area: "Thiruvananthapuram",
    address: "Palayam, Thiruvananthapuram, Kerala 695034",
    timing: "Iftar: 6:35 PM - 8:45 PM",
    foodType: "Mixed Kerala Cuisine",
    biriyaniMood: {
      rating: 7.8,
      comment: "So aromatic, your neighbors will 'accidentally' visit during iftar 😄"
    }
  },
  {
    id: 4,
    name: "Ernakulam Market Masjid",
    area: "Kochi",
    address: "Market Road, Ernakulam, Kochi, Kerala 682011",
    timing: "Iftar: 6:40 PM - 8:30 PM",
    foodType: "Traditional Iftar Dishes",
    biriyaniMood: {
      rating: 9.0,
      comment: "Their biriyani is like a warm hug for your taste buds 🤗"
    }
  },
  {
    id: 5,
    name: "Kunnamkulam Central Juma Masjid",
    area: "Thrissur",
    address: "Kunnamkulam, Thrissur, Kerala 680503",
    timing: "Iftar: 6:45 PM - 8:15 PM",
    foodType: "Local Kerala Delicacies",
    biriyaniMood: {
      rating: 8.7,
      comment: "The aroma will make you forget your phone password! 📱"
    }
  },
  {
    id: 6,
    name: "Odathil Palli",
    area: "Kannur",
    address: "Fort Road, Thalassery, Kannur, Kerala 670101",
    timing: "Iftar: 6:35 PM - 8:30 PM",
    foodType: "Malabar Special Iftar",
    biriyaniMood: {
      rating: 9.2,
      comment: "Warning: May cause spontaneous happy dances! 💃"
    }
  },
  {
    id: 7,
    name: "Valiya Juma Masjid",
    area: "Palakkad",
    address: "GB Road, Palakkad, Kerala 678001",
    timing: "Iftar: 6:40 PM - 8:45 PM",
    foodType: "Traditional Kerala Muslim Food",
    biriyaniMood: {
      rating: 8.9,
      comment: "So good, you'll want to name your firstborn 'Biriyani' 👶"
    }
  }
];