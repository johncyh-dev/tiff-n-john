import styled from 'styled-components';

const FormContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #EEEEEE;
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: center;
`;
const FormRow = styled.div`
  width: 100%;
  background-color: #DDDDDD;
  display: flex;
  justify-contents: space-between;
`;

const ActionButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 30vh;
  background-color: #CCCCCC;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ActionButtonLabel = styled.div`
  font-size: 2em;
  font-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #555555;
`;

function App() {
  return (
    <div className="App">
      <FormContainer>
        <FormRow>
          <ActionButtonWrapper>
            <ActionButtonLabel>Yes</ActionButtonLabel>
          </ActionButtonWrapper>
          <ActionButtonWrapper>
            <ActionButtonLabel>No</ActionButtonLabel>
          </ActionButtonWrapper>
        </FormRow>
      </FormContainer>
    </div>
  );
}

export default App;
