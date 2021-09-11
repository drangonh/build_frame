import React from "react";
import styles from "./index.module.less";

interface Props { }

interface State {
  isOpen: boolean;
}

class ShoppingCart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  clickBtn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, show: boolean): void => {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen
    })
  }

  render() {
    const show = true;
    const { isOpen } = this.state;
    return (
      <div className={styles.cartContainer}>
        <button
          type='button'
          className={styles.button}
          onClick={e => this.clickBtn(e, show)}
        >
          购物车 3 (件)
        </button>
        <div
          className={styles.cartDropDown}
          style={{
            display: isOpen ? "block" : "none",
          }}
        >
          <ul>
            <li>robot 1</li>
            <li>robot 2</li>
          </ul>
        </div>
      </div>
    );
  }
}

export {
  ShoppingCart
};
