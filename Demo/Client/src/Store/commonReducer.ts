import { RootState } from 'store/store'

export type CommonAction =
  | { type: 'setMessages'; input: string[] }
  | { type: 'addMessage'; input: string }
export type CommonState = { messages: string[] }

export function setMessages(input: string[]): CommonAction {
  return { type: 'setMessages', input }
}

export function addMessage(input: string): CommonAction {
  return { type: 'addMessage', input }
}

export const getMessages = (state: RootState) => state.common.messages

export function common(
  state: CommonState = { messages: [] },
  action: CommonAction
) {
  switch (action.type) {
    case 'setMessages':
      return { ...state, messages: action.input }
    case 'addMessage':
      return { ...state, messages: state.messages.concat(action.input) }
    default:
      return state
  }
}
