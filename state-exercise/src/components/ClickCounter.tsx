type Props = {
  onClick: () => void
}

const ClickCounter = ({ onClick }: Props) => {
  return (
    <>
      <button onClick={onClick}>Click Counter</button>
    </>
  )
}

export default ClickCounter