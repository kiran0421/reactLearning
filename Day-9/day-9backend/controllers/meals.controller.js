const Meals = [
  {
    idMeal: "53138",
    strMeal: "Alfajores",
    strMealAlternate: null,
    strCategory: "Dessert",
    strArea: "Argentinian",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/a4kgf21763075288.jpg",
    dateModified: "2025-11-13 11:32:17",
  },
  {
    idMeal: "53111",
    strMeal: "Anzac biscuits",
    strMealAlternate: null,
    strCategory: "Dessert",
    strArea: "Australian",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/q47rkb1762324620.jpg",
    dateModified: "2025-11-05 04:46:03",
  },
  {
    idMeal: "53049",
    strMeal: "Apam balik",
    strMealAlternate: null,
    strCategory: "Dessert",
    strArea: "Malaysian",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/adxcbq1619787919.jpg",
    dateModified: null,
  },
  {
    idMeal: "52893",
    strMeal: "Apple & Blackberry Crumble",
    strMealAlternate: null,
    strCategory: "Dessert",
    strArea: "British",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/xvsurr1511719182.jpg",
    dateModified: null,
  },
  {
    idMeal: "52768",
    strMeal: "Apple Frangipan Tart",
    strMealAlternate: null,
    strCategory: "Dessert",
    strArea: "British",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg",
    dateModified: null,
  },
  {
    idMeal: "53133",
    strMeal: "Asado",
    strMealAlternate: null,
    strCategory: "Beef",
    strArea: "Argentinian",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/kgfh3q1763075438.jpg",
    dateModified: "2025-11-13 10:45:01",
  },
  {
    idMeal: "53099",
    strMeal: "Aussie Burgers",
    strMealAlternate: null,
    strCategory: "Beef",
    strArea: "Australian",
    dateModified: "2025-10-30 15:03:15",
  },
  {
    idMeal: "53127",
    strMeal: "Authentic Norwegian Kransekake",
    strMealAlternate: null,
    strCategory: "Dessert",
    strArea: "Norwegian",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/yk78uc1763075719.jpg",
    dateModified: "2025-11-12 11:08:18",
  },
  {
    idMeal: "53107",
    strMeal: "Avocado dip with new potatoes",
    strMealAlternate: null,
    strCategory: "Vegetarian",
    strArea: "Australian",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/flrajf1762341295.jpg",
    dateModified: "2025-11-05 02:37:50",
  },
  {
    idMeal: "53050",
    strMeal: "Ayam Percik",
    strMealAlternate: null,
    strCategory: "Chicken",
    strArea: "Malaysian",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/020z181619788503.jpg",
    dateModified: null,
  },
];

const getAllMeals = (req, res) => {
  try {
    res.status(200).json({
      success: true,
      count: Meals.length,
      data: Meals,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

const getMealById = (req, res) => {
  try {
    const { id } = req.params;
    const meal = Meals.find((m) => m.idMeal === id);
    if (!meal) {
      return res.status(404).json({
        success: false,
        message: `Meal not found with id: ${id}`,
      });
    }
    res.status(200).json({
      success: true,
      data: meal,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

const createMeal = (req, res) => {
  try {
    const newId = Meals.length > 0 ? Meals[Meals.length - 1].id + 1 : 1;
    newMeal = { ...req.body, idMeal: newId };
    Meals.push(newMeal);
    res.status(201).json({
      success: true,
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

const editMealById = (req, res) => {
  try {
    const { id } = req.params;
    const meal = Meals.find((m) => m.idMeal === id);
    if (!meal) {
      return res.status(404).json({
        success: false,
        message: `Meal not found with id: ${id}`,
      });
    }
    Meals.map((m) => {
      if (m.idMeal === id) {
        return {
          ...m,
          ...req.body,
        };
      }
      return m;
    });
    res.status(200).json({
      success: true,
      data: meal,
    });
  } catch (error) {}
};

const deleteMealById = (req, res) => {
  try {
  } catch (error) {}
};

export { getAllMeals, getMealById, createMeal, editMealById, deleteMealById };
