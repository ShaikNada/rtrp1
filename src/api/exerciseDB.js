export const exerciseApiConfig = {
    baseUrl: "https://exercisedb.p.rapidapi.com",
    endpoints: {
      exercises: "/exercises",
      bodyParts: "/exercises/bodyPartList",
      exerciseById: "/exercises/exercise/{id}",
      bodyPart: "/exercises/bodyPart/{bodyPart}",
      equipment: "/exercises/equipment/{equipment}",
      target: "/exercises/target/{target}",
      search: "/exercises/name/{name}"
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_RAPIDAPI_HOST
    }
  };
  
  // Fallback data in case API fails
  export const fallbackExercises = {
    strength: [
      {
        id: "0001",
        name: "Push-ups",
        bodyPart: "chest",
        equipment: "body weight",
        gifUrl: "https://v2.exercisedb.io/image/6h7HW7W-WF8TnS",
        target: "pectorals"
      },
      {
        id: "0002",
        name: "Pull-ups",
        bodyPart: "back",
        equipment: "body weight",
        gifUrl: "https://v2.exercisedb.io/image/JUhYqzBy-6nXwG",
        target: "lats"
      }
    ],
    cardio: [
      {
        id: "0003",
        name: "Jumping Jacks",
        bodyPart: "cardio",
        equipment: "body weight",
        gifUrl: "https://v2.exercisedb.io/image/6bH5Z3G-WW7FhS",
        target: "cardiovascular system"
      }
    ]
  };
  
  export const fetchExercisesByType = async (type) => {
    try {
      let url;
      switch (type) {
        case 'strength':
          url = `${exerciseApiConfig.baseUrl}${exerciseApiConfig.endpoints.target.replace('{target}', 'biceps')}`;
          break;
        case 'cardio':
          url = `${exerciseApiConfig.baseUrl}${exerciseApiConfig.endpoints.bodyPart.replace('{bodyPart}', 'cardio')}`;
          break;
        case 'yoga':
          url = `${exerciseApiConfig.baseUrl}${exerciseApiConfig.endpoints.equipment.replace('{equipment}', 'body weight')}`;
          break;
        default:
          url = `${exerciseApiConfig.baseUrl}${exerciseApiConfig.endpoints.exercises}`;
      }
  
      const response = await fetch(url, {
        headers: exerciseApiConfig.headers
      });
      
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      
      const data = await response.json();
      return data.slice(0, 10); // Return first 10 exercises
    } catch (error) {
      console.error("Error fetching exercises:", error);
      return fallbackExercises[type] || [];
    }
  };