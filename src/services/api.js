const API_URL = "http://localhost:8000/api"

export async function newGame () {
  const response = await fetch(`${API_URL}/new`, {
    method: "POST",
    headers: {'Content-Type': "application/json"}
  });

  try {
    const data = await response.json();
    return data
  } catch (error) {
    console.error(error)
    console.log(response)
  }
  
}

export const move = async (i, j) => {
  const response = await fetch(`${API_URL}/move`, {
    method: "POST",
    headers: {'Content-Type': "application/json"},
    body: JSON.stringify({i, j})
  });

  if(response.status === 200){
    const data = await response.json();
    return data
  }
  if(response.status === 400){
    const error = await response.json();
    throw new Error(error.message)
  }
  
}

