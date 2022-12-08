import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
`;

export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background: rgba(12, 45, 72, 0.46);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  max-width: 350px;
  padding: 50px;
  border-radius: 5px;
  height: 60%
`;

export const LabelSignin = styled.label`
  font-size: 16px;
  color: white;
`;

export const labelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;
  a {
    text-decoration: none;
    color: white;
  }
`;

export const logo = styled.p`
position: absolute;
font-weight: bold;
font-size: 80px;
color: rgba(255, 255, 255, 0.12);
z-index: -1;
`

export const titulo = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: white;
  padding-bottom: 20px;
`
