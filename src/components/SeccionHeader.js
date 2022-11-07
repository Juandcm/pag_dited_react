import React from 'react'

import Fade from 'react-reveal/Fade'
export default function index(props) {
	return (
		<div className="et_pb_section et_pb_section_1 et_pb_fullwidth_section et_section_regular section_has_divider et_pb_bottom_divider">
			<section className="et_pb_with_border et_pb_module et_pb_fullwidth_header et_pb_fullwidth_header_0 et_pb_section_parallax et_pb_text_align_center et_pb_bg_layout_dark">
				<span className="et_parallax_bg_wrap">
					<span
						className="et_parallax_bg"
						style={{
							backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/video.jpg)`,
							height: props.height,
							transform: props.translate,
						}}></span>
				</span>

				<Fade>
					<div className="et_pb_fullwidth_header_container center">
						<div className="header-content-container center">
							<div className="header-content">
								<div className="et_pb_header_content_wrapper">
									<div
										style={{
											paddingLeft: '0px',
											paddingTop: '10px',
											textAlign: 'justify',
											backgroundColor: 'rgba(0, 0, 0, 0.3)',
											padding: '30px',
											borderRadius: '3px',
										}}>
										<h1 className="et_pb_module_header" style={{ marginBottom: '30px' }}>
											{props.titulo}
										</h1>
										<div>
											<p>{props.subtitulo}</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Fade>
				<div className="et_pb_fullwidth_header_overlay"></div>
				<div className="et_pb_fullwidth_header_scroll"></div>
			</section>

			<div className="et_pb_bottom_inside_divider"></div>
		</div>
	)
}
