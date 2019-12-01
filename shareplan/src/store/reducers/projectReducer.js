const iniState = {
    projects: [
        { id: '1', title: 'Help me find peach', content: 'blah blah'},
        { id: '2', title: 'Help me find peach 2', content: 'blah blah' },
        { id: '3', title: 'Help me find peach 3', content: 'blah blah' }
    ]
}

const projectReducer = (state = iniState, action) => {
    switch(action.type) {
        case 'CREATE_PROJECT':
            console.log('create project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        default:
            return state;
    }
    return state
}

export default projectReducer