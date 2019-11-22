import styled from "@emotion/styled";

// Using components is for MDX. Left for the future.
const Blockquote = styled.blockquote`
    & > p {
        font-family: ${p => p.theme.fonts.serif};
    }
`;

export default Blockquote;