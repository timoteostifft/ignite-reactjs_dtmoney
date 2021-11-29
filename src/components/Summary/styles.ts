import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -5rem;

  div{
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

  header{
    display: flex;
    justify-content: space-between;
    align-items: center; 
  }
 
  strong{
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 500;
    line-height: 3rem;
    display: block;
  }

  &.highlight-background{
    background: var(--green);
    color: white;
  }

}`;