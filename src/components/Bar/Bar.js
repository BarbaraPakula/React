import React from 'react';
// import styles from './Bar.scss';
import { slide as Menu } from 'react-burger-menu';
import Navbar from '../Navbar/Navbar';


class Bar extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }
  render() {
    const styles = {
      bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '30px',
        left: '36px',
        top: '36px',
      },
      bmBurgerBars: {
        background: '#999999',
      },
      bmBurgerBarsHover: {
        background: ' #c2c5d1',
      },
      bmCrossButton: {
        height: '24px',
        width: '24px',
      },
      bmCross: {
        background: '#999999',
      },
      bmMenuWrap: {
        position: 'fixed',
        height: '100%',
      },
      bmMenu: {
        background: '#373a47',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em',
      },
      bmMorphShape: {
        fill: '#373a47',
      },
      bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em',
      },
      bmItem: {
        display: 'inline-block',
      },
      bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)',
      },
    };

    return (

      <Menu styles={styles} >
        <div className={styles.navs}>
          <Navbar />
        </div>
      </Menu>

    );
  }
}


export default Bar;