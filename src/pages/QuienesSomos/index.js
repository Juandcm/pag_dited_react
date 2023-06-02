import React, { useRef } from 'react'
import Slider from 'react-slick'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import SvgIcon from '@material-ui/core/SvgIcon'
import { ReactComponent as RightIcon } from 'assets/icons/bx-chevron-right.svg'
import { ReactComponent as LeftIcon } from 'assets/icons/bx-chevron-left.svg'
import SeccionHeader from 'components/SeccionHeader'

function HistoriaDited(props) {
	return (
		<div className="et_pb_section et_pb_section_2 et_pb_with_background et_section_regular">
			<div className="et_pb_row et_pb_row_1">
				<div className="et_pb_column et_pb_column_4_4 et_pb_column_1 et_pb_css_mix_blend_mode_passthrough et-last-child">
					<Zoom>
						<div className="et_pb_module et_pb_text et_pb_text_0 et_pb_text_align_left et_pb_bg_layout_light et_had_animation">
							<div className="et_pb_text_inner font-20">BREVE HISTORIA DE LA EDUCACIÓN A DISTANCIA</div>
						</div>
					</Zoom>
					<div className="et_pb_module et_pb_divider et_pb_divider_0 et_pb_divider_position_ et_pb_space et_had_animation">
						<div className="et_pb_divider_internal"></div>
					</div>
					<div className="et_pb_module et_pb_text et_pb_text_1 et_pb_text_align_left et_pb_bg_layout_light et_had_animation">
						<div className="et_pb_text_inner">
							<div
								style={{
									display: 'flex',
									justifyContent: 'space-between',
									flexWrap: 'wrap',
								}}>
								<h4>Por Prof. Dexi Azuaje</h4>
								<p>
									<span>Coordinadora de Recursos de Enseñanza y Aprendizaje</span>
								</p>
							</div>
							<p>Barinas, 3 de Mayo de 2019</p>
						</div>
					</div>
					<Fade>
						<div className="et_pb_module et_pb_blurb et_pb_blurb_0 et_pb_text_align_left et_pb_blurb_position_left et_pb_bg_layout_light et_had_animation">
							<div className="et_pb_blurb_content">
								<div className="et_pb_main_blurb_image">
									<span className="et_pb_image_wrap">
										<span className=" et_pb_animation_top et-pb-icon et-animated">
											<IconCheck />
										</span>
									</span>
								</div>
								<div className="et_pb_blurb_container">
									<div className="et_pb_blurb_description">
										Los estudios a distancia se inician de manera oficial en la Universidad Nacional Experimental de Los Llanos Occidentales Ezequiel Zamora (UNELLEZ) con
										la aprobación del Reglamento de Estudios a Distancia por parte del Consejo Directivo el 20 de abril de 2009 según Resolución Nº CD/2009/275 Punto 21.
										<p></p>
										<p>
											En la UNELLEZ, la modalidad educativa a distancia tiene como propósito atender a la inclusión, en la Universidad, de egresados de educación media,
											superior y población en general, garantizando la calidad en la formación de talentos en términos de eficacia, eficiencia y pertinencia, respondiendo
											a directrices del Proyecto Simón Bolívar como lo son la Suprema Felicidad Social y el Nuevo Modelo Productivo socialista; de igual manera, para dar
											respuesta a los avances científicos, tecnológicos y comunicacionales inmersos en la sociedad del conocimiento. Esta modalidad de estudios constituye
											un lineamiento de carácter nacional cuyo máximo organismo responsable es la Oficina de Planificación del Sector Universitario (OPSU).
										</p>
										<p>
											En el Reglamento de los Estudios a Distancia de la UNELLEZ se establece que los objetivos de los estudios a distancia en la UNELLEZ se lograrán
											mediante una relación alumno(a)-profesor(a)-alumno(a) en la cual la presencia física en clases regulares no es determinante para su logro; el
											estudiante es responsable de su propio aprendizaje y los procesos y relaciones de aprendizaje se establecen con predominancia de las Tecnologías de
											la Información y la Comunicación (TIC) y el uso de otros medios.
										</p>
										<p>
											Con el propósito de operacionalizar la oferta de estudios por la modalidad a distancia, se crea una instancia directiva denominada Secretaría
											Ejecutiva de Estudios a Distancia, adscrita al Rectorado.
											<strong>Hoy en día llamada Dirección de Innovación y Tecnología en Educación a Distancia</strong>
											está conformada por el(la) Director(a) Innovación y Tecnología en Educación a Distancia quien la dirige a cuatros coordinaciones, que son las
											siguientes: Coordinacion de Recursos de Enseñanza y Aprendizaje, Coordinacion de Gestión Administrativa, Coordinación de Recursos Tecnologicos y la
											Coordinacion de Interacción Virtual.
										</p>
										<p>
											De igual manera es importante señalar que las Políticas, Programas y Proyectos realizados por la Direccion y estas 4 Coordinaciones Técnico
											Académicas son ejecutados a través de los Programas de Educación a Distancia en cada uno de los Vicerrectorados.
										</p>
										<p>
											El primero de Julio del año 2009, emerge hacia la colectividad esta propuesta con la apertura del Portal de los Estudios a Distancia de la UNELLEZ,
											la instalación la Plataforma Moodle y la creación del primer campus virtual para el Programa de Formación en Entornos Virtuales de Enseñanza y
											Aprendizaje (PFEVEA).
										</p>
										<p>
											Hoy a diez años de su nacimiento, agradecemos a todos los que nos han acompañado en hacer realidad este proyecto en la UNELLEZ. Gracias… muchas
											gracias.
										</p>
									</div>
								</div>
							</div>
						</div>
					</Fade>
				</div>
			</div>
		</div>
	)
}

const IconCheck = props => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" {...props} style={{ fill: '#0c71c3' }}>
			<path d="m2.394 13.742 4.743 3.62 7.616-8.704-1.506-1.316-6.384 7.296-3.257-2.486zm19.359-5.084-1.506-1.316-6.369 7.279-.753-.602-1.25 1.562 2.247 1.798z" />
		</svg>
	)
}

function Objetivos(props) {
	return (
		<div className="et_pb_section et_pb_section_2 et_pb_with_background et_section_regular">
			<div className="et_pb_row et_pb_row_1">
				<div className="et_pb_column et_pb_column_1_2 et_pb_column_2 et_pb_css_mix_blend_mode_passthrough">
					<Zoom bottom>
						<div className="et_pb_module et_pb_text et_pb_text_2  et_pb_text_align_left et_pb_bg_layout_light">
							<div className="et_pb_text_inner">OBJETIVOS</div>
						</div>
					</Zoom>
					<div className="et_pb_module et_pb_divider et_pb_divider_1  et_pb_divider_position_ et_pb_space">
						<div className="et_pb_divider_internal"></div>
					</div>
					<Zoom bottom>
						<div className="et_pb_module et_pb_text et_pb_text_3  et_pb_text_align_left et_pb_bg_layout_light">
							<div className="et_pb_text_inner">
								<h4>La implementación de la modalidad educativa a distancia en la UNELLEZ tiene como objetivos principales</h4>
							</div>
						</div>
					</Zoom>
					<Zoom bottom>
						<div className="et_pb_module et_pb_blurb et_pb_blurb_1  et_pb_text_align_left et_pb_blurb_position_left et_pb_bg_layout_light">
							<div className="et_pb_blurb_content">
								<div className="et_pb_main_blurb_image">
									<span className="et_pb_image_wrap">
										<span className=" et_pb_animation_top et-pb-icon">
											<IconCheck />
										</span>
									</span>
								</div>
								<div className="et_pb_blurb_container">
									<div className="et_pb_blurb_description">
										Diversificar la oferta educativa a través de la creación, desarrollo y promoción de modalidades educativas que amplíen su cobertura, dirigida
										preferencialmente a personas que por su situación geográfica, laboral, física y socioeconómica no pueden asistir regularmente a las Instituciones de
										Educación Superior (IES).
									</div>
								</div>
							</div>
						</div>
					</Zoom>
				</div>
				<div className="et_pb_column et_pb_column_1_2 et_pb_column_3 et_pb_css_mix_blend_mode_passthrough et-last-child">
					<Zoom bottom>
						<div className="et_pb_module et_pb_blurb et_pb_blurb_2  et_pb_text_align_left et_pb_blurb_position_left et_pb_bg_layout_light">
							<div className="et_pb_blurb_content">
								<div className="et_pb_main_blurb_image">
									<span className="et_pb_image_wrap">
										<span className=" et_pb_animation_top et-pb-icon">
											<IconCheck />
										</span>
									</span>
								</div>
								<div className="et_pb_blurb_container">
									<div className="et_pb_blurb_description">
										Atender la demanda educativa, que permita una mayor inclusión de egresados de educación media en el sistema de educación superior, garantizando la
										calidad de talento humano, en términos de eficacia, eficiencia y pertinencia, respondiendo de esta manera a los requerimientos actuales de la sociedad
										del conocimiento y sustentándose en los avances científicos, tecnológicos y comunicacionales.
									</div>
								</div>
							</div>
						</div>
					</Zoom>
					<Zoom bottom>
						<div className="et_pb_module et_pb_blurb et_pb_blurb_2  et_pb_text_align_left et_pb_blurb_position_left et_pb_bg_layout_light">
							<div className="et_pb_blurb_content">
								<div className="et_pb_main_blurb_image">
									<span className="et_pb_image_wrap">
										<span className=" et_pb_animation_top et-pb-icon">
											<IconCheck />
										</span>
									</span>
								</div>
								<div className="et_pb_blurb_container">
									<div className="et_pb_blurb_description">
										Ofrecer oportunidades de realizar actividades de investigación y/o extensión a la comunidad universitaria y a la población en general.
									</div>
								</div>
							</div>
						</div>
					</Zoom>
					<Zoom bottom>
						<div className="et_pb_module et_pb_blurb et_pb_blurb_2  et_pb_text_align_left et_pb_blurb_position_left et_pb_bg_layout_light">
							<div className="et_pb_blurb_content">
								<div className="et_pb_main_blurb_image">
									<span className="et_pb_image_wrap">
										<span className=" et_pb_animation_top et-pb-icon">
											<IconCheck />
										</span>
									</span>
								</div>
								<div className="et_pb_blurb_container">
									<div className="et_pb_blurb_description">
										Ofrecer oportunidades de realizar actividades de investigación y/o extensión a la comunidad universitaria y a la población en general.
									</div>
								</div>
							</div>
						</div>
					</Zoom>
				</div>
			</div>
		</div>
	)
}

function SliderTrabajadores(props) {
	const slickNew = useRef(null)

	const secciones = [
		{
			nombre_seccion: 'AUTORIDADES',
			slider: 4,
			data: [
				{
					foto: `${process.env.PUBLIC_URL}/assets/images/adan_chavez.jpeg`,
					nombre: 'Adán Chávez Frías',
					cargo: 'Rector de la Unellez',
				},
				{
					foto: `${process.env.PUBLIC_URL}/assets/images/albertosierra.jpeg`,
					nombre: 'Alberto Sierra',
					cargo: 'Director/DITED',
				},
				{
					foto: `${process.env.PUBLIC_URL}/assets/images/default.png`,
					nombre: 'Maria Alba Rondón',
					cargo: 'Coordinadora de Gestión Administrativa/DITED',
				},
				// {
				// 	foto: `${process.env.PUBLIC_URL}/assets/images/default.png`,
				// 	nombre: 'Dexi Azuaje',
				// 	cargo: 'Coordinadora de Recursos de Enseñanza Apredizaje/DITED',
				// },
				{
					foto: `${process.env.PUBLIC_URL}/assets/images/default.png`,
					nombre: 'Freddy Robles',
					cargo: 'Coordinador de Interacción Virtual/DITED',
				},
				// {
				// 	foto: `${process.env.PUBLIC_URL}/assets/images/default.png`,
				// 	nombre: 'Alexis Gonzales',
				// 	cargo: 'Coordinador de Tecnologia/DITED',
				// },
			],
		},
		{
			nombre_seccion: 'DITED CENTRAL',
			slider: 4,
			data: [
				{
					foto: `${process.env.PUBLIC_URL}/assets/images/default.png`,
					nombre: 'Yoselis Navas',
					cargo: 'CIV-DITED',
				},
				{
					foto: `${process.env.PUBLIC_URL}/assets/images/default.png`,
					nombre: 'Argenis Mujica',
					cargo: 'CRT-DITED',
				},
				{
					foto: `${process.env.PUBLIC_URL}/assets/images/default.png`,
					nombre: 'Marcos Vidal',
					cargo: 'CRT-DITED',
				},
				{
					foto: `${process.env.PUBLIC_URL}/assets/images/default.png`,
					nombre: 'Luz Marina Molina Molina',
					cargo: 'DITED',
				},
				{
					foto: `${process.env.PUBLIC_URL}/assets/images/default.png`,
					nombre: 'Yelitza Freites',
					cargo: 'CREA-DITED',
				},
				{
					foto: `${process.env.PUBLIC_URL}/assets/images/default.png`,
					nombre: 'Tivisay Mendez',
					cargo: 'CREA-DITED',
				},
				{
					foto: `${process.env.PUBLIC_URL}/assets/images/default.png`,
					nombre: 'Piña Mosquera Yennely Del Carmen',
					cargo: 'Administrativo activo CIV-DITED',
				},
				{
					foto: `${process.env.PUBLIC_URL}/assets/images/default.png`,
					nombre: 'Angel Olivar',
					cargo: 'CRT-DITED',
				},
				{
					foto: `${process.env.PUBLIC_URL}/assets/images/default.png`,
					nombre: 'Rommer Álvarez',
					cargo: 'CRT-DITED',
				},
				{
					foto: `${process.env.PUBLIC_URL}/assets/images/default.png`,
					nombre: 'Gilber Azuaje',
					cargo: 'CREA-DITED',
				},
				{
					foto: `${process.env.PUBLIC_URL}/assets/images/default.png`,
					nombre: 'Bertel Liliana',
					cargo: 'CRT-DITED',
				},
				{
					foto: `${process.env.PUBLIC_URL}/assets/images/default.png`,
					nombre: 'Jonnathan Arnoldo Garrido López',
					cargo: 'CREA-DITED',
				},
			],
		},
		{
			nombre_seccion: 'Programa de Innovación y Tecnologías de Educación a Distancia VPDS-Barinas',
			slider: 4,
			data: [
				{
					foto: `${process.env.PUBLIC_URL}/assets/images/default.png`,
					nombre: 'Carmen Plaza',
					cargo: 'Jefa de Unidad de Tecnologia/PITED VPDS',
				},
				{
					foto: `${process.env.PUBLIC_URL}/assets/images/default.png`,
					nombre: 'Andrea Glailyn Medina Piña',
					cargo: 'VPDS',
				},
				{
					foto: `${process.env.PUBLIC_URL}/assets/images/default.png`,
					nombre: 'Wladimir Hernandez',
					cargo: 'VPDS',
				},
				{
					foto: `${process.env.PUBLIC_URL}/assets/images/default.png`,
					nombre: 'Ruth Díaz',
					cargo: 'VPDS',
				},

				{
					foto: `${process.env.PUBLIC_URL}/assets/images/default.png`,
					nombre: 'Miguel Duque',
					cargo: 'Jefe de Programa de Innovación y Tecnologias en Educación a Distancia/PITED VPDS',
				},
				{
					foto: `${process.env.PUBLIC_URL}/assets/images/default.png`,
					nombre: 'Zoima Duque',
					cargo: 'Jefa de Unidad de Recursos de Enseñanza Aprendizaje/PITED VPDS',
				},
			],
		},
		{
			nombre_seccion: 'Programa de Innovación y Tecnologías de Educación a Distancia VPA-Portuguesa',
			slider: 3,
			data: [
				{
					foto: `${process.env.PUBLIC_URL}/assets/images/default.png`,
					nombre: 'Maritza Fernandez',
					cargo: 'Jefa de Programa de Innovación y Tecnologias en Educación a Distancia/PITED VPA',
				},
				{
					foto: `${process.env.PUBLIC_URL}/assets/images/default.png`,
					nombre: 'Jose Daniel Mendoza',
					cargo: 'Jefe de Unidad de Recursos de Enseñanza Aprendizaje/PITED VPA',
				},
				{
					foto: `${process.env.PUBLIC_URL}/assets/images/default.png`,
					nombre: 'Mariana C Gonzalez',
					cargo: 'Jefa de Unidad de Tecnologia/PITED VPA',
				},
			],
		},
		{
			nombre_seccion: 'Programa de Innovación y Tecnologías de Educación a Distancia VIPI-Cojedes',
			slider: 3,
			data: [
				{
					foto: `${process.env.PUBLIC_URL}/assets/images/default.png`,
					nombre: 'Xiomara Liberto',
					cargo: 'Jefa de Programa de Innovación y Tecnologias en Educación a Distancia/PITED VIPI',
				},
				{
					foto: `${process.env.PUBLIC_URL}/assets/images/default.png`,
					nombre: 'Yelitza Lara',
					cargo: 'Jefa de Unidad de Recursos de Enseñanza Aprendizaje/PITED VIPI',
				},
				{
					foto: `${process.env.PUBLIC_URL}/assets/images/default.png`,
					nombre: 'Britt Toledo',
					cargo: 'Jefa de Unidad de Tecnologia/PITED VIPI',
				},
			],
		},
		{
			nombre_seccion: 'Programa de Innovación y Tecnologías de Educación a Distancia VPDR-Apure',
			slider: 3,
			data: [
				{
					foto: `${process.env.PUBLIC_URL}/assets/images/default.png`,
					nombre: 'José Gutierrez',
					cargo: 'Jefe de Programa de Innovación y Tecnologias en Educación a Distancia/PITED VPDR',
				},
				{
					foto: `${process.env.PUBLIC_URL}/assets/images/default.png`,
					nombre: 'Oscar Galindo',
					cargo: 'Jefa de Unidad de Recursos de Enseñanza Aprendizaje/PITED VPDR',
				},
				{
					foto: `${process.env.PUBLIC_URL}/assets/images/default.png`,
					nombre: 'Rafael Montenegro',
					cargo: 'Jefa de Unidad de Tecnologia/PITED VPDR',
				},
			],
		},
		{
			nombre_seccion: 'SUBPROGRAMA NUCLEOS',
			slider: 4,
			data: [
				{
					foto: `${process.env.PUBLIC_URL}/assets/images/default.png`,
					nombre: 'Argenis Narvaez',
					cargo: 'Jefe de SubPrograma de Innovación y Tecnologias en Educación a Distancia/DITED',
				},
				{
					foto: `${process.env.PUBLIC_URL}/assets/images/default.png`,
					nombre: 'Carlos Hernandez',
					cargo: 'Jefe de SubPrograma de Innovación y Tecnologias en Educación a Distancia/DITED',
				},
				{
					foto: `${process.env.PUBLIC_URL}/assets/images/default.png`,
					nombre: 'RANGEL MONCADA LEONARDO ALFREDO',
					cargo: 'Administrativo activo- Subdited Santa Barbara',
				},
				{
					foto: `${process.env.PUBLIC_URL}/assets/images/default.png`,
					nombre: 'Alberto Aponte',
					cargo: 'Jefe de SubPrograma de Innovación y Tecnologias en Educación a Distancia/DITED',
				},
			],
		},
	]

	return secciones.map((item, index) => {
		return (
			<div key={index} className="et_pb_section et_pb_section_10 et_pb_with_background et_section_regular">
				<div className="et_pb_row et_pb_row_13">
					<div className="et_pb_column et_pb_column_4_4 et_pb_column_14 et_pb_css_mix_blend_mode_passthrough et-last-child">
						<Fade>
							<div className="et_pb_module et_pb_text et_pb_text_9 et_pb_text_align_left et_pb_bg_layout_light et_had_animation">
								<div className="et_pb_text_inner">
									<p>{item.nombre_seccion}</p>
								</div>
							</div>
						</Fade>
						<div className="et_pb_module et_pb_divider et_pb_divider_7 et_pb_divider_position_ et_pb_space et_had_animation">
							<div className="et_pb_divider_internal"></div>
						</div>
					</div>
				</div>
				<div className="et_pb_row et_pb_row_14">
					<div className="et_pb_column et_pb_column_4_4 et_pb_column_15 divilife-3-col-feature-blurb-slider et_pb_css_mix_blend_mode_passthrough et-last-child slick-initialized slick-slider">
						<Slider
							dots={true}
							infinite={true}
							speed={500}
							initialSlide={0}
							slidesToShow={item.slider}
							slidesToScroll={1}
							prevArrow={<SvgIcon component={LeftIcon} />}
							nextArrow={<SvgIcon component={RightIcon} />}
							responsive={[
								{
									breakpoint: 980,
									settings: {
										slidesToShow: 3,
									},
								},
								{
									breakpoint: 767,
									settings: {
										slidesToShow: 2,
									},
								},
								{
									breakpoint: 564,
									settings: {
										slidesToShow: 1,
									},
								},
							]}
							dotsClass="slick-dots slick-thumb"
							ref={c => (slickNew.current = c)}>
							{item.data.map((itemData, indexData) => {
								return (
									<Fade key={indexData}>
										<div
											key={indexData}
											className="et_pb_module et_pb_team_member et_pb_team_member_30 divilife-3-col-feature-blurb et_hover_enabled clearfix et_pb_text_align_center et_pb_bg_layout_light et_had_animation"
											style={{ width: '100%', display: 'inline-block' }}>
											<div className="et_pb_team_member_image  et_pb_animation_off et-animated">
												<img
													loading="lazy"
													src={itemData.foto}
													alt={itemData.nombre}
													sizes="(max-width: 300px) 100vw, 300px"
													className="wp-image-404"
													width="300"
													height="300"
												/>
											</div>
											<div className="et_pb_team_member_description">
												<h4 className="et_pb_module_header">{itemData.nombre}</h4>

												<div>{itemData.cargo}</div>
											</div>
										</div>
									</Fade>
								)
							})}
						</Slider>
					</div>
				</div>
			</div>
		)
	})
}

export default function index(props) {
	return (
		<>
			<SeccionHeader
				titulo="Quienes Somos"
				subtitulo="Dirección de Innovación y Tecnología en Educación a Distancia"
				height="582px"
				transform="translate(0px, 263.4px)"
			/>

			<HistoriaDited {...props} />

			<Objetivos {...props} />

			<SliderTrabajadores {...props} />
		</>
	)
}
