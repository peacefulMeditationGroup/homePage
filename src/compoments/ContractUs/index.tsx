import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
`;

const IframeContainer = styled.div`
    width: 530px;
    max-width: 530px;
`;

const StyledIframe = styled.iframe`
    min-width: 100%;
    max-width: 100%;
    height: 833px;
    border: none;
    @media screen and (min-width: 500px) {
        height: 833px;
    }
`;

export default function ContractUs() {
    return (
        <section id="contactUs" className="contact-parlex">
            <Container className="container">
                <IframeContainer>
                    <StyledIframe
                        id="JotFormIFrame-230631047148046"
                        title="Contract Us" onLoad={() => {
                            window.parent.scrollTo(0, 0)
                        }}
                        allowTransparency
                        allowFullScreen
                        allow="geolocation; microphone; camera"
                        src="https://form.jotform.com/230631047148046"
                        frameBorder="0"
                        scrolling="no"
                    />
                </IframeContainer>
            </Container>
        </section>
    );
}