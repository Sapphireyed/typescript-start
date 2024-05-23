type GreetProps = {
  name: string,
  count: number,
  isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>{
        props.isLoggedIn ? `Welcome ${props.name}! You have ${props.count} unread messages` : 'Welcome Guest! '
        }</h2>
    </div>
  )
}
