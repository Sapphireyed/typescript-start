type status = 'loading' | 'error' | 'fetched';

type StatusProps = {
  status: status
}

export const Status = (props: StatusProps) => {
  let message;

  if (props.status === 'loading') {
    message = 'Loading...'
  } else if (props.status === 'fetched') {
    message = 'Fetched sucessfully'
  } else if (props.status === 'error') {
    message = 'Error fetching'
  }

  return (
    <div>
      {message}
    </div>
  )
}
