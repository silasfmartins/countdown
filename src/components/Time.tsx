interface TimeProps {
  date: number;
}

export function Time({date}: TimeProps) {
  return (
    <>
      <span className="text-5xl font-normal lg:text-7xl text-tertiary">{date}</span>
    </>
  )
}