import React from 'react'

function dfgf() {
  return (
	<Navbar
				sticky='top'
				collapseOnSelect
				expand='lg'
				bg='dark'
				variant='dark'>
				<Container>
					<Navbar.Toggle aria-controls='responsive-navbar-nav' />
					<Navbar.Collapse id='responsive-navbar-nav'>
						<Nav className='me-auto'>
							{user.email && (
								<NavDropdown title='Dropdown' id='collasible-nav-dropdown'>
									<NavDropdown.Item href='#action/3.2'>
										edit profile
									</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href='#action/3.3'>
										History
									</NavDropdown.Item>
									<NavDropdown.Divider />
								</NavDropdown>
							)}
						</Nav>
						<Navbar.Brand>
							<Link to='/'>E-prescription</Link>
						</Navbar.Brand>
						<Nav>
							{!user.email && (
								<Nav.Link>
									<Link to='/login'> login </Link>
								</Nav.Link>
            )}

							<Nav.Link
								className='fs-6 link-light d-flex align-items-center'>
								{user.email && <small>signed in as: {user.displayName}</small>}
								<Nav.Link>
									{user?.email && (
										<button className='btn-danger btn btn-sm' onClick={logout}>
											logout
										</button>
									)}
								</Nav.Link>
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
					<Clock />
				</Container>
			</Navbar>

	);
}

export default dfgf
