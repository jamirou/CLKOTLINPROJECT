import { useQuery } from "react-query";
import { ENDPOINTS } from "../helpers/endpoints";
import { AUTH_TOKEN_NAME } from "../helpers/constants";

const fetchVacancies = async (salary, jobFamilyId, yearsOfExperience) => {
  let token = localStorage.getItem(AUTH_TOKEN_NAME);

  const queryParameters = new URLSearchParams({
    salary: salary || "",
    jobFamilyId: jobFamilyId || "",
    yearsOfExperience: yearsOfExperience || "",
  });

  const response = await fetch(
    `${ENDPOINTS.searchVacancies}?${queryParameters}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  console.log("vacancy response", response);

  if (!response.ok && response.status !== 204) {
    throw new Error("Failed to fetch vacancies");
  }
  let responseData = await response.json();
  return responseData.data;
};

const useGetVacancies = (salary, jobFamily, yearsOfExperience) => {
  return useQuery(
    "vacancies",
    () => fetchVacancies(salary, jobFamily, yearsOfExperience),
    {
      // enabled: false,
    }
  );
};
export default useGetVacancies;
