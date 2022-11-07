import React from 'react'

import SvgIcon from '@material-ui/core/SvgIcon'
import { ReactComponent as MailIcon } from 'assets/icons/bx-envelope.svg'
import { ReactComponent as MapIcon } from 'assets/icons/bx-map.svg'
import { ReactComponent as PhoneIcon } from 'assets/icons/bx-phone.svg'

export default function Footer(props) {
	return (
		<div className="et_pb_section et_pb_section_6 et_pb_with_background et_section_regular">
			<div className="et_pb_row et_pb_row_3">
				<div className="et_pb_column et_pb_column_1_3 et_pb_column_8 et_pb_css_mix_blend_mode_passthrough">
					<div className="et_pb_module et_pb_image et_pb_image_3">
						<span className="et_pb_image_wrap">
							<img
								loading="lazy"
								src={`${process.env.PUBLIC_URL}/assets/images/logoportal2-removebg-preview.png`}
								alt=""
								title="logoportal2-removebg-preview"
								sizes="(max-width: 350px) 100vw, 350px"
								className="wp-image-85"
								width="auto"
								height="auto"
							/>
						</span>
					</div>
				</div>
				<div className="et_pb_column et_pb_column_2_3 et_pb_column_9 et_pb_css_mix_blend_mode_passthrough et-last-child">
					<div className="et_pb_module dsm_text_divider dsm_text_divider_0">
						<div className="et_pb_module_inner">
							<div className="dsm-text-divider-wrapper dsm-text-divider-align-center et_pb_bg_layout_dark">
								<div className="dsm-text-divider-before dsm-divider"></div>
								<h3 className="dsm-text-divider-header et_pb_module_header">
									<span>CONTACTO</span>
								</h3>
								<div className="dsm-text-divider-after dsm-divider"></div>
							</div>
						</div>
					</div>
					<div className="et_pb_with_border et_pb_module dsm_icon_list dsm_icon_list_0">
						<div className="et_pb_module_inner">
							<ul className="dsm_icon_list_items">
								<li className="dsm_icon_list_child dsm_icon_list_child_0">
									<span className="dsm_icon_list_icon">
										<SvgIcon component={MapIcon} className="" />
									</span>
									<span className="dsm_icon_list_text">Dirección de Innovación y Tecnología de Educación a Distancia UNELLEZ, Pabellon I Barinas Venezuela.</span>
								</li>
								<li className="dsm_icon_list_child dsm_icon_list_child_1">
									<span className="dsm_icon_list_icon">
										<SvgIcon component={PhoneIcon} className="" />
									</span>
									<span className="dsm_icon_list_text">(+58) 0273-530-2195</span>
								</li>
								<li className="dsm_icon_list_child dsm_icon_list_child_2">
									<span className="dsm_icon_list_icon">
										<SvgIcon component={MailIcon} className="" />
									</span>
									<span className="dsm_icon_list_text">ditedunellez@gmail.com</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
