import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Mapa from 'components/Mapa'
import ScrollToTop from 'react-scroll-to-top'
export default function index(props) {
	const SvgUp = (
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
			<path d="m12 6.879-7.061 7.06 2.122 2.122L12 11.121l4.939 4.94 2.122-2.122z" />
		</svg>
	)

	return (
		<div id="page-container" style={{ overflowY: 'hidden' }}>
			<div id="main-content">
				<article id="post-51" className="post-51 page type-page status-publish hentry">
					<div className="entry-content">
						<div id="et-boc" className="et-boc">
							<div className="et-l et-l--post">
								<div className="et_builder_inner_content et_pb_gutters3">
									<Header {...props} />

									{props.children}

									<Mapa />

									<Footer />
								</div>
							</div>
						</div>
					</div>
				</article>
			</div>

			<ScrollToTop smooth component={SvgUp} />
		</div>
	)
}
