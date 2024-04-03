import axios from "axios";

// export async function postData(url: string, data: any) {
//   try {
//     const response = await axios.post(url, data, {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     return response; // Return response data if needed
//   } catch (error) {
//     console.error(error);
//     throw error; // Throw error to handle it elsewhere if needed
//   }
// }

export async function postData(data: any) {
  try {
    const response = await fetch(`${process.env.API_URL}/login.php`, {
      body: JSON.stringify({ data }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const userData = await response.json();
    console.log(userData);

    return userData;
  } catch (error) {
    console.error(error);
    throw error; // Throw error to handle it elsewhere if needed
  }
}
