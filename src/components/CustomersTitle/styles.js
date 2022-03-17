import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    gap: 2rem;
    margin-top: 0rem;

    div {
        background: var(--shape);
        padding: 1.5rem 2rem;
        color: var(--text-title);

        header {
            display: flex;
            // align-items: center;
            justify-content: space-between;

            img {
                height: 20px;
                margin-right: 1.5rem;
                margin-top: 0.4rem;
            }
        }

        button {
            font-size: 1rem;
            color: #fff;
            background: var(--yellow);
            border: 0;
            padding: 0 2rem;
            border-radius: 0.25rem;
            height: 3rem;
    
            transition: filter 0.2s;
    
            &:hover {
              filter: brightness(0.9)  
            }
        }

        strong {
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
        }

        &.highlight-background {
            background: var(--green);
            color: #fff;
        }
    }
`