interface ILevelTrash {
    color: string,
    name: string
}

export const trashLevels: ILevelTrash[] = [
    {
        color: 'gray',
        name: 'очищено',
    },
    {
        color: 'green',
        name: 'слабо',
    },
    {
        color: '#FFD600',
        name: 'средне',
    },
    {
        color: 'red',
        name: 'сильно',
    }
]