import styled from "styled-components"

export const Flex = styled.div`
    display: flex;

    padding: 0 20px;

    & > div,
    & > ul {
      flex: 1;
    }
`
