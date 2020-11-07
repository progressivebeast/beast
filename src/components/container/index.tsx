import React from 'react'
import Header from '../header';
import Footer from '../footer';
import Content from '../content';
import styles from './container.module.scss';

const Container = () => {
    return (
        <div className={`${styles['main']}`}>
            <Header />
            <Content />
            <Footer />
        </div >
    )
}

export default Container;