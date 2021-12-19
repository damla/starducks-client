import { ReactElement } from 'react';
import { Item } from '../../interfaces';
import styles from './styles.module.scss';

interface Props {
  coffee: Item;
}

export default function CoffeeItem({ coffee }: Props): ReactElement {
  const { title, description, ingredients } = coffee;

  return (
    <div data-testid="coffee-item" className={styles.Container}>
      <h2 data-testid="coffee-item-title" className={styles.Header}>
        {title}
      </h2>
      <p data-testid="coffee-item-description" className={styles.Description}>
        {description}
      </p>
      <div className={styles.Footer}>
        <span>Ingredients:&nbsp;</span>
        {ingredients.map((ingredient, i) => {
          return i === ingredients.length - 1 ? (
            <span data-testid="coffee-item-ingredient" key={`ingredient-${i}`}>
              {ingredient}
            </span>
          ) : (
            <span data-testid="coffee-item-ingredient" key={`ingredient-${i}`}>
              {ingredient},&nbsp;
            </span>
          );
        })}
      </div>
    </div>
  );
}
