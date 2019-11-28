import Generatr from './Generatr'

const relationships = [
    'girlfriend',
    'boyfriend',
    'cousin',
    'uncle',
    'aunt',
    'mother',
    'father',
    'grandfather',
    'grandmother',
    'dog',
    'cat',
    'imaginary friend'
]

const accident = [
    'fell down the stairs',
    'crashed into a tree',
    'got someone pregnant',
    'got run over',
    'broke my arm',
    'broke my leg'
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
    'insanity',
    'existential crisis'
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