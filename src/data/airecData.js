export const mealPlans = {
    weightLoss: {
      standard: {
        breakfast: ["Oatmeal with berries", "Greek yogurt with almonds", "Scrambled eggs with spinach"],
        lunch: ["Grilled chicken salad", "Quinoa with roasted vegetables", "Turkey wrap with whole wheat tortilla"],
        dinner: ["Baked salmon with asparagus", "Stir-fried tofu with broccoli", "Grilled shrimp with zucchini noodles"],
        snacks: ["Apple slices with peanut butter", "Carrot sticks with hummus", "Handful of mixed nuts"]
      },
      vegan: {
        breakfast: ["Chia seed pudding with almond milk", "Smoothie with spinach, banana and flaxseeds", "Avocado toast on whole grain bread"],
        lunch: ["Lentil soup with whole grain bread", "Chickpea salad wrap", "Quinoa and black bean bowl"],
        dinner: ["Vegetable stir-fry with tofu", "Mushroom and lentil curry with brown rice", "Stuffed bell peppers with quinoa"],
        snacks: ["Roasted edamame", "Fresh fruit", "Rice cakes with almond butter"]
      },
      // Add other diet types for weight loss...
    },
    muscleGain: {
      standard: {
        breakfast: ["6 egg whites with whole wheat toast", "Protein pancakes with banana", "Greek yogurt with granola and honey"],
        lunch: ["Grilled chicken with sweet potato and broccoli", "Lean beef with brown rice and greens", "Salmon with quinoa and asparagus"],
        dinner: ["Turkey meatballs with whole wheat pasta", "Grilled steak with roasted potatoes", "Baked cod with lentils"],
        snacks: ["Cottage cheese with pineapple", "Protein shake with banana", "Hard boiled eggs"]
      },
      vegetarian: {
        breakfast: ["Tofu scramble with whole grain toast", "Greek yogurt with nuts and seeds", "Protein smoothie with pea protein"],
        lunch: ["Lentil and chickpea salad", "Quinoa and black bean burrito", "Tempeh stir-fry with brown rice"],
        dinner: ["Vegetable and paneer curry", "Bean chili with cornbread", "Eggplant parmesan with whole wheat pasta"],
        snacks: ["Edamame", "Cottage cheese with berries", "Protein bar"]
      },
      // Add other diet types for muscle gain...
    },
    // Add other goal types...
    generalFitness: {
      standard: {
        breakfast: ["Whole grain cereal with milk", "Toast with peanut butter and banana", "Omelet with vegetables"],
        lunch: ["Grilled chicken sandwich", "Tuna salad with crackers", "Vegetable soup with whole grain bread"],
        dinner: ["Baked chicken with roasted vegetables", "Pasta with marinara sauce", "Fish tacos with slaw"],
        snacks: ["Yogurt", "Trail mix", "String cheese"]
      }
    }
  };
  
  export const workoutPlans = {
    weightLoss: {
      None: {
        low: {
          exercises: [
            "Brisk walking - 30 minutes",
            "Bodyweight squats - 3 sets of 12",
            "Push-ups (knee version if needed) - 3 sets of 8",
            "Plank - 30 seconds"
          ],
          schedule: [
            "Monday: Cardio + Core",
            "Wednesday: Full Body",
            "Friday: Cardio + Core",
            "Sunday: Active Recovery (walking/yoga)"
          ]
        },
        medium: {
          exercises: [
            "Jumping jacks - 3 minutes",
            "Bodyweight circuit (squats, push-ups, lunges) - 3 rounds",
            "Burpees - 3 sets of 10",
            "Mountain climbers - 3 sets of 20"
          ],
          schedule: [
            "Monday: HIIT",
            "Tuesday: Strength",
            "Thursday: HIIT",
            "Saturday: Long Cardio Session"
          ]
        },
        high: {
          exercises: [
            "High knees - 1 minute",
            "Burpees - 4 sets of 15",
            "Jump squats - 4 sets of 12",
            "Plank to push-up - 3 sets of 10 each side"
          ],
          schedule: [
            "Monday: HIIT",
            "Tuesday: Strength",
            "Wednesday: Cardio",
            "Friday: HIIT",
            "Saturday: Strength",
            "Sunday: Active Recovery"
          ]
        }
      },
      Dumbbells: {
        // Similar structure with dumbbell exercises
      },
      // Add other equipment types...
    },
    muscleGain: {
      None: {
        low: {
          exercises: [
            "Push-ups - 4 sets to failure",
            "Bodyweight squats - 4 sets of 15",
            "Pull-ups (assisted if needed) - 3 sets",
            "Dips (between chairs) - 3 sets"
          ],
          schedule: [
            "Monday: Upper Body",
            "Wednesday: Lower Body",
            "Friday: Full Body"
          ]
        },
        medium: {
          exercises: [
            "Pistol squats (assisted) - 3 sets of 8",
            "One-arm push-ups - 3 sets of 6",
            "Pull-ups - 4 sets",
            "Handstand push-ups (against wall) - 3 sets"
          ],
          schedule: [
            "Monday: Push",
            "Tuesday: Pull",
            "Thursday: Legs",
            "Saturday: Full Body"
          ]
        },
        high: {
          exercises: [
            "Archer push-ups - 4 sets of 8",
            "Single leg squats - 4 sets of 10",
            "Muscle-up practice",
            "Planche progression"
          ],
          schedule: [
            "Monday: Push",
            "Tuesday: Pull",
            "Wednesday: Legs",
            "Friday: Push",
            "Saturday: Pull",
            "Sunday: Active Recovery"
          ]
        }
      },
      // Add other equipment types...
    },
    // Add other goal types...
    generalFitness: {
      None: {
        medium: {
          exercises: [
            "Push-ups - 3 sets of 12",
            "Bodyweight squats - 3 sets of 15",
            "Lunges - 3 sets of 10 each leg",
            "Plank - 1 minute"
          ],
          schedule: [
            "Monday: Full Body",
            "Wednesday: Full Body",
            "Friday: Full Body"
          ]
        }
      }
    }
  };