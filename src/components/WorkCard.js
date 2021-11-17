import React from 'react'
import arrow from '../img/arrow_icon.svg'
import wordCounter from '../img/word-counter.gif'

export default function WorkCard() {
    return (
        <div className='works__card'>
            <div className='works__card__top'>
                <div className='works__card-name'>Minesweeper</div>
                <p className='works__card-date'>00 / 00</p>
            </div>
            <div className='works__card__gif-cover'>
                <img src={wordCounter} />
                {/*<div className='works__card__gif'></div>*/}
                {/*<div className='works__card__gif-cover__text'>*/}
                {/*    Aenean convallis ultricies mollis. In hac habitasse platea dictumst. Cras metus enim,*/}
                {/*    mattis quis lacus id, dapibus pulvinar orci. Interdum et malesuada fames ac ante ipsum*/}
                {/*    primis in faucibus. Proin laoreet sit amet lorem a vestibulum. Nulla quis consectetur ligula.*/}
                {/*    Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.*/}
                {/*    Maecenas vitae malesuada justo, a eleifend purus.*/}
                {/*</div>*/}
            </div>
            <div className='works__card__footer'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum gravida fermentum ultricies.
                    In vel lacus sem.
                </p>
                <img src={arrow} className='works__card__footer__arrow' />
            </div>
        </div>
    )
}