import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;

    div {
        overflow-x: auto;
    }

    table { 
        width: 100%;
        border-spacing: 0 0.5rem;
        overflow: auto;

        th {
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem 2 rem;
            text-align: left;
            line-height: 1.5rem;
        }

        td {
            padding: 1.5rem 2rem;
            border: 0;
            background: var(--shape);
            color: var(--text-body);
            border-radius: 0.25rem;

            &:first-child {
                color: var(--text-title);
            }

            &.ativo {
                color: var(--green)
            }

            &.inativo {
                color: var(--red)
            }
            
            &.aguardando {
                color: var(--yellow)
            }

            &.desativado {
                color: var(--grey)
            }
        }

        button {
            font-size: 1rem;
            color: var(--yellow);
            background: transparent;
            border: 1px solid var(--yellow);
            padding: 0 2rem;
            border-radius: 0.25rem;
            height: 3rem;
    
            transition: background 0.2s;
    
            &:hover {
              filter: brightness(0.9) ;
              color: #fff;
              background: var(--yellow); 
            }
        }
    }
`