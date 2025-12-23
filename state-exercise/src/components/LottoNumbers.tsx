type Props = {
  onGenerate: () => void
}

const LottoNumbers = ({ onGenerate }: Props) => {
  return (
    <>
      <button onClick={onGenerate}>Generate Lotto Numbers</button>
    </>
  )
}

export default LottoNumbers