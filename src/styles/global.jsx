import { css } from "@emotion/core";

export const globalStyles = css`

    @font-face {
        font-family: "-apple-system", "BlinkMacSystemFont", "San Francisco",
        "Helvetica Neue", "Helvetica", "Ubuntu", "Roboto", "Noto", "Segoe UI",
        "Arial", "playfair_regular", sans-serif;
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: "PlayfairDisplay-Regular";
        src: url("src/fonts/PlayfairDisplay-Regular.ttf");
    }

    // *,
    // *:before,
    // *:after {
    // font-size: inherit;
    // font-display: block;
    // }

    :root {
        cursor: default;
        font-size: 0.625rem;
        line-height: 1.4;
    }

    body {
        font-family: "-apple-system", "BlinkMacSystemFont", "San Francisco",
          "Helvetica Neue", "Helvetica", "Ubuntu", "Roboto", "Noto", "Segoe UI",
          "Arial", sans-serif;
        font-size: 1.6rem;
        margin: 0;
        font-weight: 400;
        height: 100%;
    }

    button,
    a {
        text-decoration: none;
        cursor: pointer;
    }

    a:focus {
        outline: none;
    }

    code,
    kbd,
    pre,
    samp {
        font-family: Menlo;
        font-size: 1.3rem;
    }
`;

