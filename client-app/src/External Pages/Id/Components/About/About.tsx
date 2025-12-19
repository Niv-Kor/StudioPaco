import { FC } from "react";
import { TEXT, TITLE } from "./consts";
import useTranslation from "shared/hooks/useTranslation";
import { Container, Text, Title } from "./About.style";

const About: FC = () => {
    const { translate, textDir } = useTranslation();

    return (
        <Container>
            <Title dir={textDir}>
                .{translate(TITLE)}
            </Title>
            <Text
                dir={textDir}
                dangerouslySetInnerHTML={{ __html: `.${translate(TEXT)}` }}
            />
        </Container>
    );
}

export default About;