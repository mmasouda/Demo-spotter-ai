import Link from 'next/link';
import { Box, Typography } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import {
    Container,
    BtnGroup,
    Btn,
    LinksContainer
} from "./Styles";

const Footer = () => {
    const strings = {
        laguage: "Language . English (United States)",
        location: "Location . United Arab Emirates",
        currency: "Currency . AED",
        about: "About",
        privacy: "Privacy",
        terms: "Terms",
        join: "Join user studies",
        feedback: "Feedback",
        help: "Help center",
        notice: "Displayed currencies may differ from the currencies used to purchase flights.",
        learnMore: "Learn more",
        footerStr: "Prices are final prices and include all taxes and fees, including payment fees for the cheapest common payment method (which may differ depending on the provider). Additional charges may apply for other types of payment, luggage, meals, WLAN or other additional services. Prices, availability and travel details are provided based on the latest information received from our partners. This information is reflected in the results within a period of less than 24 hours. Additional conditions may also be applied by our partners. You should then check prices and conditions with the services providers before booking."
    }

    return (
        <Container component="footer">
            <BtnGroup>
                <Btn sx={{ display: { xs: "none", md: "flex" } }}>
                    <LanguageIcon />
                    {strings.laguage}
                </Btn>
                <Btn sx={{ display: { xs: "none", md: "flex" } }}>
                    <LocationOnIcon />
                    {strings.location}
                </Btn>
                <Btn>
                    <LocalAtmIcon />
                    {strings.currency}
                </Btn>
            </BtnGroup>
            <LinksContainer>
                <Link href="/">{strings.about}</Link>
                <Link href="/">{strings.privacy}</Link>
                <Link href="/">{strings.terms}</Link>
                <Link href="/">{strings.join}</Link>
                <Link href="/">{strings.feedback}</Link>
                <Link href="/">{strings.help}</Link>
            </LinksContainer>
            <Box sx={{ marginTop: "10px" }}>
                <Typography
                    sx={{
                        fontSize: "14px",
                        color: "#70757a",
                        textAlign: "center",
                        marginInline: "16px",
                        marginBottom: "16px"
                    }}
                >
                    {strings.notice}
                    <span>
                        {strings.learnMore}
                    </span>
                </Typography>
                <Typography
                    sx={{
                        fontSize: "14px",
                        color: "#70757a",
                        textAlign: "center",
                        marginInline: "16px",
                        marginBottom: "16px"
                    }}
                >
                    {strings.footerStr}
                </Typography>
            </Box>
        </Container>
    )
}

export default Footer;
