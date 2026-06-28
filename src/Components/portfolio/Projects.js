import React from 'react';
import Clock from "../clock/Clock";
import Todo from "../toDo/Todo";
import DiceGame from "../scarne/DiceGame";
import Quote from '../quote/Quote';
import "./styles/Projects.css";

function Projects() {

        const getClock = () => {
            return (
                <section className='protfolio-projects-clock-wrapper'>
                    <Clock />
                    <section className='protfolio-projects-clock-description-wrapper'>
                        <h2>Digital Clock</h2>
                        <p>A real-time digital clock built with React that displays the current local time, updating every second with a clean terminal-style interface.</p>
                        <ul>
                            <li>Live updates every second using setInterval and React hooks.</li>
                            <li>Interval cleanup on unmount via useRef to prevent memory leaks.</li>
                            <li>Responsive font size that scales with viewport width.</li>
                        </ul>
                    </section>
                </section>
            )
        }

        const getTodoApp = () => {
            return (
                <section className='protfolio-projects-todo-wrapper'>
                    <section className='protfolio-projects-clock-description-wrapper'>
                        <h2>Todo App</h2>
                        <p>A task management app that lets you add, complete, and remove tasks with a toggleable dark mode for comfortable use in any lighting condition.</p>
                        <ul>
                            <li>Add and remove tasks with instant UI feedback.</li>
                            <li>Dark mode toggle with smooth theme transitions.</li>
                            <li>Built with React hooks — no external state library needed.</li>
                        </ul>
                    </section>
                    <Todo />
                </section>
            )
        }

        const getDiceGame = () => {
            return (
                <section className='protfolio-projects-dicegame-wrapper'>
                    <DiceGame />
                    <section className='protfolio-projects-clock-description-wrapper'>
                        <h2>Dice Game</h2>
                        <p>A two-player turn-based implementation of Scarne's Dice — a classic game where strategy and risk management decide the winner.</p>
                        <ul>
                            <li>Roll to accumulate points or pass to bank your score safely.</li>
                            <li>Rolling a 1 loses your current round's score — risk vs reward.</li>
                            <li>First player to reach 100 points wins the game.</li>
                        </ul>
                    </section>
                </section>
            )
        }

        const getQuote = () => {
            return (
                <section className='protfolio-projects-quote-wrapper'>
                    <section className='protfolio-projects-clock-description-wrapper'>
                        <h2>Quote Generator</h2>
                        <p>A random quote fetcher that pulls inspirational quotes from a live REST API, with a glow mode for a neon aesthetic experience.</p>
                        <ul>
                            <li>Fetches quotes from the Quotable.io public API using Axios.</li>
                            <li>Glow mode toggles a neon light-style visual effect.</li>
                            <li>Refresh button loads a new quote instantly on demand.</li>
                        </ul>
                    </section>
                    <Quote />
                </section>
            )
        }

        
    const getAllProjects = () => {
        return (
            <section  className='protfolio-projects-together-wrapper'>
                {getClock()}
                {getTodoApp()}
                {getDiceGame()}
                {getQuote()}
            </section>
        )
    }

  return ( 
    <section id='protfolio-projects-wrapper'>
        <h1>Projects</h1>
        {getAllProjects()}
    </section>
  )
}

export default Projects;
