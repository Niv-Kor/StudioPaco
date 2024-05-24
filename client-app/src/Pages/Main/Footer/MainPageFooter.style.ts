import styled from 'styled-components';

export const Container = styled.div`
  --hor-padding: 50px;
  --ver-padding: 20px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: var(--ver-padding) var(--hor-padding);
  width: calc(100% - var(--hor-padding) * 2);
  height: 100px;
  background-color: gray;
`;