import { Box } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const StyledAccordion = (props) => {
    return (
        <Box
            sx={{
                ".MuiPaper-root": {
                    borderRadius: "0"
                }
            }}
        >
            <Accordion
                disableGutters
                sx={{
                    boxShadow: "none",
                    borderBottom: "1px solid #dadce0",
                    color: "#202124"
                }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{
                        fontSize: "16px",
                        fontWeight: "500"
                    }}
                >
                    {props.question}
                </AccordionSummary>
                <AccordionDetails
                    sx={{
                        fontSize: "16px",
                        fontWeight: "400",
                        color: "#3c4043"
                    }}
                >
                    {props.answer}
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}
