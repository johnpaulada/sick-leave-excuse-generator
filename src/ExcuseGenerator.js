import Generatr from './Generatr'

const relationships = [
    'girlfriend',
    'boyfriend',
    'mother',
    'father',
    'grandfather',
    'grandmother',
    'dog',
    'cat'
]

const accident = [
    'fell down the stairs',
    'crashed into a tree'
]

const modifier = [
    'mild',
    'acute',
    'chronic',
    'severe'
]

const disorder = [
    'cancer',
    'colds',
    'dysmenorrhea',
    'migraine',
    'headache',
    'stomachache',
    'vertigo',
    'chickenpox',
    'smallpox',
    'polio',
    'depression',
    'insanity'
]

const grammar = {
    excuse: [
        'My {{relationships}} has {{modifier}} {{disorder}}.',
        'I have {{modifier}} {{disorder}}.',
        'I {{accident}}.'
    ],
    relationships,
    disorder,
    modifier,
    accident
}

export default Generatr(grammar)