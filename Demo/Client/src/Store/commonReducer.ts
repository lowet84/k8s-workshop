import { RootState } from 'store/store'

export interface Message {
  name: string
  id: string
  host: string
  timestamp?: Date
}

export type CommonAction =
  | { type: 'setMessages'; input: Message[] }
  | { type: 'addMessage'; input: Message }
  | { type: 'clearOldMessages' }
export type CommonState = { messages: Message[] }

export function setMessages(input: Message[]): CommonAction {
  return { type: 'setMessages', input }
}

export function addMessage(input: Message): CommonAction {
  return { type: 'addMessage', input }
}

export function clearOldMessages(): CommonAction {
  return { type: 'clearOldMessages' }
}

// Mattias skulle mörda mig om han såg den här koden! xD
export const getGroupedMessages = (state: RootState) => {
  let grouped: {
    name: string
    hosts: { host: string; ids: { id: string; timestamp: Date }[] }[]
  }[] = []
  state.common.messages.forEach(message => {
    let named = grouped.find(d => d.name == message.name)
    if (!named) {
      named = { name: message.name, hosts: [] }
      grouped.push(named)
    }
    let hosted = named.hosts.find(d => d.host == message.host)
    if (!hosted) {
      hosted = { host: message.host, ids: [] }
      named.hosts.push(hosted)
    }
    let idd = hosted.ids.find(d => d.id == message.id)
    if (!idd) {
      idd = { id: message.id, timestamp: message.timestamp }
      hosted.ids.push(idd)
    }
    idd.timestamp = message.timestamp
  })
  grouped = grouped.sort((a, b) => a.name.localeCompare(b.name))
  grouped.forEach(d => {
    d.hosts = d.hosts.sort((a, b) => a.host.localeCompare(b.host))
    d.hosts.forEach(e => {
      e.ids = e.ids.sort((g, h) => (g.id > h.id ? 1 : -1))
    })
  })
  return grouped
}

export function common(
  state: CommonState = { messages: [] },
  action: CommonAction
) {
  switch (action.type) {
    case 'setMessages':
      return { ...state, messages: action.input }
    case 'addMessage':
      var newMessage = { ...action.input }
      newMessage.timestamp = new Date()
      return { ...state, messages: state.messages.concat(newMessage) }
    case 'clearOldMessages':
      return {
        ...state,
        messages: state.messages.filter(
          d => d.timestamp.getTime() > new Date().getTime() - 5000
        )
      }
    default:
      return state
  }
}
