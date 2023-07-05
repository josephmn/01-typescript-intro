
const skills: string[] = ['Bash','Counter','Healing'];

// interface
interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}

const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter','Drow','King']
}

strider.hometown = 'Riverdell';

console.table(strider);

export {}