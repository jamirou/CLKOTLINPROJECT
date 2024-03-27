import React, { useState } from 'react';
import CardContainer from '../components/CardContainer';
import { VacancyFilter } from '../components/VacancyFilter';
import VacancyTable from '../components/VacancyTable';
import { CircularProgress } from '@mui/material';

const Vacancies = () => {


  const [data, setData] = useState([]);
  const [isLoadingVacancies, setIsLoadingVacancies] = useState(false);


  return (
    <div >
      <VacancyFilter setData={setData} setIsLoadingVacancies={setIsLoadingVacancies}></VacancyFilter>

      <CardContainer width='xl'>

        {isLoadingVacancies ?
          (
          <CircularProgress />
          )
          :
          (<>

            <VacancyTable dataFromQuery={data}></VacancyTable>

          </>)}

      </CardContainer>

    </div>
  );
};

export default Vacancies;