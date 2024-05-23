type PersonProps = {
  details: {
    first: string,
    last: string
  }
}

export const Person = (props: PersonProps) => {
  return (
    <div>
      {props.details.first}  {props.details.last}
    </div>
  )
}
