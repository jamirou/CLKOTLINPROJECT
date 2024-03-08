import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { Box } from '@mui/material';
import { Button } from '@mui/material';
const ChatInput = ({ onSendMessage }) => {
    const [message, setMessage] = useState('');

    const handleChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSend = () => {
        if (message.trim() !== '') {
            onSendMessage(message);
            setMessage('');
        }
    };

    return (
        <>

            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    '& > :not(style)': { mr: 1 },
                }}
            >
                <TextField
                    value={message}
                    onChange={handleChange}
                    label="Type your message..."
                    variant="outlined"
                    fullWidth  
                />
                <Button
                    onClick={handleSend}
                    variant="contained"
                    color="primary" 
                    size="small"  
                    sx={{ flex: 'none' }}  
                >
                    Send
                </Button>
            </Box>



        </>
    );
};

export default ChatInput;