import React, { useState } from 'react'

import SvgIcon from '@material-ui/core/SvgIcon'
import { NavLink, useLocation } from 'react-router-dom'
import Zoom from 'react-reveal/Zoom'
import { ReactComponent as MenuIcon } from 'assets/icons/bx-menu.svg'

function Header(props) {
	const location = useLocation()

	const [state, setState] = useState({ menuOpen: false })
	return (
		<div className="et_pb_section et_pb_section_0 et_pb_with_background et_section_regular">
			<div className="et_pb_row et_pb_row_0 et_pb_row--with-menu" style={{ zIndex: 3 }}>
				<div className="et_pb_column et_pb_column_4_4 et_pb_column_0 et_pb_css_mix_blend_mode_passthrough et-last-child et_pb_column--with-menu">
					<div className="et_pb_module et_pb_menu et_pb_menu_0 et_pb_bg_layout_light et_pb_text_align_right et_dropdown_animation_fade et_pb_menu--with-logo et_pb_menu--style-left_aligned">
						<div className="et_pb_menu_inner_container clearfix">
							<div className="et_pb_menu__logo-wrap">
								<div className="et_pb_menu__logo">
									<NavLink to={`${process.env.PUBLIC_URL}/`} className="">
										<img
											src={`${process.env.PUBLIC_URL}/assets/images/logoportal2-removebg-preview.png`}
											alt=""
											sizes="(max-width: 350px) 100vw, 350px"
											className="wp-image-85"
											width="auto"
											height="auto"
										/>
									</NavLink>
								</div>
							</div>
							<div className="et_pb_menu__wrap">
								<div className="et_pb_menu__menu">
									<nav className="et-menu-nav">
										<ul id="menu-principal" className="et-menu nav downwards">
											<li
												id="menu-item-177"
												className={`et_pb_menu_page_id-home menu-item menu-item-type-post_type menu-item-object-page menu-item-home  page_item page-item-170 current_page_item menu-item-177 ${
													location.pathname === `${process.env.PUBLIC_URL}/` ? 'current-menu-item' : ''
												} `}>
												<NavLink to={`${process.env.PUBLIC_URL}/`} className="">
													Inicio
												</NavLink>
											</li>
											<li id="menu-item-190" className="et_pb_menu_page_id-190 menu-item menu-item-type-custom menu-item-object-custom menu-item-190">
												<a href="https://unellez.edu.ve/portal/" target={'_blank'} rel="noopener noreferrer">
													Portal UNELLEZ
												</a>
											</li>
											<li
												id="menu-item-179"
												className={`et_pb_menu_page_id-51 menu-item menu-item-type-post_type menu-item-object-page menu-item-179 ${
													location.pathname === `${process.env.PUBLIC_URL}/plataformas-virtuales` ? 'current-menu-item' : ''
												} `}>
												<NavLink to={`${process.env.PUBLIC_URL}/plataformas-virtuales`} className="">
													Campus Chuao
												</NavLink>
											</li>

											<li
												id="menu-item-178"
												className={`et_pb_menu_page_id-95 menu-item menu-item-type-post_type menu-item-object-page menu-item-178 ${
													location.pathname === `${process.env.PUBLIC_URL}/quienes-somos` ? 'current-menu-item' : ''
												} `}>
												<NavLink to={`${process.env.PUBLIC_URL}/quienes-somos`} className="">
													Quienes Somos
												</NavLink>
											</li>
										</ul>
									</nav>
								</div>

								<div className="et_mobile_nav_menu">
									<a className="mobile_nav closed" onClick={() => setState({ ...state, menuOpen: !state.menuOpen })}>
										<span className="mobile_menu_bar">
											<SvgIcon component={MenuIcon} className="" />
										</span>

										<Zoom>
											<ul id="mobile_menu1" className={`et_mobile_menu ${state.menuOpen ? 'd-block' : 'd-none'}`}>
												<li
													id="menu-item-177"
													className={`et_pb_menu_page_id-home menu-item menu-item-type-post_type menu-item-object-page menu-item-home page_item page-item-170 current_page_item menu-item-177 et_first_mobile_item ${
														location.pathname === `${process.env.PUBLIC_URL}/` ? 'current-menu-item' : ''
													} `}>
													<NavLink to={`${process.env.PUBLIC_URL}/`} className="" aria-current="page">
														Inicio
													</NavLink>
												</li>
												<li id="menu-item-190" className="et_pb_menu_page_id-190 menu-item menu-item-type-custom menu-item-object-custom menu-item-190">
													<a href="https://unellez.edu.ve/portal/" target={'_blank'} rel="noopener noreferrer">
														Portal UNELLEZ
													</a>
												</li>
												<li
													id="menu-item-179"
													className={`et_pb_menu_page_id-51 menu-item menu-item-type-post_type menu-item-object-page menu-item-179 ${
														location.pathname === `${process.env.PUBLIC_URL}/plataformas-virtuales` ? 'current-menu-item' : ''
													} `}>
													<NavLink to={`${process.env.PUBLIC_URL}/plataformas-virtuales`} className="">
														Campus Chuao
													</NavLink>
												</li>
												<li
													id="menu-item-178"
													className={`et_pb_menu_page_id-95 menu-item menu-item-type-post_type menu-item-object-page menu-item-178 ${
														location.pathname === `${process.env.PUBLIC_URL}/quienes-somos` ? 'current-menu-item' : ''
													} `}>
													<NavLink to={`${process.env.PUBLIC_URL}/quienes-somos`} className="">
														Quienes Somos
													</NavLink>
												</li>
											</ul>
										</Zoom>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

function Principal(props) {
	return <Header {...props} />
}

export default Principal
