type PersonListtProps = {
  names: string[]
};

export const PersonList = (props: PersonListtProps) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <h2 key={name}>{name}</h2>
        )
      })}
    </div>
  )
}
