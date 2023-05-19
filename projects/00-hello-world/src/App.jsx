import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
  const users = [
    {
      userName: 'Klitos85',
      name: 'Carlos Ortiz',
      isFollowing: true,
    },
    {
      userName: 'midudev',
      name: 'Miguel Ángel Duran',
      isFollowing: true,
    }
  ]
  return (
    <section className='App'>
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  )
}
