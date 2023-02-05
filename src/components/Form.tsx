import { useReducer, useState } from "react"
import { Sub } from "../types"
import useNewSubForm from "../hooks/useNewsSubsForm"

interface FormProps {
	onNewSubs: (newSub: Sub) => void
}

const Form = ({onNewSubs}: FormProps) => {
	const [inputValues, dispatch] = useNewSubForm()

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault()
		onNewSubs(inputValues)
		dispatch({ type: "clear"})
    }

		const handlechange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			const {name, value} = evt.target 

			dispatch({
				type: "change_value",
				payload: {
					inputName: name,
					inputValue: value
				}
			})
		}

		const handleClear = () => {
			dispatch({
				type: "clear"
			})
		}

    return(
			<div>
				<form onSubmit={handleSubmit}>
					<input onChange={handlechange} value={inputValues.nick} type="text" name="nick" placeholder="nick" />
					<input onChange={handlechange} value={inputValues.subMonth} type="number" name="subMonth" placeholder="subMonth" />
					<input onChange={handlechange} value={inputValues.avatar} type="text" name="avatar" placeholder="avatar" />
					<textarea onChange={handlechange} value={inputValues.description} name="description" placeholder="description" />
					<button onClick={handleClear} type='button'>Clear the form</button>
					<button type='submit'>save New Sub</button>
				</form>
			</div>
    )
}

export default Form