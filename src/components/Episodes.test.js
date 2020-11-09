import React from 'react';
import { render, screen } from '@testing-library/react';
import Episodes from './Episodes';

test('Episodes renders correctly', () => {
    render(<Episodes episodes={[]}/>)
})

const episodes = [
    {name: 'Test Episode 1', id: 1, season: 1, episode: 1, runtime: 50, summary: 'Test test test1'},
    {name: 'Test Episode 2', id: 2, season: 2, episode: 2, runtime: 45, summary: 'Test test test2'}
]

test('rerenders correctly when passing in new episodes data', () => {
    const {rerender} = render(<Episodes episodes={[]}/>)
    let episodeObjects = screen.queryAllByTestId('episode')
    expect(episodeObjects).toStrictEqual([])

    rerender(<Episodes episodes={episodes}/>)

    episodeObjects = screen.queryAllByTestId('episode')
    expect(episodeObjects).toHaveLength(2)
})