
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Button } from './components/Button';

function App() {
  const details = {
    first: 'Bruce',
    last: 'Wayne'
  }

  const names = ['Bruce Wayne', 'Clark Kent', 'Princess Kate'];

  return (
    <div className="App">
      <Greet name='Gosia' count={11} isLoggedIn={false}/>
      <Person details={details} />
      <PersonList names={names} />
      <Status status={'loading'}/>
      <Oscar>
        <Heading>OScar smth</Heading>
      </Oscar>
      <Heading>TRALA LA LA</Heading>
      <Button handleClick={(event, id) => {
        console.log('clicked', event, id)
      }} />
    </div>
  );
}

export default App;
