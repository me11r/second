// Mock данные для кафе - замените на реальные данные

export const cafeInfo = {
  name: "[Введите название кафе]",
  description: "[Введите описание кафе: концепция, атмосфера, особенность кухни]",
  address: "[Введите адрес кафе]",
  phone: "+7 (XXX) XXX-XX-XX",
  email: "info@yourcafe.com",
  workingHours: "7:00 - 22:00",
  instagram: "https://www.instagram.com/meir_san/",
  whatsapp: "[Вставьте ссылку WhatsApp]",
  facebook: "[Вставьте ссылку Facebook]"
};

export const menuCategories = [
  {
    id: 1,
    name: "Новинки",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    name: "Завтраки",
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    name: "Основные блюда",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    name: "Закуски",
    image: "https://images.unsplash.com/photo-1541529086526-db283c563270?w=400&h=300&fit=crop"
  },
  {
    id: 5,
    name: "Десерты",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop"
  },
  {
    id: 6,
    name: "Напитки",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop"
  }
];

export const menuItems = [
  {
    id: 1,
    categoryId: 2,
    name: "Английский завтрак",
    description: "Глазунья, поджаристый хлеб, джем, каша на выбор: рисовая, овсяная",
    price: 2200,
    weight: "170/250 гр.",
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=800&h=600&fit=crop",
    calories: 1292,
    protein: 31,
    carbs: 64,
    fat: 148
  },
  {
    id: 2,
    categoryId: 2,
    name: "Сырники со сметаной",
    description: "Нежные домашние сырники с натуральной сметаной и ягодным соусом",
    price: 1800,
    weight: "200 гр.",
    image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=800&h=600&fit=crop",
    calories: 890,
    protein: 28,
    carbs: 52,
    fat: 98
  },
  {
    id: 3,
    categoryId: 3,
    name: "Стейк из говядины",
    description: "Сочный стейк с овощами гриль и соусом на выбор",
    price: 4500,
    weight: "300 гр.",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800&h=600&fit=crop",
    calories: 1450,
    protein: 85,
    carbs: 32,
    fat: 185
  },
  {
    id: 4,
    categoryId: 3,
    name: "Паста Карбонара",
    description: "Классическая итальянская паста с беконом, сливками и пармезаном",
    price: 2800,
    weight: "350 гр.",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&h=600&fit=crop",
    calories: 1120,
    protein: 42,
    carbs: 78,
    fat: 142
  },
  {
    id: 5,
    categoryId: 4,
    name: "Брускетта с томатами",
    description: "Хрустящий хлеб с томатами, базиликом и оливковым маслом",
    price: 1200,
    weight: "150 гр.",
    image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=800&h=600&fit=crop",
    calories: 420,
    protein: 12,
    carbs: 45,
    fat: 58
  },
  {
    id: 6,
    categoryId: 4,
    name: "Сырная тарелка",
    description: "Ассорти из 4 видов сыра с медом и орехами",
    price: 2500,
    weight: "200 гр.",
    image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?w=800&h=600&fit=crop",
    calories: 890,
    protein: 38,
    carbs: 28,
    fat: 165
  },
  {
    id: 7,
    categoryId: 5,
    name: "Тирамису",
    description: "Классический итальянский десерт с кофе и маскарпоне",
    price: 1600,
    weight: "150 гр.",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&h=600&fit=crop",
    calories: 680,
    protein: 15,
    carbs: 58,
    fat: 98
  },
  {
    id: 8,
    categoryId: 5,
    name: "Чизкейк Нью-Йорк",
    description: "Нежный сливочный чизкейк с ягодным соусом",
    price: 1400,
    weight: "120 гр.",
    image: "https://images.unsplash.com/photo-1533134486753-c833f0ed4866?w=800&h=600&fit=crop",
    calories: 620,
    protein: 18,
    carbs: 48,
    fat: 88
  },
  {
    id: 9,
    categoryId: 6,
    name: "Капучино",
    description: "Классический итальянский капучино из отборных зерен",
    price: 800,
    weight: "200 мл.",
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=800&h=600&fit=crop",
    calories: 180,
    protein: 8,
    carbs: 18,
    fat: 22
  },
  {
    id: 10,
    categoryId: 6,
    name: "Свежевыжатый апельсиновый сок",
    description: "100% натуральный сок из свежих апельсинов",
    price: 900,
    weight: "300 мл.",
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=800&h=600&fit=crop",
    calories: 220,
    protein: 4,
    carbs: 52,
    fat: 2
  },
  {
    id: 11,
    categoryId: 1,
    name: "Пицца детская",
    description: "Специальная пицца для детей с курицей и сыром",
    price: 1600,
    weight: "230 гр.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=600&fit=crop",
    calories: 890,
    protein: 35,
    carbs: 68,
    fat: 125
  },
  {
    id: 12,
    categoryId: 1,
    name: "Салат Цезарь с креветками",
    description: "Свежий салат с креветками, пармезаном и соусом Цезарь",
    price: 2200,
    weight: "280 гр.",
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800&h=600&fit=crop",
    calories: 580,
    protein: 42,
    carbs: 28,
    fat: 95
  }
];

export const reviews = [
  {
    id: 1,
    name: "Анна Иванова",
    rating: 5,
    date: "15.08.2025",
    text: "Прекрасное место! Очень уютная атмосфера, вкусная еда и отличный сервис. Особенно понравился английский завтрак - порции большие, все свежее. Обязательно вернемся!",
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    id: 2,
    name: "Дмитрий Петров",
    rating: 5,
    date: "10.08.2025",
    text: "Отличное кафе с домашней атмосферой. Цены приемлемые, качество на высоте. Стейк был идеально прожарен, десерты просто восхитительны. Рекомендую!",
    avatar: "https://i.pravatar.cc/150?img=12"
  },
  {
    id: 3,
    name: "Елена Смирнова",
    rating: 4,
    date: "05.08.2025",
    text: "Очень понравилось! Единственный минус - иногда приходится ждать столик в выходные. Но это говорит о популярности заведения. Еда вкусная, персонал вежливый.",
    avatar: "https://i.pravatar.cc/150?img=5"
  },
  {
    id: 4,
    name: "Михаил Козлов",
    rating: 5,
    date: "01.08.2025",
    text: "Хожу сюда регулярно на завтраки. Сырники - лучшие в городе! Кофе всегда свежий, обслуживание быстрое. Цены справедливые за такое качество.",
    avatar: "https://i.pravatar.cc/150?img=8"
  }
];

export const cafeGallery = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1551218372-a8789b81b253?w=800&h=600&fit=crop"
];
