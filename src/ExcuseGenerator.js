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
    'fish',
    'imaginary friend'
]

const accident = [
    'fell down the stairs',
    'crashed into a tree',
    'got someone pregnant',
    'got run over',
    'broke my arm',
    'broke my leg',
    'run someone over',
    'got stabbed',
    'got mugged'
]

const modifier = [
    'mild ',
    'acute ',
    'chronic ',
    'severe ',
    ''
]

const disorder = [
    'cancer',
    'colds',
    'dysmenorrhea',
    'migraine',
    'headache',
    'stomachache',
    'stomach flu',
    'vertigo',
    'chickenpox',
    'smallpox',
    'polio',
    'depression',
    'insanity',
    'existential crisis',
    'rabies',
    'flu',
    'dengue',
    'diarrhea',
    'loose bowel movement (LBM)',
    'death',
    'suicidal ideation',
    'food poisoning',
    'depression',
    'a depressive episode',
    'stroke',
    'asthma',
    'ebola fever',
    'diabetes',
    'a panic attack',
    'cardiac arrest',
    'hypertension',
    'goiter',
    'hyperthyroidism',
    'hypothyroidism',
    'tuberculosis',
    'hernia',
    'hemorrhoids',
    'arthritis',
    'seizures',
    'bronchitis',
    'emphysema',
    'cirrhosis',
    'hepatitis',
    'leukemia',
    'burns',
    'meningitis',
    'idontwannaworkism',
    'idontwannaworkitis',
    'financialindependencitis',
    'sleep apnea',
    'insomnia',
    'somnabulism',
    'narcolepsy',
    'hypersomnia',
    'dyssomnia',
    'anorexia',
    'bulimia'
]

const person = [
    'I have',
    'My {{relationships}} has'
]

const excuse = [
    '{{person}} {{modifier}}{{disorder}}.',
    'I {{accident}}.'
]

const grammar = {
    excuse,
    relationships,
    disorder,
    modifier,
    accident,
    person
}

export default Generatr(grammar)