import React from 'react'
import { NavLink } from 'react-router-dom'
export default function ErrorRouter() {
	return (
		<>
			<div className="wrapper">
				<div className="error-404 d-flex align-items-center justify-content-center">
					<div className="container mt-4">
						<div className="card py-5">
							<div className="row g-0">
								<div className="col col-xl-5">
									<div className="card-body p-4">
										<h1 className="display-1">
											<span className="text-primary">4</span>
											<span className="text-danger">0</span>
											<span className="text-success">4</span>
										</h1>

										<h2 className="font-weight-bold display-4">Página no encontrada</h2>
										<p>
											Es posible que haya escrito mal la dirección
											<br />
											o
											<br />
											que la página se haya movido.
										</p>
										<div className="mt-5 d-flex align-items-center justify-content-center">
											<NavLink to={`${process.env.PUBLIC_URL}/`} className="btn btn-primary btn-lg radius-30 my-2">
												Regresar al inicio
											</NavLink>
										</div>
									</div>
								</div>
								<div className="col-xl-7">
									<img src={`${process.env.PUBLIC_URL}/assets/images/error_404.png`} className="img-fluid" alt="" style={{ height: '100%', objectFit: 'contain' }} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
