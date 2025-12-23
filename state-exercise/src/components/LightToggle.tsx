type Props = {
  onToggle: () => void
}

const LightToggle = ({ onToggle }: Props) => {
  return (
    <>
      <button onClick={onToggle}>Toggle Lights</button>
    </>
  )
}

export default LightToggle