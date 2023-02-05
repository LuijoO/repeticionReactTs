import { useReducer } from "react"
import { Sub } from "../types"

// cuando definimos una interfaz la colocamos como en la linea del evt reactchange tal... como por ejemplo.
interface FormState {
	inputValues: Sub
}

type FormReducerAction = {
	type: "change_value",
	payload: {
		inputName: string,
		inputValue: string
	}
} | {
	type: "clear"
}

const INITIAL_STATE = {
	nick: '',
	subMonth: 0,
	avatar: '',
	description: ''
}

const formReducer = (state: FormState["inputValues"], action: FormReducerAction) => {
	switch (action.type) {
		case "change_value":
			const {inputName, inputValue} = action.payload
		return{
			...state,
			[inputName]: inputValue
		}
		case "clear":
			return INITIAL_STATE
	}
}

const useNewSubForm = () => {
    return useReducer(formReducer, INITIAL_STATE)
}

export default useNewSubForm