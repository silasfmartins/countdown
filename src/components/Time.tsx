interface TimeProps {
  date: number;
}

export function Time({date}: TimeProps) {
  return (
    <>
      <span className="font-normal text-7xl text-tertiary">{date}</span>
    </>
  )
}