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

  render() {
    const { isOpen } = this.state;
    return (
      <div className={styles.cartContainer}>
        <button
          type='button'
          className={styles.button}
          onClick={() => {
            this.setState({ isOpen });
          }}
        >
          购物车 2 (件)
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

export default ShoppingCart;
