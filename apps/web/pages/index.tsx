import tw from "twin.macro";
import { Button, styled } from "ui";

const Wrapper = styled.div`
  ${tw`bg-primary`}
`;

export default function Web() {
  return (
    <Wrapper>
      <div className="grid grid-cols-2">
        <div></div>
        <div></div>
      </div>
      <h1 className="text-center font-mono text-3xl font-bold pt-10">Web</h1>
      <Button>Button</Button>
    </Wrapper>
  );
}
