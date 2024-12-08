type ResponseError = {
  error: string;
};

export async function fetchData<T>(url: string): Promise<T | null> {
  let result: T | null = null;

  try {
    const response = await fetch(url);
    if (response.ok) {
      const data: T & ResponseError = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      result = data;
    }
  } catch (e) {
    console.log(e);
  }

  return result;
}
