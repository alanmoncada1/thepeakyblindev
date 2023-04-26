import * as React from 'react';
import {useEffect, useState} from "react";
import './TransitionMessageEffect.css';

const TransitionMessageEffect = (props: TransitionMessageEffectInterface) => {
    const [state, setState] = useState({
        text: "Welcome!",
        words: [
            "以太坊",
            "¡Bienvenido!",
            "欢迎",
            "स्वागत",
            "Добро пожаловать",
            "مرحبا",
            "স্বাগতম",
            "Bem-vindo",
            "Bienvenue",
            "Willkommen",
        ],
    });

    // loops over chars to transition a text to another
    const transition = (start: string, end: string): void => {
        // array of chars to randomly transition the text between start and end
        const chars = [
            "a",
            "b",
            "c",
            "d",
            "x",
            "y",
            "z",
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "{",
            "}",
            "%",
            "$",
            "?",
            "!",
        ]
        // duration of the global transition
        const duration = 3
        // speed of the transition for each letter
        const frameRate = 30

        // text variables
        const textString = start.split("")
        const result = end.split("")
        const slen = textString.length
        const rlen = result.length

        // time variables
        let present = new Date()
        let past = present.getTime()
        let count = 0
        let spentTime = 0
        // splitTime  = milliseconds / letters
        let splitTime = (duration * 70) / Math.max(slen, rlen)

        function update() {
            // Update present date and spent time
            present = new Date()
            spentTime += present.getTime() - past

            // Random letters
            for (let i = count; i < Math.max(slen, rlen); i++) {
                const random = Math.floor(Math.random() * (chars.length - 1))
                // Change letter
                textString[i] = chars[random]
            }

            // Morph letters from start to end
            if (spentTime >= splitTime) {
                // Update count of letters to transition
                count += Math.floor(spentTime / splitTime)
                // Morphing
                for (let j = 0; j < count; j++) {
                    textString[j] = result[j] || ""
                }
                // Reset spent time
                spentTime = 0
            }

            // Update DOM
            setState({ ...state, text: textString.join("") })

            // Save present date
            past = present.getTime();

            // Loop
            if (count < Math.max(slen, rlen)) {
                // Only use a setTimeout if the frameRate is lower than 60FPS
                // Remove the setTimeout if the frameRate is equal to 60FPS
                transitionTimeout = setTimeout(() => {
                    window.requestAnimationFrame(update)
                }, 1000 / frameRate)
            }
        }

        // Start loop
        update()
    }

    let transitionTimeout: NodeJS.Timeout

    useEffect(() => {
        let counter = 0

        const transitionInterval = setInterval(() => {
            const start = state.text
            const end = state.words[counter]

            transition(start, end)

            if (counter < state.words.length - 1) {
                counter++
            } else {
                counter = 0
            }
        }, 3000)

        return () => {
            clearInterval(transitionInterval)
            clearTimeout(transitionTimeout)
        }
    }, [])

    return <div className={`${props.className}`}>{state.text}</div>;
}

export default TransitionMessageEffect;

interface TransitionMessageEffectInterface {
    className?: string
}