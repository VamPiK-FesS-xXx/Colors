//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)
import './styles/style.css'
import chroma from 'chroma-js'
function App() {
	function TemplateColor() {
		return (
			<>
				<div className='col'>
					<h2 className='col-text'>text</h2>
					<button className='col-btn'>
						<FontAwesomeIcon icon='fa-solid fa-lock' />
					</button>
				</div>
			</>
		)
	}

	return (
		<>
			<div className='container-col'>
				<TemplateColor />
				<TemplateColor />
				<h2>{chroma.random()}</h2>
				<TemplateColor />

				<TemplateColor />
			</div>
		</>
	)
}

export default App
