import NavLink from "../NavLink/NavLink"

function NavMain() {

  const links = [
    {
      title: 'Home',
      path: '/'
    },
    {
      title: 'About',
      path: '/about'
    },
    {
      title: 'Blog',
      path: '/blog'
    },
    {
      title: 'Contact',
      path: '/contact'
    },
  ]

  const session = true
  const isAdmin = true

  return (
    <>
      {links.map(link => (
        <NavLink key={link.path} item={link} />
      ))}{
        session ? (
          <>
            {isAdmin && <NavLink item={{ title: 'Admin', path: '/admin' }} />}
            <NavLink item={{ title: 'Logout', path: '/logout' }} />
          </>
        ) : (
          <NavLink item={{ title: 'Login', path: '/login' }} />
        )
      }
    </>
  )
}

export default NavMain