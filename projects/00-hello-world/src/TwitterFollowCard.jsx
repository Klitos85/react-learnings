import { useState } from 'react'

export function TwitterFollowCard({
  userName = 'unknown',
  children,
  initialIsFollowing,
}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const text = isFollowing ? 'Following' : 'Follow'
  const buttonClassName = isFollowing
    ? 'tw-card-button is-following'
    : 'tw-card-button'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className='tw-card'>
      <header className='tw-card-header'>
        <img
          className='tw-card-img'
          alt={`Avatar ${userName}`}
          src={`https://unavatar.io/github/${userName}`}
        />
        <div className='tw-card-info'>
          <strong>{children}</strong>
          <span className='tw-card-infoUserName'>{`@${userName}`}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className='tw-card-text'>{text}</span>
          <span className='tw-card-stopFollowing'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}
