const iniState = {
    projects: [
        { id: '1', title: 'Help me find peach', content: 'blah blah'},
        { id: '2', title: 'Help me find peach 2', content: 'blah blah' },
        { id: '3', title: 'Help me find peach 3', content: 'blah blah' }
    ]
}

const projectReducer = (state = iniState, action) => {
    return state
}

export default projectReducer