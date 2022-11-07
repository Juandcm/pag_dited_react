import React from 'react'
import SeccionHeader from 'components/SeccionHeader'

import Zoom from 'react-reveal/Zoom'

export default function index(props) {
	const secciones = [
		{
			nombre_seccion: 'PLATAFORMAS VIRTUALES',
			numero_columnas: 4,
			centrar: false,
			data: [
				{
					foto: `${process.env.PUBLIC_URL}/assets/images/1-Botones-OTOMACOS-VPDR-1.png`,
					nombre: 'APURE',
					url: 'http://edudigital.unellez.edu.ve/apure/otomacos/',
				},
				{
					foto: `${process.env.PUBLIC_URL}/assets/images/1-Botones-VARINA-VPDS-1.png`,
					nombre: 'BARINAS',
					url: 'https://varina.edudigital.unellez.edu.ve/',
				},
				{
					foto: `${process.env.PUBLIC_URL}/assets/images/1-Botones-CATHARY-VIPI.png`,
					nombre: 'COJEDES',
					url: 'http://edudigital.unellez.edu.ve/cojedes/cathary/',
				},
				{
					foto: `${process.env.PUBLIC_URL}/assets/images/1-Botones-COSPES-VPA.png`,
					nombre: 'PORTUGUESA',
					url: 'http://edudigital.unellez.edu.ve/cospes/',
				},
			],
		},
		{
			nombre_seccion: 'CAMPUS VIRTUALES UNELLEZ - CONVENIOS',
			numero_columnas: 4,
			centrar: false,
			data: [
				{
					foto: `${process.env.PUBLIC_URL}/assets/images/Botones-CampusCaribe.png`,
					nombre: '',
					url: 'https://caribe.unellez.org/',
				},
				{
					foto: `${process.env.PUBLIC_URL}/assets/images/Botones-Arawak.png`,
					nombre: '',
					url: 'https://arawak.unellez.org.ve/',
				},
				{
					foto: `${process.env.PUBLIC_URL}/assets/images/Botones-CampusSenna.png`,
					nombre: '',
					url: 'https://senna.unellez.org/',
				},
				{
					foto: `${process.env.PUBLIC_URL}/assets/images/Botones-CampusMariche2-b.png`,
					nombre: '',
					url: 'https://mariche.unellez.org/',
				},
			],
		},
		{
			nombre_seccion: 'PRODUCCIÓN, CREACIÓN Y GESTIÓN ACADEMICA',
			numero_columnas: 2,
			centrar: false,
			data: [
				{
					foto: `${process.env.PUBLIC_URL}/assets/images/Botone-Arse.png`,
					nombre: '',
					url: 'https://arse.unellez.edu.ve/arse/portal/login.php',
				},
				// {
				// 	foto: `${process.env.PUBLIC_URL}/assets/images/Botones-historico-ead.png`,
				// 	nombre: '',
				// 	url: 'https://unellez.edu.ve/edudigital/historico/',
				// },
				{
					foto: `${process.env.PUBLIC_URL}/assets/images/Botones-Nube-Edudital.png`,
					nombre: '',
					url: 'https://nube.unellez.org.ve/',
				},
			],
		},
		{
			nombre_seccion: 'FORMACIÓN Y CAPACITACIÓN',
			numero_columnas: 3,
			centrar: true,
			data: [
				{
					foto: `${process.env.PUBLIC_URL}/assets/images/Botones-Formacion.png`, //Cambiar por Campus Formación
					nombre: '',
					url: 'https://formacion.unellez.org/',
				},
			],
		},
		{
			nombre_seccion: 'ZONA CREA',
			numero_columnas: 3,
			centrar: false,
			data: [
				{
					foto: `${process.env.PUBLIC_URL}/assets/images/Botones-Formacion-DITED.png`,
					nombre: '',
					url: 'http://edudigital.unellez.edu.ve/formaciondited',
				},
				{
					foto: `${process.env.PUBLIC_URL}/assets/images/Botones-laboratorio-produccion.png`,
					nombre: '',
					url: 'http://edudigital.unellez.edu.ve/laboratorio',
				},
				{
					foto: `${process.env.PUBLIC_URL}/assets/images/Botones-Aulas-Modelo.png`,
					nombre: '',
					url: 'http://edudigital.unellez.edu.ve/aulasmodelo',
				},
			],
		},
		{
			nombre_seccion: 'COMUNICACIÓN e INTERACCIÓN VIRTUAL',
			numero_columnas: 3,
			centrar: false,
			data: [
				{
					foto: `${process.env.PUBLIC_URL}/assets/images/Soporte.png`,
					nombre: '',
					url: 'https://soporte.unellez.org.ve',
					// url: 'https://unellez.org.ve/soporte/public/',
				},
				{
					foto: `${process.env.PUBLIC_URL}/assets/images/Boton-radio.png`,
					nombre: '',
					url: 'http://radio.unellez.edu.ve:8000/RadioUnellez.ogg',
				},
				{
					foto: `${process.env.PUBLIC_URL}/assets/images/Botones-TV.png`,
					nombre: '',
					url: 'https://www.youtube.com/channel/UCeh3UoCbumvXsmt8QQtmz5Q',
				},
			],
		},

		{
			nombre_seccion: 'DITED',
			numero_columnas: 3,
			centrar: false,
			data: [
				{
					foto: `${process.env.PUBLIC_URL}/assets/images/Botones-TimotoCuicas.png`,
					nombre: '',
					url: 'http://edudigital.unellez.edu.ve/timoto-cuicas',
				},
				{
					foto: `${process.env.PUBLIC_URL}/assets/images/Botones-Cuivas.png`,
					nombre: 'Guasdualito',
					url: 'https://cuivas.unellez.org',
				},
				{
					foto: `${process.env.PUBLIC_URL}/assets/images/Botones-laboratorio-produccion.png`,
					nombre: '',
					url: 'http://edudigital.unellez.edu.ve/produccion',
				},
			],
		},

		{
			nombre_seccion: 'HISTÓRICO',
			numero_columnas: 6,
			centrar: false,
			data: [
				{
					foto: `${process.env.PUBLIC_URL}/assets/images/Botones-CampusCaribe.png`,
					nombre: '',
					url: 'http://edudigital.unellez.edu.ve/caribe',
				},
				{
					foto: `${process.env.PUBLIC_URL}/assets/images/Botones-CampusCaribe.png`,
					nombre: '',
					url: 'https://caribe.unellez.org.ve',
				},
				{
					foto: `${process.env.PUBLIC_URL}/assets/images/Botones-laboratorio-produccion.png`,
					nombre: '',
					url: 'http://edudigital.unellez.edu.ve/produccion',
				},
				{
					foto: `${process.env.PUBLIC_URL}/assets/images/1-Botones-COSPES-VPA.png`,
					nombre: '',
					url: 'http://edudigital.unellez.edu.ve/portuguesa/cospes',
				},
				{
					foto: `${process.env.PUBLIC_URL}/assets/images/1-Botones-VARINA-VPDS-1.png`,
					nombre: '',
					url: 'http://edudigital.unellez.edu.ve/barinas/varina',
				},
				{
					foto: `${process.env.PUBLIC_URL}/assets/images/1-Botones-VARINA-VPDS-1.png`,
					nombre: '',
					url: 'http://edudigital.unellez.edu.ve/varina',
				},
			],
		},
	]

	// Por agregar
	// https://unelliztazamorano.unellez.org
	// https://aulaambiente.unellez.org.ve
	// https://congresoedudigital2020.unellez.org.ve
	// https://congresopp.unellez.org.ve
	// https://jornadascieavpa.unellez.org.ve

	return (
		<>
			<SeccionHeader
				titulo="Campus CHUAO"
				subtitulo="Nuestro campus virtual Chuao es un espacio exclusivo para los alumnos de diferentes cursos, orientado a facilitar su experiencia de capacitación a distancia. Ofrece información adicional, así como también la posibilidad de establecer contacto interactivo de los alumnos con los docentes y entre los mismos alumnos para compartir sus experiencias."
				height="728.6px"
				transform="translate(0px, 264.085px)"
			/>

			<div className="et_pb_section et_pb_section_2 et_pb_with_background et_section_regular">
				{secciones.map((item, index) => {
					return (
						<React.Fragment key={index}>
							<div className="et_pb_row et_pb_row_5 et_had_animation">
								<div className="et_pb_column et_pb_column_4_4 et_pb_column_11 et_pb_css_mix_blend_mode_passthrough et-last-child">
									<div className="et_pb_module dsm_text_divider dsm_text_divider_2 et_had_animation">
										<div className="et_pb_module_inner">
											<div className="dsm-text-divider-wrapper dsm-text-divider-align-center et_pb_bg_layout_light">
												<div className="dsm-text-divider-before dsm-divider"></div>
												<Zoom>
													<h2 className="dsm-text-divider-header et_pb_module_header">
														<span>{item.nombre_seccion}</span>
													</h2>
												</Zoom>
												<div className="dsm-text-divider-after dsm-divider"></div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className={`et_pb_row et_pb_row_6 ${item.centrar ? 'centrar-todo' : ''}`}>
								{item.data.map((itemData, indexData) => {
									return (
										<Zoom key={indexData}>
											<div
												className={`et_pb_column et_pb_column_1_${item.numero_columnas} et_pb_column_12 et_pb_css_mix_blend_mode_passthrough`}
												// style={{ margin: 0 }}
												key={indexData}>
												<div className="et_pb_module et_pb_image et_pb_image_8 et-animated et_had_animation">
													<a href={itemData.url} target="_blank" rel="noopener noreferrer">
														<span className="et_pb_image_wrap">
															<img loading="lazy" src={itemData.foto} alt="" className="wp-image-68" width="auto" height="auto" />
														</span>
													</a>
												</div>

												{itemData.nombre != '' && (
													<div className="et_pb_module dsm_gradient_text dsm_gradient_text_0  et_pb_text_align_center">
														<div className="et_pb_module_inner">
															<h1 className="dsm-gradient-text">{itemData.nombre}</h1>
														</div>
													</div>
												)}
											</div>
										</Zoom>
									)
								})}
							</div>
						</React.Fragment>
					)
				})}
			</div>
		</>
	)
}
