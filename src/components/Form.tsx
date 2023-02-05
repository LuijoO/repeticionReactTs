import { table } from "console"
import { disconnect } from "process"
import { useState } from "react"

// cuando definimos una interfaz la colocamos como en la linea del evt reactchange tal... como por ejemplo.
interface FormState {
	nick: string
	subMonth: number
	avatar: string
	description: string
}

const Form = () => {
	// en la siguiente linea utilizamos la interfaz creada al inicio (FormState)
	const [inputValues, setInputValues] = useState<FormState>({
		nick: '',
		subMonth: 0,
		avatar: '',
		description: ''
	})

    const handleSubmit = () => {

    }

		const handlechange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			setInputValues({
				...inputValues,
				[evt.target.name]: evt.target.value
			})
		}

    return(
			<div>
				<form onSubmit={handleSubmit}>
					<input onChange={handlechange} value={inputValues.nick} type="text" name="nick" placeholder="nick" />
					<input onChange={handlechange} value={inputValues.subMonth} type="number" name="subMonth" placeholder="subMonth" />
					<input onChange={handlechange} value={inputValues.avatar} type="text" name="avatar" placeholder="avatar" />
					<textarea onChange={handlechange} value={inputValues.description} name="description" placeholder="description" />
					<button>save New Sub</button>
				</form>
			</div>
    )
}

export default Form