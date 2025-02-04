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
      comment: "Malabar biriyani at its best! Full-on flavour bomb! 🔥"
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
      comment: "Old-school biriyani with a spicy kick! 🌶️"
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
      comment: "Good mix of spices, but could be better. 😊"
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
      comment: "Top-notch biriyani, everyone loves it! ❤️"
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
      comment: "Classic Kerala biriyani, smells amazing! 👌"
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
      comment: "Thalassery biriyani is next level! 🏆"
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
      comment: "Traditional taste, melts in your mouth! 😋"
    }
  },
  {
    id: 8,
    name: "Chemmad Juma Masjid",
    area: "Malappuram",
    address: "Chemmad, Tirurangadi, Malappuram, Kerala 676306",
    timing: "Iftar: 6:40 PM - 8:30 PM",
    foodType: "Mappila Cuisine",
    biriyaniMood: {
      rating: 8.8,
      comment: "Mappila biriyani with a unique twist! 🌟"
    }
  },
  {
    id: 9,
    name: "Kotakkal Juma Masjid",
    area: "Malappuram",
    address: "Kottakkal, Malappuram, Kerala 676503",
    timing: "Iftar: 6:45 PM - 8:15 PM",
    foodType: "Traditional Malabar Dishes",
    biriyaniMood: {
      rating: 8.6,
      comment: "Rich and flavourful, just like home! 🏠"
    }
  },
  {
    id: 10,
    name: "Pantheerankavu Masjid",
    area: "Kozhikode",
    address: "Pantheerankavu, Kozhikode, Kerala 673019",
    timing: "Iftar: 6:40 PM - 8:30 PM",
    foodType: "Kozhikode Special",
    biriyaniMood: {
      rating: 9.1,
      comment: "Kozhikode biriyani is a must-try! 😍"
    }
  },
  {
    id: 11,
    name: "Ponnani Valiya Juma Masjid",
    area: "Malappuram",
    address: "Ponnani, Malappuram, Kerala 679577",
    timing: "Iftar: 6:35 PM - 8:45 PM",
    foodType: "Traditional Ponnani Style",
    biriyaniMood: {
      rating: 9.3,
      comment: "Ponnani biriyani is legendary! ⭐"
    }
  },
  {
    id: 12,
    name: "Chalai Palli",
    area: "Thiruvananthapuram",
    address: "Chalai Market, Thiruvananthapuram, Kerala 695036",
    timing: "Iftar: 6:40 PM - 8:30 PM",
    foodType: "Local Muslim Cuisine",
    biriyaniMood: {
      rating: 8.4,
      comment: "South Kerala style, different but tasty! 🍲"
    }
  },
  {
    id: 13,
    name: "Mannarkad Juma Masjid",
    area: "Palakkad",
    address: "Mannarkkad, Palakkad, Kerala 678582",
    timing: "Iftar: 6:45 PM - 8:15 PM",
    foodType: "Traditional Kerala Food",
    biriyaniMood: {
      rating: 8.7,
      comment: "Palakkad style biriyani, full of flavour! 🎖️"
    }
  },
  {
    id: 14,
    name: "Thanur Juma Masjid",
    area: "Malappuram",
    address: "Thanur, Malappuram, Kerala 676302",
    timing: "Iftar: 6:40 PM - 8:30 PM",
    foodType: "Coastal Kerala Cuisine",
    biriyaniMood: {
      rating: 8.9,
      comment: "Coastal biriyani with a spicy punch! 🌊"
    }
  },
  {
    id: 15,
    name: "Beemapally Dargah Mosque",
    area: "Thiruvananthapuram",
    address: "Beemapally, Thiruvananthapuram, Kerala 695007",
    timing: "Iftar: 6:35 PM - 8:45 PM",
    foodType: "Special Dargah Food",
    biriyaniMood: {
      rating: 9.0,
      comment: "Dargah-style biriyani, soul-satisfying! 🌟"
    }
  },
  {
    id: 16,
    name: "Kadavanthara Juma Masjid",
    area: "Kochi",
    address: "Kadavanthara, Kochi, Kerala 682020",
    timing: "Iftar: 6:40 PM - 8:30 PM",
    foodType: "Modern Kerala Muslim Food",
    biriyaniMood: {
      rating: 8.5,
      comment: "Modern twist on classic biriyani! 👨‍🍳"
    }
  },
  {
    id: 17,
    name: "Varakkal Juma Masjid",
    area: "Kozhikode",
    address: "Varkkal, Kozhikode, Kerala 673005",
    timing: "Iftar: 6:45 PM - 8:15 PM",
    foodType: "Coastal Malabar Cuisine",
    biriyaniMood: {
      rating: 8.8,
      comment: "Seaside biriyani, fresh and tasty! 🏆"
    }
  },
  {
    id: 18,
    name: "Aluva Juma Masjid",
    area: "Ernakulam",
    address: "Aluva, Ernakulam, Kerala 683101",
    timing: "Iftar: 6:40 PM - 8:30 PM",
    foodType: "Central Kerala Style",
    biriyaniMood: {
      rating: 8.6,
      comment: "Central Kerala biriyani, simple yet delicious! ⭐"
    }
  },
  {
    id: 19,
    name: "Kasaragod Town Juma Masjid",
    area: "Kasaragod",
    address: "Town Centre, Kasaragod, Kerala 671121",
    timing: "Iftar: 6:35 PM - 8:45 PM",
    foodType: "North Kerala Special",
    biriyaniMood: {
      rating: 8.9,
      comment: "North Kerala biriyani, spicy and rich! 🌶️"
    }
  },
  {
    id: 20,
    name: "Chavakkad Juma Masjid",
    area: "Thrissur",
    address: "Beach Road, Chavakkad, Thrissur, Kerala 680506",
    timing: "Iftar: 6:40 PM - 8:30 PM",
    foodType: "Coastal Muslim Cuisine",
    biriyaniMood: {
      rating: 9.1,
      comment: "Coastal biriyani, a treat for your taste buds! ✨"
    }
  }
];