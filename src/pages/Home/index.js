import React, { useRef } from 'react'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import Slider from 'react-slick'
import Lottie from 'lottie-react'
import StudyAndResearch from 'assets/study-and-research.json'

function SliderPrincipal(props) {
	const slickNew = useRef(null)
	const slider = [
		{
			imagen: `url(${process.env.PUBLIC_URL}/assets/images/1.jpg),linear-gradient(180deg,#2b87da 0%,#29c4a9 100%)`,
			titulo: 'LA TECNOLOGÍA PARA APRENDER.',
			subtitulo: 'Esta nueva metodología ayuda a los usos tecnológicos y no únicamente asegurar el dominio de una serie de herramientas informáticas.',
		},
		{
			imagen: `url(${process.env.PUBLIC_URL}/assets/images/2.jpg),linear-gradient(180deg,#2b87da 0%,#29c4a9 100%)`,

			titulo: 'TRANSFORMACIÓN PARA LA INNOVACIÓN EN EDUCACIÓN UNIVERSITARIA',
			subtitulo:
				'Esta modalidad académica en la UNELLEZ ha incorporado nuevas metodologías de estudio y aprendizaje a través del uso de las Tecnologías de Información y Comunicación.',
		},
	]

	return (
		<div className="et_pb_section et_pb_section_1 et_pb_inner_shadow et_pb_fullwidth_section et_section_regular section_has_divider et_pb_bottom_divider">
			<div className="et_pb_module et_pb_fullwidth_slider_0 et_pb_slider et_pb_bg_layout_dark" data-active-slide="et_pb_slide_0">
				<Slider
					dots={false}
					infinite={true}
					speed={500}
					arrows={false}
					autoplay={true}
					prevArrow={false}
					nextArrow={false}
					dotsClass="slick-dots slick-thumb"
					className="et_pb_slides"
					slidesToShow={1}
					slidesToScroll={1}
					initialSlide={0}
					ref={c => (slickNew.current = c)}>
					{slider.map((item, index) => {
						return (
							<React.Fragment key={index}>
								<div
									className="et_pb_slide et_pb_slide_0 et_pb_bg_layout_dark et_pb_media_alignment_center et_pb_slider_with_text_overlay et-pb-active-slide"
									style={{
										backgroundImage: item.imagen,
										backgroundColor: '#7EBEC5',
									}}>
									<div className="et_pb_container clearfix" style={{ height: '757.933px' }}>
										<div className="et_pb_slider_container_inner">
											<div className="et_pb_slide_description">
												<Zoom>
													<div className="et_pb_text_overlay_wrapper">
														<h1 className="et_pb_slide_title">{item.titulo}</h1>
														<div className="et_pb_slide_content" onClick={() => console.log(slickNew)}>
															<p>{item.subtitulo}</p>
														</div>
													</div>
												</Zoom>
											</div>
										</div>
									</div>
								</div>
							</React.Fragment>
						)
					})}
				</Slider>
			</div>

			<div className="et_pb_bottom_inside_divider"></div>
		</div>
	)
}

function PrimeraSeccion(props) {
	return (
		<div className="et_pb_section et_pb_section_2 et_section_specialty">
			<div className="et_pb_row">
				<div className="et_pb_column et_pb_column_2_3 et_pb_column_1 et_pb_specialty_column et_pb_css_mix_blend_mode_passthrough">
					<div className="et_pb_row_inner et_pb_row_inner_0">
						<div className="et_pb_column et_pb_column_4_4 et_pb_column_inner et_pb_column_inner_0 et-last-child">
							<Fade top>
								<div className="et_pb_module et_pb_text et_pb_text_0 et_pb_text_align_left et_pb_bg_layout_light">
									<div className="et_pb_text_inner">
										<h2>La implementación de la modalidad educativa a distancia en la UNELLEZ tiene como objetivos principales:</h2>
										<h3>Educación a Distancia UNELLEZ</h3>
									</div>
								</div>
							</Fade>
						</div>
					</div>
					<div className="et_pb_row_inner et_pb_row_inner_1">
						<div className="et_pb_column et_pb_column_1_3 et_pb_column_inner et_pb_column_inner_1">
							<div className="et_pb_module et_pb_image et_pb_image_0 ">
								<span className="et_pb_image_wrap">
									<Zoom>
										<img
											loading="lazy"
											src={`${process.env.PUBLIC_URL}/assets/images/icon-img-3.jpg`}
											alt=""
											title="icon-img-3"
											className="wp-image-194"
											width="auto"
											height="auto"
										/>
									</Zoom>
								</span>
							</div>
							<div className="et_pb_module et_pb_divider et_pb_divider_0 et_pb_divider_position_ et_pb_space">
								<div className="et_pb_divider_internal"></div>
							</div>
							<Zoom>
								<div className="et_pb_module et_pb_cta_0  et_hover_enabled et_pb_promo et_pb_text_align_left et_pb_bg_layout_light">
									<div className="et_pb_promo_description">
										<h2 className="et_pb_module_header">PROFESIONALIZACIÓN</h2>
										<div>
											<p style={{ textAlign: 'justify' }}>
												Brindar la oportunidad de profesionalización y/o realización de estudios de postgrado a los egresados de educación superior de acuerdo a los
												requerimientos del país
											</p>
										</div>
									</div>
								</div>
							</Zoom>
						</div>

						<div className="et_pb_column et_pb_column_1_3 et_pb_column_inner et_pb_column_inner_2 et-last-child">
							<div className="et_pb_module et_pb_image et_pb_image_1 ">
								<span className="et_pb_image_wrap">
									<Zoom>
										<img
											loading="lazy"
											src={`${process.env.PUBLIC_URL}/assets/images/icon-img-1.jpg`}
											alt=""
											title="icon-img-1"
											className="wp-image-192"
											width="auto"
											height="auto"
										/>
									</Zoom>
								</span>
							</div>
							<div className="et_pb_module et_pb_divider et_pb_divider_1 et_pb_divider_position_ et_pb_space">
								<div className="et_pb_divider_internal"></div>
							</div>
							<Zoom>
								<div className="et_pb_module et_pb_cta_1  et_hover_enabled et_pb_promo et_pb_text_align_left et_pb_bg_layout_light">
									<div className="et_pb_promo_description">
										<h2 className="et_pb_module_header">OFERTA</h2>
										<div>
											<p style={{ textAlign: 'justify' }}>
												Diversificar la oferta educativa a través de la creación, desarrollo y promoción de modalidades educativas que amplíen su cobertura, dirigida
												preferencialmente a personas que por su situación geográfica, laboral, física y socioeconómica no pueden asistir regularmente a las Instituciones de
												Educación Superior (IES).
											</p>
										</div>
									</div>
								</div>
							</Zoom>
						</div>
					</div>
				</div>
				<div className="et_pb_column et_pb_column_1_3 et_pb_column_2 et_pb_css_mix_blend_mode_passthrough et_pb_column_single">
					<div className="et_pb_module et_pb_image et_pb_image_2 et-animated et_had_animation">
						<span className="et_pb_image_wrap">
							<Zoom>
								<img
									loading="lazy"
									src={`${process.env.PUBLIC_URL}/assets/images/icon-img-2.jpg`}
									alt=""
									title="icon-img-2"
									className="wp-image-193"
									width="auto"
									height="auto"
								/>
							</Zoom>
						</span>
					</div>
					<div className="et_pb_module et_pb_divider et_pb_divider_2 et_pb_divider_position_ et_pb_space">
						<div className="et_pb_divider_internal"></div>
					</div>
					<Zoom>
						<div className="et_pb_module et_pb_cta_2  et_hover_enabled et_pb_promo et_pb_text_align_left et_pb_bg_layout_light">
							<div className="et_pb_promo_description">
								<h2 className="et_pb_module_header">INCLUSIÓN</h2>
								<div>
									<p style={{ textAlign: 'justify' }}>
										Atender la demanda educativa, que permita una mayor inclusión de egresados de educación media en el sistema de educación superior, garantizando la
										calidad de talento humano, en términos de eficacia, eficiencia y pertinencia, respondiendo de esta manera a los requerimientos actuales de la sociedad
										del conocimiento y sustentándose en los avances científicos, tecnológicos y comunicacionales.
									</p>
								</div>
							</div>
						</div>
					</Zoom>
				</div>
			</div>
		</div>
	)
}

function SegundaSeccion(props) {
	return (
		<div className="et_pb_section et_pb_section_3 et_pb_with_background et_section_regular">
			<div className="et_pb_row et_pb_row_1">
				<div className="et_pb_column et_pb_column_1_2 et_pb_column_3 et_pb_css_mix_blend_mode_passthrough">
					<div className="et_pb_module et_pb_text et_pb_text_1 et_pb_text_align_left et_pb_bg_layout_light">
						<Zoom>
							<div className="et_pb_text_inner">
								<h3>Programa de Formación en EVEA</h3>
							</div>
						</Zoom>
					</div>
					<Zoom bottom>
						<div className="et_pb_module et_pb_blurb et_pb_blurb_0 et_pb_text_align_left et_pb_blurb_position_left et_pb_bg_layout_light">
							<div className="et_pb_blurb_content">
								<div className="et_pb_main_blurb_image">
									<span className="et_pb_image_wrap">
										<img
											loading="lazy"
											src={`${process.env.PUBLIC_URL}/assets/images/coding-iconArtboard-19-copy-8.jpg`}
											alt=""
											className=" et_pb_animation_top wp-image-109"
											width="128"
											height="128"
										/>
									</span>
								</div>
								<div className="et_pb_blurb_container">
									<h4 className="et_pb_module_header">
										<span>FEVEA</span>
									</h4>
									<div className="et_pb_blurb_description">
										<p>
											Facilitación en Entornos Virtuales de Enseñanza y Aprendizaje. Diseñado para formar facilitadores que desarrollen las habilidades, destrezas y
											competencias requeridas en los entornos de enseñanza y aprendizaje virtual&nbsp;
										</p>
									</div>
								</div>
							</div>
						</div>
					</Zoom>
					<Zoom bottom>
						<div className="et_pb_module et_pb_blurb et_pb_blurb_1 et_pb_text_align_left et_pb_blurb_position_left et_pb_bg_layout_light">
							<div className="et_pb_blurb_content">
								<div className="et_pb_main_blurb_image">
									<span className="et_pb_image_wrap">
										<img
											loading="lazy"
											src={`${process.env.PUBLIC_URL}/assets/images/coding-icon_4.jpg`}
											alt=""
											className=" et_pb_animation_top wp-image-106"
											width="128"
											height="128"
										/>
									</span>
								</div>
								<div className="et_pb_blurb_container">
									<h4 className="et_pb_module_header">
										<span>DIEVEA</span>
									</h4>
									<div className="et_pb_blurb_description">
										<p>
											Diseño Instruccional en Entornos Virtuales de Enseñanza y Aprendizaje. Cuyo objetivo principal es el adquirir los conocimientos filosóficos, teóricos
											y técnicos.
										</p>
									</div>
								</div>
							</div>
						</div>
					</Zoom>
					<Zoom bottom>
						<div className="et_pb_module et_pb_blurb et_pb_blurb_2 et_pb_text_align_left et_pb_blurb_position_left et_pb_bg_layout_light">
							<div className="et_pb_blurb_content">
								<div className="et_pb_main_blurb_image">
									<span className="et_pb_image_wrap">
										<img
											loading="lazy"
											src={`${process.env.PUBLIC_URL}/assets/images/coding-iconArtboard-19-copy-10.jpg`}
											alt=""
											className=" et_pb_animation_top wp-image-113"
											width="128"
											height="128"
										/>
									</span>
								</div>
								<div className="et_pb_blurb_container">
									<h4 className="et_pb_module_header">
										<span>GEVEA</span>
									</h4>
									<div className="et_pb_blurb_description">
										<p>
											Gestión en Entornos Virtuales de Enseñanza y Aprendizaje. Mediante la creación de cursos en Entornos Virtuales de Enseñanza y Aprendizaje, empleando
											herramientas fundamentales de los Sistemas de Gestión de Aprendizajes.
										</p>
									</div>
								</div>
							</div>
						</div>
					</Zoom>
				</div>
				<div className="et_pb_column et_pb_column_1_2 et_pb_column_4 et_pb_css_mix_blend_mode_passthrough et-last-child">
					<div className="et_pb_module dsm_lottie dsm_lottie_0">
						<div className="et_pb_module_inner">
							<Zoom bottom>
								<Lottie animationData={StudyAndResearch} loop={true} />
							</Zoom>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

function TerceraSeccion(props) {
	return (
		<div className="et_pb_section et_pb_section_4 et_section_specialty">
			<div className="et_pb_row">
				<div className="et_pb_column et_pb_column_1_3 et_pb_column_5 et_pb_css_mix_blend_mode_passthrough et_pb_column_single">
					<div className="et_pb_module et_pb_text et_pb_text_2  et_pb_text_align_left et_pb_bg_layout_light">
						<Zoom>
							<div className="et_pb_text_inner">
								<h2 className="heading-color">NUEVOS CURSOS</h2>
							</div>
						</Zoom>
					</div>
					<div className="et_pb_module et_pb_divider et_pb_divider_3  et_pb_divider_position_ et_pb_space">
						<div className="et_pb_divider_internal"></div>
					</div>
					<div className="et_pb_module et_pb_text et_pb_text_3  et_pb_text_align_left et_pb_bg_layout_light">
						<Zoom>
							<div className="et_pb_text_inner">
								<h4>Nuestros cursos son actualizados constanstemente</h4>
								<p>&nbsp;</p>
							</div>
						</Zoom>
					</div>
				</div>
				<div className="et_pb_column et_pb_column_2_3 et_pb_column_6 et_pb_specialty_column et_pb_css_mix_blend_mode_passthrough et-last-child">
					<div className="et_pb_row_inner et_pb_row_inner_2  et_pb_gutters1">
						<div className="et_pb_column et_pb_column_4_4 et_pb_column_inner et_pb_column_inner_3 et_pb_column_1_2 et-last-child">
							<Zoom bottom>
								<div className="et_pb_module et_pb_blurb et_pb_blurb_3  et_pb_text_align_left et_pb_blurb_position_left et_pb_bg_layout_light">
									<div className="et_pb_blurb_content">
										<div className="et_pb_blurb_container">
											<h4 className="et_pb_module_header">
												<a href="#">Diplomado de Formación en Entornos Virtuales de Enseñanza Aprendizaje (PFVEA</a>
											</h4>
											<div className="et_pb_blurb_description">
												<p>
													Este Programa de Formación y Capacitación cuenta con tres cursos fundamentales en la preparación de los docentes que deseen incursionar en el mundo
													virtual para el proceso de enseñanza y aprendizaje.
												</p>
											</div>
										</div>
									</div>
								</div>
							</Zoom>
							<Zoom bottom>
								<div className="et_pb_module et_pb_blurb et_pb_blurb_4  et_pb_text_align_left et_pb_blurb_position_left et_pb_bg_layout_light">
									<div className="et_pb_blurb_content">
										<div className="et_pb_blurb_container">
											<h4 className="et_pb_module_header">
												<a href="#">Diseño Multimedia para Cursos E-learning</a>
											</h4>
											<div className="et_pb_blurb_description">
												<p>
													La educación a distancia ha aumentado considerablemente en los últimos años, este incremento ha requerido que se desarrollen estándares para su
													diseño, aplicación e implementación de técnicas para este tipo de procesos de enseñanza y aprendizaje.
												</p>
											</div>
										</div>
									</div>
								</div>
							</Zoom>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default function index(props) {
	return (
		<>
			<SliderPrincipal {...props} />

			<PrimeraSeccion {...props} />

			<SegundaSeccion {...props} />

			<TerceraSeccion {...props} />
		</>
	)
}
