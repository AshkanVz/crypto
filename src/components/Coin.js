import React from 'react';
import Zoom from 'react-reveal/Zoom';

// Styles
import styles from "./Coin.module.css";

const Coin = ({name,image,symbol,price,marketCap,priceChange}) => {
    return (
        <Zoom>
    <div className={styles.conta}>
        <div className={styles.container}>
            <img className={styles.image} src={image} alt="" />
            <span className={styles.name}>{name}</span>
            <span  className={styles.symbol}>{symbol.toUpperCase()}</span>
            <span className={styles.currentPrice}>$ {price.toLocaleString()}</span>
            <span className={priceChange > 0 ? styles.greenPriceChange : styles.redPriceChange} >{priceChange.toFixed(2)}</span>
            <span className={styles.marketCap} >$ {marketCap.toLocaleString()}</span>
            
            
        </div>
    </div>
    </Zoom>
    );
};

export default Coin;