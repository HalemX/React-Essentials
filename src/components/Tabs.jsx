export default function Tabs({ children, buttons, buttonsContainer }) {
  const ButtonsConatiner = buttonsContainer;

  return (
    <>
      <ButtonsConatiner>{buttons}</ButtonsConatiner>
      {children}
    </>
  );
}
