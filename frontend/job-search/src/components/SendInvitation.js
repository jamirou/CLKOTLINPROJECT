import { useEffect, useState } from "react";
import { useSendInvitation } from "../hooks/useSendInvitation";
import { MenuItem, Button, TextField } from "@mui/material";
import { getVacancyByManager } from "../hooks/useGetVacancyByManager";

const SendInvitation = ({data}) => {
    console.log("data", data)
    
    const { mutate } = useSendInvitation();
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');
    const [vacancyId, setVacancyId] = useState('');
    const [vacancies, setVacancies] = useState([]);
  
    // Get vacancies available for logged-in manager
    const fetchVacanciesForManager = async () => {
        try {
            const managerVacancies = await getVacancyByManager();
            setVacancies(managerVacancies);
        } catch (error) {
            console.error('Error fetching vacancies for manager:', error);
        }
    };

  useEffect(() => {
    fetchVacanciesForManager();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    let selectedCandidateIds = [];

    if (data) {
      selectedCandidateIds = Object.keys(data).filter((id) => data[id]);

      console.log("Selected candidate IDs:", selectedCandidateIds);
    } else {
      return;
    }

    for (let i = 0; i < selectedCandidateIds.length; i++) {
      const candidateId = selectedCandidateIds[i];
      
      console.log("Sending invitation to candidate:", candidateId);
    }

    let invitationData = {
      candidateId: 1,
      subject,
      content,
      vacancyId,
      candidateIds: selectedCandidateIds
    };
    console.log("submit", invitationData);

    try {
      await mutate(invitationData);
    } catch (error) {
      console.error("Error sending invitation:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-multiline-static"
          label="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          fullWidth
          margin="normal"
          inputProps={{ maxLength: 100 }}
          required
        />

        <TextField
          id="outlined-multiline-static"
          label="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          multiline
          fullWidth
          margin="normal"
          rows={4}
          inputProps={{ maxLength: 100 }}
          required
        />

        <TextField
          select
          label="Select Vacancy"
          value={vacancyId}
          onChange={(e) => setVacancyId(e.target.value)}
          fullWidth
          margin="normal"
          required
        >
          {vacancies.map((vacancy) => (
            <MenuItem key={vacancy.id} value={vacancy.id}>
              {vacancy.name} - {vacancy.jobFamily.name}
            </MenuItem>
          ))}
        </TextField>
        
        <Button type="submit" variant="contained" color="primary" mt={2}>
          Send
        </Button>
      </form>
    </>
  );
};

export default SendInvitation;
